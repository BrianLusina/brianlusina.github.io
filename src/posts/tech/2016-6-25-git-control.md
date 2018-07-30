---
path:  "/tech"
title:  Version Control and Git
categories:  tech
tags:  [git, version control, VCS, versioning]
comments:  true
ads:  true
image: 
 feature:  version-contol-system.png
 thumb:  version-contol-system.png
 teaser:  version-contol-system.png
---

The very first time I encountered Git, I was confused, I did not understand anything about it. Racked my head constantly trying to figure out what it was all about. Frankly, I was getting frustrated. I simply thought it was one of those cloud backups. So, I questioned what everyone was saying about Distributed Version Control System. Did not quite grasp the concept, until finally it started making sense when I went over a tutorial and read some books and started using it. It finally meant sense, A door was opened in my mind, which unlocked tons of other ones.

Admittedly, I am still learning as I interact with it and I am enjoying as I go along.

## What is Git and why should you git it?

Many questions have been raised as to what git is(Maybe, not so many), but still it is worth mentioning. Git is a [Distributed Version Control System](https://en.wikipedia.org/wiki/Distributed_version_contro 'More about DVCS') (DVCS)that allows developers share their work on a platform and also make changes to it thus collaborate more effectively.

One may ask _"Why not just use a cloud system like Dropbox, OneDrive or Google Drive?"_. One, may use these cloud platforms, but it makes work a bit difficult in the long run. I shall explain why, but first, version control, what is it and why should you care?

## Version Control System(VCS)

This is a system that records changes to a file or set of files over time so that you can recall specific versions later. Ideally, you can do this with any type of file in your computer and needless to say, it makes collaborating on projects even easier. This is considering that you may not be able to meet up with your team all the time physicall. This makes version control a inique and powerful tool.

You could use [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/) to save your files, but you will not be able to store specific versions of your files over time. Even if you label each file differently, say filenameV1.txt or filenameV2.txt. This will mean you will have tons of files just for one project and therefore it will make it difficult when it comes back to revert back to files from a previous state. Also, it will mean having tons and tons of folders each a different version for a single project. This is bad practice and also it will become bulky in the future.

With VCS, you can:

- revert back to previous files easily, revert even an entire project,
- compare changes you have made over time on a single project. This allows you to make notes and possibly, see where you went wrong or right on a particular change
- See who last modified something that was causing a problem, that is if you are working with someone on a particular project.
- In the event you do lose your files and projects locally, you can easily recover them and continue with your work, sure, you can do this with any cloud platform, but it will cost you much less when it comes to VCS.

There are three types of VCS:

1.  **Local Version Control System**, which is basically storing files locally on your machine. With LVCS, there is a system in place which means you store your files using a _time-stamp_ on each directory your own, creating your own version control. This however can lead to many errors. Such as over-writing files you did not intend to over-write, or losing all of them in the event of a system crush.
    ![lvcsimage](https://git-scm.com/book/en/v2/book/01-introduction/images/local.png)
    > image showing files being versioned on a local computer

2)  **Centralized Version Control System** is a centralized control system which allows collaborators and developers to work on a project that is stored in a central database. This is far much better than LCVS, as you can store your projects online and be able to properly version your work and view changes made by other developers. The downside is when the database crushes, so does the project, unless it was backed up elsewhere. This is damaging considering that their is a central point of failure.[Subversion](https://subversion.apache.org/) and [Perforce](https://www.perforce.com/) are examples of CVCS.
    ![cvcsimage](https://git-scm.com/book/en/v2/book/01-introduction/images/centralized.png)
    > image showing the working of a CVCS

3.  **Distributed Version Control System** is the best to use as clients don’t just check out the latest snapshot of the files: they fully mirror the repository. Thus if any server dies, and these systems were collaborating via it, any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data. In addition, many of these systems deal really well with having several remote repositories they can work with. This allows for collaboration with different groups of people in different ways simultaneously within the same project. This allows you to set up several types of workflows that aren’t possible in centralized systems. Examples of such systems are [Mercurial](https://www.mercurial-scm.org/) [Git](https://git-scm.com/), [Darcs](darcs.net/) and [Bazaar](bazaar.canonical.com/)

![dvcsimage](https://git-scm.com/book/en/v2/book/01-introduction/images/distributed.png)

> DVCS at work

There is a lot more documentation online on Version Control Systems and [git](https://git-scm.com/) and there are very well documented too, I suggest getting in on this, especially if you are a developer just starting out and want to be able to properly store your work and collaborate with other developers.

Get git now!
