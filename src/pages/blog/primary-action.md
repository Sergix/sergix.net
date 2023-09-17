---
layout: ../../layouts/BlogPost.astro
title: "UX: Illuminating Intention"
subtitle: Effective application action design
summary: "How do you, as a designer or developer, effectively guide the user to the action they should take?"
published: 5 December 2020
edited: 15 August 2022
---

*Of course, many of these recommendations are my own opinions on solving the core issue. A good designer will test their applications thoroughly to determine their best approach.*

<hr/>

## Table of Contents

  0. [The Importance of Intention](#importance-of-intention)
  1. [Types of actions](#types-of-actions)
  2. [Order](#order)
  3. [Reduce choices](#reduce-choices)
  4. [Separation](#separation)
  5. [Visual weight](#visual-weight)
  6. [Microcopy](#microcopy)
  7. [Destructive primary actions](#destructive-primary-actions)
  8. [Conclusion](#conclusion)
  9. [Research](#research)

## The Importance of Intention <a name="importance-of-intention"></a>

User Experience (UX) designers determine how we live our technological lives. UX engineers specifically design each interaction we experience with our devices by psychologically influencing how we interpret information through the organization and visual style of an interface. By composing accessible, user-friendly interfaces, the user has a positive response to the application, and will likely continue using it. A major part of interface design is providing the user with *actions*. An interface can have a variety of user actions, each with a different intention and goal, that guide the user through the application and allow the user to accomplish tasks. However, this variety can overwhelm and confuse the user if not designed properly since each action visible on the interface adds *cognitive overhead*. Each choice increases the complexity of the user's decision.

**How do you, as a designer or developer, effectively guide the user to the action they should take?**

## Types of actions <a name="types-of-actions"></a>

There are 3 main types of actions: **primary**, **secondary**, and **tertiary**.

1. **Primary action —** the primary goal and intended action of an interface.

2. **Secondary action —** an alternative to the primary action that is typically less utilized.

3. **Tertiary action —** a miscellaneous action the user could take.

Each action type serves a different purpose for the user. Normally, the primary action has a *positive* result, such as a dialog confirmation or form submission, while the secondary action is its negation, such as canceling a dialog's action or returning to the previous step in a form. Sometimes, though, these roles are flipped — the [Destructive primary actions](#destructive-primary-actions) section later in this article describes these situations.

## Order <a name="order"></a>

The presented order of actions in an interface is a hotly debated topic among UX designers (see [this UX StackExchange question](https://ux.stackexchange.com/questions/1072/ok-cancel-on-left-right)). The two sides of the argument are (as I have defined):

1. **Linguistic** order (*Primary action* | *Secondary action*)

    Since most Western cultures and the English language read left-to-right, give the primary action first.

2. **Progression** order (*Secondary action* | *Primary action*)

    Most primary actions involve concluding a step or progressing to the next step in an application, so order the actions as if they were labeled *Previous* and *Next*.

Both arguments have a good point. So what do we choose?

In short, **it doesn't really matter.**

[Surveys show](http://measuringuserexperience.com/SubmitCancel/) that the order itself has marginal significance. What actually matters is consistency. If you choose to order your actions a certain way in one part of your application, maintain that order in your entire application. **A user's first interaction will set their expectation**, and you must meet that expectation throughout their entire experience.

### Which order is most common?

Some designers argue that since Windows is the most popular operating system and it uses the linguistic order, all web applications should use the same order. However, many style guides (including [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/windows-and-views/dialogs/)) implement progression order. If you're building a web application, you can perform tests to find out which order your users are most familiar with, but ultimately it doesn't make much of a difference.	

Here's a few examples I found with what order they specify.

| UX Guide                               | Linguistic Order | Progression Order |
| -------------------------------------- | ---------------- | ----------------- |
| Apple Human Interface Guidelines       | ❌                | ✔️                 |
| GNOME                                  | ❌                | ✔️                 |
| Material (+ Android)                   | ❌                | ✔️                 |
| Ubuntu                                 | ❌                | ✔️                 |
| Windows User Experience Guidelines     | ✔️                | ❌                 |
| Linux                                  | ✔️                | ❌                 |
| Java                                   | ✔️                | ❌                 |
| New York State User Experience Toolkit | ✔️                | ❌                 |

To clarify, I did not search for any specific order. The fact that the choice is split 50/50 is a coincidence, but it generously emphasizes the point.

### What if you have more than two options?

The primary action and its secondary, negative action should be the first and last actions, in either order. This follows the *Serial Position Effect*, a composition of the *Primacy Effect* and *Recency Effect*, which states that the first and last items in a list are psychologically perceived to have greater significance than those in the middle.

## Reduce choices <a name="reduce-choices"></a>

[Hick's Law](https://lawsofux.com/hicks-law), in essence, states that "the time it takes to make a decision increases with the number and complexity of choices."

Users have to make countless choices when interacting with your application. To help the user efficiently decide on their intended action, a simple (but difficult) solution is to **reduce the number of visible choices of actions the user can make**. This reduces the *cognitive overhead* the application puts on the user.

**An interface should only provide one primary action.** Each section of the interface should have *one goal*. However, multiple secondary or tertiary actions are acceptable since there could be various alternatives to the primary action.

## Separation <a name="separation"></a>

The visual separation of actions greatly influences how they are interpreted. Typically, actions that relate to the same objective (whether it be confirming or denying that objective) should be grouped together visually with similar visual style so that the user can easily discover related controls quickly.

Visually separating controls results in interesting user behavior. Typically, when actions are placed on opposite ends of an interface horizontally, they are initially interpreted in *progression order*, even if they are not actually ordered that way.

Incorrect *alignment* of actions confuses the user. In dialogs, actions should be aligned to the right of the interface. In virtually every other type of interface, the actions should be left-aligned.

In general, **keep primary and secondary actions in the same visual group** and aligned left.

## Visual Weight <a name="visual-weight"></a>

Make the primary action of an interface stand out to draw the user's attention. Various stylistic attributes can be applied to create visual prominence, such as color, border, and iconography. A combination of these can also be used to clarify importance and intention. Secondary actions should have a less prominent style that heavily contrasts with the primary action. Sufficient contrast also alleviates issues colorblind users might have when using your application. **If you removed the action labels, could you identify the primary action?**

### Color

Color is an invaluable tool in UX design since humans naturally associate colors with different emotions. Green evokes positive emotions and is commonly related to progression, such as the green signal on a traffic light, while red is normally associated with danger and urgency, such as a stop sign. Positive primary actions should have a positive color such as green or blue, and negative primary actions have a negative color such as red or orange. Secondary actions should be a neutral color such as gray.

Notice, however, the specific examples I used to illustrate the associations of green and red: traffic signals. Cultural differences should be a slight consideration in your designs since some cultures have atypical color associations. Analyze your target audience and decide whether you need to comply with these differences.

### Icons

Used strategically, icons clarify an action's purpose and effectively add visual weight. Buttons in particular benefit from the proper use of an icon preceding its label. Use icons only on primary actions since adding icons to secondary actions quickly confuses the user with unnecessary visual weight.

**Icons should almost always be paired with a textual label.** Many icons, even common ones, create confusion if not explained in certain contexts.

## Microcopy <a name="microcopy"></a>

Every action needs to have a corresponding textual label, whether it is explicit (visual), implicit (ARIA tags), or both. Your users obviously need to know what an action does, and well-written microcopy helps your user determine the primary action of an interface. **An action's label should be clear and concise.**

### Action verbs

You should *rarely* use just the words *OK* or *Yes* as an action's label. These terms provide no contextual information relating to the primary action and require the user to repeatedly verify the interface's intention. Associate the *action* with an *action verb*. **Clarify the action the user is about to perform by replacing passive nouns and interjections with imperatives.** A well-chosen *verb + noun* combination typically meets the requirements of an unambiguous action label.

### Finality

While the *Cancel* label functions well in most circumstances, consider the *finality* of your chosen verbs. If the action does not modify any user information and is reversible (non-final), choose a less destructive verb such as *Go Back* or *Return*. **A verb with a safe connotation reduces the time the user spends considering their choice of action.** However, if the action does modify information and perform a potentially irreversible procedure, use a strong verb.

In addition, an *undo* tertiary action present in the interface affirms the user that any potentially destructive actions can be reversed, reducing the finality of the operations and enabling the user to quickly take action.

## Destructive primary actions <a name="destructive-primary-actions"></a>

Many rules come with exceptions, and the ones I have listed so far are no exception. Occasionally, a user needs to intentionally perform a truly *destructive* (irrecoverable) action. These cases need to be specifically and separately addressed to prevent unwanted consequences.

As mentioned previously, adding an *undo* tertiary action relieves some of the user's stress in performing the action, but because the action is intended to be destructive, you should assume the worst-case scenario.

I provide the following advice when dealing with destructive actions in an interface:

1. When the primary action is negative (destructive), the secondary action needs to be positive.
2. Secondary destructive actions should be separated into a separate visual group and can be aligned opposite the primary action.
3. Destructive actions should initially be disabled, requiring a "safety" primary action to be performed first to verify the user's intention.
4. In some cases, primary destructive actions should be visually de-emphasized. Swap the visual weights and style of the primary and secondary actions. The secondary positive action may technically be the user's intended action since interfaces with destructive consequences can be opened mistakenly.

These guidelines ensure the user does not unintentionally perform an unwanted action in your interface.

## Conclusion <a name="conclusion"></a>

Despite these guidelines, the most important factor to consider in designing actions in your application is **consistency**. Consistency reassures your user that each interface will behave according to their expectations, and a consistent application efficiently guides the user throughout their journey. Without proper consideration of each action's visual presentation, your application irresponsibly neglects your users' expectations and needs. Responsible applications need responsible designers willing to consider these seemingly "insignificant" details.

## Research <a name="research"></a>

[Open my notes](https://www.notion.so/Primary-Action-e446a7b8ba554362b8cad8baf2902261)

## Sources

- [https://www.lukew.com/ff/entry.asp?571](https://www.lukew.com/ff/entry.asp?571)

- [https://apps.labor.ny.gov/ux/doc/v1/design-primary-actions.html](https://apps.labor.ny.gov/ux/doc/v1/design-primary-actions.html)

- [https://uxplanet.org/primary-secondary-action-buttons-c16df9b36150](https://uxplanet.org/primary-secondary-action-buttons-c16df9b36150)

- [https://uxdesign.cc/ui-cheat-sheets-buttons-7329ed9d6112](https://uxdesign.cc/ui-cheat-sheets-buttons-7329ed9d6112)

- [https://ux.stackexchange.com/a/49996](https://ux.stackexchange.com/a/49996)

- [https://balsamiq.com/learn/articles/button-design-best-practices/](https://balsamiq.com/learn/articles/button-design-best-practices/)

- [https://uxmovement.com/buttons/visual-weight-of-primary-and-secondary-action-buttons/](https://uxmovement.com/buttons/visual-weight-of-primary-and-secondary-action-buttons/)

- [https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/](https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/)

- [https://designsystem.digital.gov/components/button/](https://designsystem.digital.gov/components/button/)

- [https://material.io/components/dialogs](https://material.io/components/dialogs)

- [http://measuringuserexperience.com/SubmitCancel/](http://measuringuserexperience.com/SubmitCancel/)

- [https://www.invisionapp.com/inside-design/comprehensive-guide-designing-ux-butt](https://www.invisionapp.com/inside-design/comprehensive-guide-designing-ux-buttons/)

- [https://lawsofux.com](https://lawsofux.com/hicks-law)

- [https://medium.com/@jonyablonski/designing-with-occams-razor-3692df2f3c7f](https://medium.com/@jonyablonski/designing-with-occams-razor-3692df2f3c7f)

- [https://cxl.com/blog/serial-position-effect/](https://cxl.com/blog/serial-position-effect/)
