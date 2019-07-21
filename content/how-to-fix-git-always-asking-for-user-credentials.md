---
title: How to fix Git always asking for user credentials
type: post
date: 2019-07-21T14:52:13.541Z
tags: '["Git", "Bash", "Version Control"]'
---
![](https://res.cloudinary.com/iambeejayayo/image/upload/v1563722428/blog/0003/banner.png)

Have you ever encountered Git asking you for your username and password every time you try to interact with GitHub even after configuring it? Well this is a very common problem among users who use the HTTPS clone URL for their repository.
In this article, I'll show you how to fix this.

---

The `https://` clone URLs are available on all repositories, public and private. These URLs work everywhere, even if you are behind a firewall or proxy.

When you git clone, git fetch, git pull, or git push to a remote repository using HTTPS URLs on the command line, you'll be asked for your GitHub username and password.

Using an HTTPS remote URL has some advantages: it's easier to set up than SSH :), and usually works through strict firewalls and proxies. However, it also prompts you to enter your GitHub credentials every time you pull or push a repository :(.

You can configure Git to store your password for you. <br>
Here's how:

### Update the URL of origin remote like, using SSH instead HTTPS;

```
git remote set-url origin git@github.com:username/repo.git
```

### You can also use;

```
git config --global credential.helper store
```

to make git store the username and password and it will never ask for them. 

### Save the username and password for a session (cache it);

```
git config --global credential.helper cache
```

You can change the timeout for above setting using;

```
git config --global credential.helper 'cache --timeout=600'
```
