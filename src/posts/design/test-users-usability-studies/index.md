---
path: "/design/test-users-usabilty-studies"
author: 
 name: Brian Lusina
 link: "/brian_lusina"
 avatar: "brian_lusina.jpg"
title: Test Users and Usability
subtitle: How many users do you need to test usability of your software?
date: '2016-08-04T12:00:00+00:00'
excerpt: How many users do you need to test usability of your software?
tags:  [Usability, User Experience, UX, Design]
category: design
image:
 feature: test-users-and-usability.jpg
 thumbnail: test-users-and-usability.jpg
 teaser: test-users-and-usability.jpg
published: true
---

Following my [previous](https://brianlusina.github.io/Paper-Rabbit/articles/usability-and-code/) article, I think it best to write about how many users are the optimal number to conduct a usability test with. Most would argue that you need hundreds to come up with an optimal number, say, 100? However, this would be wrong, very wrong. In fact, based on my own personal research the number is 5, except when it is not. This means the optimal number is 5, but then again depends on a couple of factors.

Why 5 though? This lets you find almost as many usability problems as you'd find using many more test participants. With 5 users, you almost always get close to user testing's maximum benefit-cost ratio.

There are exceptions to the rule of course.

- **Quantitative studies aim at statistics more than on insights**. In this case test at least 20 users to get statistically significant numbers; tight confidence intervals require even more users.

- **Card Sorting** test at least 15 users.

- **Eyetracking** Test 39 users if you want stable heatmaps.

These exceptions shouldn't worry you much. The vast majority of your user research should be qualitative, aimed at collecting insights to drive your design, not numbers to impress people in PowerPoint.

The main argument for small tests is simply **return on investment**. Testing costs increase with each additional study participant, yet the number of findings quickly reaches the point of diminishing returns. There's little additional benefit to running more than 5 people through the same study; ROI drops like a stone with a bigger number.

And if you have a big budget? Spend it on additional studies, not more users in each study.

## Arguments for more Test participants

1.  **A big website has tons of users.** Doesn't matter for the sample size, even if you were doing statistics. The variance in statistical sampling is determined by the sample size, not the size of the full population from which the sample was drawn. In user testing, we focus on a website's functionality to see which design elements are easy or difficult to use. The evaluation of a design element's quality is independent of how many people use it. (Conversely, the decision about whether to fix a design flaw should certainly consider how much use it'll get: it might not be worth the effort to improve a feature that has few users; better to spend the effort recoding something with millions of users.).

2)  **A big website has tons of features** This is an argument for running several different tests — each focusing on a smaller set of features — not for having more users in each test. You can't ask any individual to test more than a handful of tasks before the poor user is tired out. Yes, you'll need more users overall for a feature-rich design, but you need to spread these users across many studies, each focusing on a subset of your research agenda.

3.  **We have several different target audiences.** This can actually be a legitimate reason for testing a larger user set because you'll need representatives of each target group. However, this argument holds **only if** the different users are actually going to behave in completely different ways. Some examples of projects may include:

    - Medical site targeting both doctors and patients, and
    - Auction site where you can either sell stuff or buy stuff.

    When the users and their tasks are this different, you're essentially running a new test for each target audience, and you'll need close to 5 users per group. Typically, you can get away with 3–4 users per group because the user experience will overlap somewhat between the two groups. With, say, a financial site that targets novice, intermediate, and experienced investors, you might test 3 of each, for a total of 9 users — you won't need 15 users total to assess the site's usability.

4.  **The site makes so much money that even the smallest usability problem is unacceptable.** Rich companies certainly have an ROI case to spend more on usability. Even if they spend "too much" on each quality improvement, they'll make even more back because of the vast amounts of money flowing through the user interface. However, even the highest-value design projects will still optimize their ROI by keeping each study small and conducting many more studies than a lower-value project could afford.

    The basic point is that it's okay to leave usability problems behind in any one version of the design as long as you're employing an iterative design process where you'll design and test additional versions. Anything not fixed now will be fixed next time. If you have many things to fix, simply plan for a lot of iterations. The end result will be higher quality (and thus higher business value) due to the additional iterations than from testing more users each time.

True answer to "how many users" can sometimes be much smaller than 5. If you have an Agile-style UX process with very low overhead, your investment in each study is so trivial that the cost–benefit ratio is optimized by a smaller benefit. (It might seem counterintuitive to end up with more money by making less money from each study, but this occurs because the smaller overhead lets you run so many more studies that the sum of numerous small benefits becomes a big number.)

For really low-overhead projects, it's often optimal to test as little as 2 users per study. For some other projects, 8 users — or sometimes even more — might be better. For most projects, however, you should stay with the tried-and-true: 5 users per usability test.

## Conclusion

Performing these usability studies is necessary to determing usability of your software. However, one should note that sometimes less is more.
