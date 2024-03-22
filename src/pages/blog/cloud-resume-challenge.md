---
layout: ../../layouts/BlogPost.astro
title: The Cloud Resume Challenge
subtitle: "Developing my development skills by wrestling with AWS IAM policies and facing the wrath of YAML indentation."
edited: 21 March 2024
published: 21 March 2024
---

> [GitHub Repository](https://github.com/Sergix/cloud-resume-challenge)  
> [Completed Project](https://cloudresume.sergix.dev/)

# What is the Cloud Resume Challenge?

In developing skills for my future career, a friend recommended the [Cloud Resume Challenge (AWS Edition)](https://cloudresumechallenge.dev/docs/the-challenge/aws/) as a practical way to develop cloud development and problem-solving skills. The challenge offers high-level instructions for building a basic serverless application with a static frontend using AWS, Google Cloud, or Azure. The AWS route took me about 3 days to complete (besides the recommended AWS certification).

# Stack

- Backend
   - AWS SAM -- Serverless Application Model (deploys as AWS CloudFormation)
      - AWS API Gateway
         - AWS Lambda
      - AWS DynamoDB
- Frontend
   - AWS CloudFront
      - AWS S3 static site
   - Netlify + Netlify DNS
- CI/CD: GitHub Actions

# The Challenge

## Setup

I created a basic HTML/CSS frontend with some placeholder content to start off with. I then initialized the git repo and pushed to GitHub using the GitHub CLI.

## S3

AWS S3 buckets are an inexpensive and convenient way to host static sites (plain HTML/JS/CSS). Normally I've used Netlify, but since this frontend doesn't have a build step, S3 is much easier.

I wanted to use a subdomain of `sergix.dev` to point to my static site, `cloudresume.sergix.dev`. I found that the S3 bucket first has to explicitly be named `cloudresume.sergix.dev`.

One of the biggest difficulties with learning AWS is *policy configuration*. Everything in AWS has a designated *ARN* (Amazon Resource Name) that designates each individual created resource. For example, my S3 bucket's ARN is `arn:aws:s3:::cloudresume.sergix.dev`. Access policies for resources can then be configured for AWS IAM roles, users, or directly attached to the resource. To make the S3 bucket publicly accessible, a policy must be directly attached to the bucket:

```json
{
    "Version": "2012-10-17",
    "Id": "Cloud-Resume-Challenge-S3-Policy",
    "Statement": [
        {
            "Sid": "AllowStaticWebsiteAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::cloudresume.sergix.dev/*"
        }
    ]
}
```

This allows any client to `s3:GetObject` and retrieve any object (`/*`) in the bucket.

## DNS Routing

My website `sergix.dev` is hosted on Netlify, my favorite web development and deployment platform. My website's domain also routes its DNS through Netlify's DNS, and so I can configure any DNS records through Netlify.

I created a CloudFront distribution to be in front of the S3 bucket and for DNS integration. The CloudFront distribution configures an *Origin*, in this case an S3 static site bucket, to redirect traffic to. I then added a CNAME record in Netlify DNS that points to the CloudFront public distribution domain name assigned by AWS. This gives HTTP-only routing, but this will be changed to HTTPS in the next step.

## HTTPS

First, I created an SSL certificate in ACM (Amazon Certificate Manager) and then added a CNAME DNS record to `sergix.dev` with the required validation information. AWS uses this key/value pair in the DNS record to verify that I own the domain and to appropriately provision the SSL certificate for my domain.

I then added the new ACM certificate to my CloudFront distribution by just selecting the certificate.

*Now, HTTPS is ready to go!*

## DynamoDB

AWS DynamoDB is a **document-based database** that flexibly stores items based on a primary key and each individual item can have its own defined columns. Creating a DynamoDB instance is easy to setup and only requires a primary key and primary key type. I chose `WebPropertyName: String` as my primary key since I didn't know at first how many different pieces of data the frontend would want to store and need to access.

## Lambda API

AWS Lambda is a serverless function platform that runs Python, Node.js, or other server-side code whenever a request is received. I chose to write my function and tests in Python.

This challenge requires a visitor count function that is displayed on the frontend. I decided to add an `action` query parameter to the endpoint that performs one of two actions when the `GET` API is requested:

- `get`: return the current visitor count
- `increment`: increment then return the visitor count

The query parameters are available via the `event` object's `queryStringParameters` in the `lambda_handler` function, which is the entry point for the Lambda function.

The function uses the Python `boto3` library developed by AWS to interact directly with the DynamoDB instance in the `visitorcount` table:

```python
# aws-sam/visitor_count/app.py

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('visitorcount')

# ...

table.get_item(
   Key={ 'WebPropertyName': 'VisitorCount'}
)
```

I also created an AWS API Gateway public endpoint that restricts any access to the function to the appropriate HTTP methods. I only have `GET` enabled for this function, and so the gateway only allows those requests.

## Frontend JavaScript

I added a classic XMLHttpRequest to the frontend (we're going pre-`Promise` here...) that just calls the endpoint once the document loads and waits for a response:

```js
// www/index.js

// when the document is loaded
document.addEventListener("DOMContentLoaded", function(event) {
	var xhr = new XMLHttpRequest();

   // when the request finishes...
	xhr.onreadystatechange = function() {

      // if it was successful,
		if (this.readyState === 4 && this.status === 200) {
			// update HTML
		}
	};

   // prepare the request object
	xhr.open("GET", baseURL + "/visitor-count?action=increment", true);

	// send the request!
   xhr.send();
})
```

However, I immediately ran into the dreaded `CORS` errors when requesting the endpoint. After searching on StackOverflow and countless other resources for the configuration I was missing, I ended up with the following solution:

- Disable authorization in the AWS API Gateway (since this endpoint is public anyway)
- [Manually add the CORS header to all responses in Lambda](https://stackoverflow.com/a/43029002):
   ```json
   'headers': {
        'Access-Control-Allow-Origin': '*'
    },
   ```

## AWS SAM

This challenge then asks you to reconstruct the three critical application resources into AWS's Serverless Application Model: DynamoDB, Lambda, and API Gateway.

SAM is a simplified frontend for AWS CloudFormation designed specifically for serverless applications that typically utilize these resources. SAM is an *infrastructure as code* (IaC) platform that takes a configuration file and any associated resources (code, static resources, ...) and automatically provisions and deploys those resources on AWS.

This mindset shift from manually deploying resources and servers to automatic provision was difficult for me -- one of my biggest barriers was that IaC is not a procedural, batch-script-deployment way of thinking. With batch-script or Docker-style deployment, you step-by-step (1) authenticate, (2) provision, (3) upload/update, and (4) run. However, IaC brings this all together into a *declarative*, rather than procedural, environment. The declarative (YAML) configuration is then automatically provisioned and executed (deployed) by the SAM platform. The advantage of IaC, and the problem that it solves, is that all of my resources are then plainly defined with specific versioning and resource requirements, and this configuration can be easily replicated.

### SAM Templates

SAM templates are similar to other YAML configuration formats. You can run all SAM-configuration locally using the [`sam` CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html), which is packaged separately from the `aws` CLI.

After initializing the SAM directory using `sam init`, I investigated the default YAML configuration. Each service is defined under the `Resources` section and all AWS console configuration can be defined there. It does, however, take a while to find the approprite configuration object definition in the [SAM specification](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html). (SAM objects can also use normal CloudFormation objects as well.)

After tinkering with the Lambda resource configuration, I ended up with the following resource object that deploys my Lambda function:

```yaml
# aws-sam/template.yaml

VisitorCountFunction:
   Type: AWS::Serverless::Function
   Properties:
         CodeUri: visitor_count/
         Handler: app.lambda_handler
         Runtime: python3.10
         Architectures:
         - x86_64
         Events:
         VisitorCountHttpApi:
            Type: Api
            Properties:
               Path: /visitor-count
               Method: get
```

The `VisitorCountHttpApi` is an inline `EventSource` object that *defines an API Gateway*, instead of creating a separate resource definition.

THe DynamoDB resource is configured in just a few lines:

```yaml
# aws-sam/template.yaml

VisitorCountTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      TableName: visitorcount
      PrimaryKey:
        Name: WebPropertyName
        Type: String
```

(The Lambda function ensures that the appropriate table item exists.)

In this current configuration, the DynamoDB table is deleted whenever new changes are deployed. To persist, a [CloudFormation change set](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html) can be used, but I have not configured it yet.

### IAM Policies

The most tedious part about setting up SAM was applying the proper IAM roles. In more secure setups, you would configure an IAM identity, but for this project I just created a normal IAM user and authenticated SAM using the IAM access key. The IAM role attaches all necessary access policies for DynamoDB, S3, Lambda, etc. However, SAM would continuously fail to deploy because of a missing access policy, so I had to manually update the IAM policies until all necessary services were included.

In addition, an inline policy had to be attached directly to the Lambda resource in the SAM configuration to enable DynamoDB access, which is delegated from the IAM user:

```yaml
# aws-sam/template.yaml

VisitorCountFunction:
   Type: AWS::Serverless::Function
   Properties:
      # ...
      Policies:
      - Statement:
         - Sid: DynamoReadWriteVisitorCountPolicy
            Effect: Allow
            Action:
            - dynamodb:GetItem
            - dynamodb:Scan
            - dynamodb:Query
            - dynamodb:DescribeTable
            - dynamodb:PutItem
            - dynamodb:UpdateItem
            Resource: '*'
```

## GitHub Actions

This challenge requires GitHub actions pipelines for CI/CD. I thought that this would be one of the simpler parts of this project; however, it was unfortunately a painful process of trying to figure out how to setup SAM to work inside a workflow.

### Backend

For SAM, you first have to authenticate on every workflow job using `aws-actions/configure-aws-credentials@v4`, then grabbing the environment variables defined for those secrets in the repository. I was stuck for a while on this since I forgot that GitHub repos can have [sandboxed environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment) set up that contain separate credentials, and so I had to manually add that detail to the workflow job by adding `environment: aws-sam`.

After this, though, it was a straightforward process of using `sam build` and `sam deploy` to deploy the repository `on: [push]`. (Albeit, with even more IAM policy wrangling.)

#### Tests

Python tests were automatically generated by `sam init`, so I tweaked them to run the AWS SAM Lambda function and API Gateway. The template worked very well by just running `pytest` in the repository, and it tests both the `increment` and `get` actions by ensuring the function returns just an integer in the response body:

```python
# aws-sam/tests/unit/test_handler.py

# apigw_get_event: pytest fixture that returns a JSON request object
def test_lambda_handler_get(apigw_get_event):
    ret = app.lambda_handler(apigw_get_event, "")
    data = json.loads(ret["body"])

    assert ret["statusCode"] == 200
    assert type(data) is int
```

Then, this test was added to the GitHub action by scaffolding `pytest` and running the test. If the test succeeds, the SAM deployment runs:

```yaml
# .github/workflows/sam-pipeline.yaml

jobs:
  pytest:
    runs-on: ubuntu-latest
    environment: aws-sam
    steps:
    # ...
    - run: |
        pip install pytest
        pytest
  sam-build-deploy:
    needs: pytest
    # ...
```

### Frontend

Although the challenge asks you to split the frontend and backend into two repos, I decided to just split the resources in the same repo into two different subdirectories. Each workflow runs whenever a change is pushed to its respective directory:

```yaml
# .github/workflows/sam-pipeline.yaml

on:
  push:
    paths:
      - 'aws-sam/**'
```

Thankfully, the frontend CI/CD configuration was much simpler than the backend configuration. Although AWS authentication is still needed, S3 has a `sync` command that syncs the given directory with the designated bucket:

```sh
# .github/workflows/www.yaml

aws s3 sync ./ s3://cloudresume.sergix.dev --delete
```

Then, if this command succeeds, it invalidates the CloudFront cache so that the edge cache contains the latest copy of the S3 bucket:

```sh
# .github/workflows/www.yaml

aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_CLOUDFRONT_ID }} --paths '/*'
```

# [Click here to see the final result!](https://cloudresume.sergix.dev/)

# Next Steps

Although the project is complete, I would still like to accomplish the following:

1. Persist DynamoDB table across deploys using changesets
2. Use a static endpoint for the API Gateway under my subdomain, i.e. `https://cloudresume.sergix.dev/visitor-count`
3. Complete an AWS certification

# Thank you for reading!

You can find me at [sergix.dev](https://sergix.dev).

> [GitHub Repository](https://github.com/Sergix/cloud-resume-challenge)  
> [Completed Project](https://cloudresume.sergix.dev/)