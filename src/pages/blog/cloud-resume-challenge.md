---
layout: ../../layouts/BlogPost.astro
title: Cloud Resume Challenge
subtitle: NaN
edited: 8 March 2024
draft: true
---

# Steps
1. Created basic HTML/CSS
2. initialized git repo and pushed to github using CLI
3. Created S3 bucket
   1. web static hosting
   2. had to figure out how to properly configure policy
4. pointed Netlify DNS to S3 via CNAME
5. created DynamoDB db
6. created Lambda function
   1. had to figure out how to read payload
7. created API Gateway for lambda function
8. created ACM cert for HTTPS on subdomain
9. used ACM cert to create CloudFront distribution for HTTPS -> S3
10. added JS to homepage to fetch/increment visitor count
    1. CORS :) fix: https://stackoverflow.com/a/43029002, and disabling the API Gateway CORS config
11. 