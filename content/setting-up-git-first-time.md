---
title: Git First Time Setup
type: post
date: 2019-07-21T12:24:04.696Z
tags: ["git", "bash", "version control"]
---

![](https://res.cloudinary.com/bolaji/image/upload/v1570636727/null/blog/0002/banner_cxxcyl.png)

Git is a Free and Open Source Distributed Version Control System.

By far, Git is the most widely used modern version control system in the world today. Git is a distributed and actively maintained open source project originally developed in 2005 by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the famous creator of the Linux operating system kernel.

Unlike older centralized version control systems such as SVN and CVS, Git is distributed: every developer has the full history of their code repository locally. Git also works well on a wide range of operating systems and IDEs (Integrated Development Environments).

In this article, I'll show you how to install Git, set it up for the first time, useful tips and resources to learn more/ learn advanced git concepts. Let's roll!

- - -

I assume you already know what Version control is, if you don't, kindly check out this [slide](http://slides.com/bolajiayodeji/introduction-to-version-control-with-git-and-github) to learn more. 

Here's a quick recap of what Version control means:
Version Control is:
the process of managing changes to source code or set of files over time.

> Version control is the process of managing changes to source code or set of files over time.

Version control software keeps track of every modification to the code in a special kind of database.
If a mistake is made, developers can restore and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members or contributors.

- - -

Now that you know what Version Control and Git mean, let's install it.

## For Mac OS: <br>

[Download Git for macOS](http://git-scm.com/download/mac)
or install using [Homebrew](https://brew.sh)

```bash
brew install git
```

## For Linux OS: <br>

[Download Git for Linux](https://git-scm.com/download/linux) or <br>
Install for Debian-based Linux systems 

```bash
sudo apt-get update
 sudo apt-get upgrade
 sudo apt-get install git
```

or <br>
Install for Red Hat-based Linux systems

```bash
sudo yum upgrade
 sudo yum install git
```

## For Windows OS: <br>

[Download Git for Windows](https://git-scm.com/download/win)

> Here's a more detailed installation guide for different systems on [Git official docs](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

Now that you have Git on your system, let's set up the Git environment. <br> 
Git comes with a tool called `git config` that lets you get and set configuration variables that control all aspects of how Git looks and operates.

- First set your identity, your name and email address like so:

```bash
git config --global user.name "bolajiayodeji"
 git config --global user.email mailtobolaji@gmail.com
```
the `--global` option makes sure these values are used throughout your system

- Next set up the default text editor you'll use whenever you need to enter a message in Git. This is not compulsory, if you don't configure this, Git will use your default editor. If you want to use something else, configure like so:

```bash
git config --global core.editor emacs
```

- Next, set up colors for your Git console. <br>

> For Linux OS users, you can use third pary Zsh configurators like [oh my zsh](https://ohmyz.sh/) to customize your terminal look with themes :). <br>
To configure this, do this:

```bash
git config --global color.ui true
```
The color.ui is a meta configuration that includes all the various color.* configurations available with git commands. 

Now Git is ready for use. 

## Check your settings

```bash
git config --list
```

```bash
user.name=bolajiayodeji
 user.email=mailtobolaji@gmail.com
 color.ui=true
```

---

Want to learn some super Git commands? <br>
I wrote an article: [Git Cheat Sheet](https://www.bolajiayodeji.com/git-cheat-sheet/) that covers some important Git commands you'll need. 


## Conclusion

Version control software is an essential part of the every-day of modern-day software developer practices. Once accustomed to the powerful benefits of version control systems, many developers wouldn’t consider working without it even for non-software projects.
