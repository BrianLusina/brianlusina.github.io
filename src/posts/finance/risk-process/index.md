---
path: "/finance/risk-process"
title: "The Risk Process"
subtitle: "A small breakdown of the risk process"
excerpt: "A small breakdown of the risk process"
tags:  [Actuarial, Insurance, Money, business]
category: finance
date: '2017-01-18T12:00:00+00:00'
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image:
  feature: ruintheory.JPG
  teaser: ruintheory.JPG
  credit: Wikipedia
  creditlink: https://en.wikipedia.org/wiki/Ruin_theory
---

The **Ruin Theory** or _surplus process_ or _risk process_ defines when a company is most likely to go bankrupt given a constant flow of income and random outflow of cash. This is used in most businesses to determine for how long the company can be expected to be in operation before their wallet does not allow them to continue.

Of course this is all probability and does not give an exact date or exact metrics as to when or high likely this will occur. However, it does help a company properly assess where they are currently and where they should avoid given current circumstances are unfavorable.

Let us assume that a business starts with an initial capital amount. All businesses have constant income from sell of services or goods, or in the case of insurance companies from premium income. Additionally, these same businesses have cash outflow, which oftentimes is random and can not be accurately predicted. These cash outflows are random in both timing and amount and thus a company ought to be careful and ensure that their initial capital does not fall below 0 or is less than the cash outflow at any given time or they will face what is known as **ruin**(bankruptcy).

As you can imagine, this involves a lot of mathematical calculation and often graphs to properly access when the company may experience ruin. Since the cash inflow is constant and can be determined, what is left to determine is the time and amount of cash outflow. Once these two random variables are determined, then the whole process is more visible and can be properly drawn on paper.

This process can be outlined by the graph below:

![ruin process](https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Samplepathcompoundpoisson.JPG/350px-Samplepathcompoundpoisson.JPG)

> From our good friends Wikipedia

Of course it looks a bit intimidating but a breakdown is coming right up. Before that though, we can see from this picture that there are 2 sides to the graph, the part below the X-axis is obviously bad, as it means the company is bankrupt. The vertical drops in the graph are the cash outflows and are dotted as we can not properly determine when they will occur. The diagonal lines are the cash inflow and those can be properly determined.
The graph does no start at coordinate `0,0` as this is the initial reserve or capital the company starts with.
