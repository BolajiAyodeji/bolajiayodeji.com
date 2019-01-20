---
title: "How to test a Pull Request locally before Merging."
date: 2018-11-11T13:22:14+07:00
draft: false
type: "post"
tags: ["git", "GitHub", "version  control"]
---

In this tutorial, I would show you how to check, test and make changes to a pull
request before merging.


Recently I dived into
[OpenSource](https://opensource.com/resources/what-open-source) development
which i'm super psyched about now. I had some projects I made public and
OpenSource on [GitHub](https://github.com/bolajiayodeji)

Recently i started receiving pull requests and this was pretty awesome and
encouraging. A great way to start the party


One major problem I had was how to test this pull requests, I had to use the
local "copy and paste" method to test and run this pull requests before I merged
them, this was really stressful.

I made my researches and found easier ways to do this and this is what I would
be sharing with you.

So your repository got a new Pull Request?, You don't want to merge it before
testing it out yourself locally on your machine. How do you go about it ?

The pull request is available on this git ref ``pull/{ID}/head`` which you can
fetch using this, where ID is the pull request id.

**REQUIREMENTS**

*(1) Make sure you have a cloned version of the repository on your machine,
Check *[here](https://help.github.com/articles/cloning-a-repository/)* to learn
how to clone repositories from GitHub.*

*(2) Have your cloned Repository integrated into your
*[IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)*
preferably *[Visual Studio Code](https://code.visualstudio.com/)* [In this
tutorial, I used VsCode]*

*(3) Be conversant with *[git](https://git-scm.com/)* commands*

- Go to your repository folder

- Initialize git (you can do that by right clicking in the root folder)

- Ensure your work tree is clean (you can do that by running `git status`)

- Run the following commands to FETCH the pull request from GitHub where **ID**
is the pull request’s ID

    git fetch origin pull/
    /head && git checkout FETCH_HEAD

Or, if you only want to [cherry pick](https://git-scm.com/docs/git-cherry-pick)
it, instead of checking it out, you can use

    git fetch origin pull/
    /head && git cherry-pick FETCH_HEAD

- Open your IDE (VsCode) Your folder structure should change now pending on the
contents of the PR.

What you have now is the contents of the pull requests and not your master
branch, run your checks and tests to determine if the pull request is worth
merging.

At this point, you can do anything you want with this branch. You can run some
local tests, or merge other branches into it, including `master`. Make
modifications as you see fit!

Once satisfied `git checkout master` to return to the master branch.

You can also make changes to the pull request and push back to GitHub as a new
commit or pull request.

After making your changes:

    git push origin 

That's it, you have tested the pull request and made changes!

If this article helped you, share!!!

View all my projects on GitHub [here](http://github.com/bolajiayodeji)

Contribute to [NettyFinder](https://netty-finder.herokuapp.com/)
[here](https://github.com/BolajiAyodeji/netty-finder)

![thewebdev](https://res.cloudinary.com/iambeejayayo/image/upload/c_scale,w_100/v1547954566/fav-500.png)