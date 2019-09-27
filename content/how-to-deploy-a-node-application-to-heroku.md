---
title: How to deploy a Node Application and Database to Heroku
type: post
date: 2019-08-26T06:52:24.006Z
tags:
  - NodeJS
  - JavaScript
  - Heroku
  - Express
---
Heroku is a cloud-based, fully-managed platform as a service (Paas) for building, running, and managing apps. The platform is flexible and designed with DX support for you and your team’s preferred development style and to help you stay focused and productive.

Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps. Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly.

The Heroku experience provides services, tools, workflows, and polyglot support—all designed to enhance developer productivity.

With features like: Heroku Runtime, Heroku Postgres (SQL), Heroku Redis, Add-ons, Data Clips, App metrics, Smart containers, Enterprise-grade support, GitHub Integration and lots more, Heroku gives developers the freedom to focus on their core product without the distraction of maintaining servers, hardware, or infrastructure.

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569615494/blog/0005/heroku.png)

----

One of Heroku's core feature is deploying, managing, and scaling apps with your favorite languages [Node, Ruby, Python, Java, PHP, Go and more].

In this article, I'll show you how to take an existing Node.js app and deploy it to Heroku. From creating your Heroku account, till adding a Database to your deployed application.

## Prerequisites

In my previous article, I wrote about "[Building a SlackBot with Node.js and SlackBots.js](https://www.bolajiayodeji.com/building-a-slackbot-with-node-js-and-slackbots-js/)" and I promised to write a follow up article to show how to host the SlackBot on either Heroku, Zeit or Netlify and publish it to the Slack Apps store. Well, this is the follow up article but without the "Publishing to Slack Apps" part, we'll cover that in another article.

I assume you have/ know the following already:

- Read my [previous article](https://www.bolajiayodeji.com/building-a-slackbot-with-node-js-and-slackbots-js/)
- Built the [inspireNuggets SlackBot](https://github.com/BolajiAyodeji/inspireNuggetsSlackBot)
- Git installed
- Node and npm installed
- A free [Heroku account](https://signup.heroku.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed

## Bonus

If you don't have npm, Node and Heroku CLI installed or a Heroku account already, here's a quick bonus [ Yes, you're welcome :) ].

### Installing npm and Node

> [Node.js](https://nodejs.org) is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

> [npm](https://www.npmjs.com/) npm is the package manager for Node.js. An open source project created to help JavaScript developers easily share packaged modules of code.

You can simply download Node.js [here](https://nodejs.org/en/). Don't worry, npm comes with Node.js, so doing this installs both ✨

### Creating a free Heroku account

Kindly head [here](https://signup.heroku.com/) and fill the Signup form, it's pretty simple.

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569620776/blog/0005/heroku-signup.png)

### Installing Heroku CLI

The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku. [ Well, you can decide to use the GitHub integration feature and Heroku Dashboard but yes you should learn how to use the CLI ]

Heroku CLI requires Git, the popular version control system. If you don’t already have Git installed, I wrote [this article](https://www.bolajiayodeji.com/setting-up-git-first-time/) to help you.

#### Heroku CLI for Mac OS

```
brew tap heroku/brew && brew install heroku
```

or [download the installer](https://devcenter.heroku.com/articles/heroku-cli).

#### Heroku CLI for Ubuntu

```
sudo snap install --classic heroku
```

#### Heroku CLI for Windows

Download the installer for [64-Bit](https://cli-assets.heroku.com/heroku-x64.exe) or [32-Bit](https://cli-assets.heroku.com/heroku-x86.exe).

#### Other installation methods

Please read [this](https://devcenter.heroku.com/articles/heroku-cli#other-installation-methods).

#### Getting started with Heroku CLI

- Verify your installation

```
heroku --version
```
> heroku/7.30.1 linux-x64 node-v11.14.0

- Login to your Heroku account

There are two ways to do this:

- **Web based auth**

```
heroku login
```

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569621496/blog/0005/heroku-web-auth.png)

Follow the instructions and login via your web browser then return to your terminal.

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569621617/blog/0005/heroku-web-auth2.png)

- **CLI auth**

This is a safer option as it saves your email address and an API token to `~/.netrc` for future use. 

```
heroku login -i
```

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569621890/blog/0005/heroku-cli-auth.png)

----

### Deploying your Node.js App

I presume you've built the SlackBot already, if you haven't, please clone the [finished project](https://github.com/BolajiAyodeji/inspireNuggetsSlackBot).

> The project is a simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers.

```
git clone https://github.com/BolajiAyodeji/inspireNuggetsSlackBot.git && cd inspireNuggetsSlackBot
```

Now let's deploy our app to Heroku 🎉🎉.
I'll show you two ways to do this:

#### Deploy via the Heroku Git

> This is done via the Heroku CLI.

**Checklist**

- Specify the version of Node.js that will be used to run your application on Heroku in your `package.json` file.

```
"engines": {
    "node": "10.16.0"
  },
```

- Specify your start script.
Simply create a `Procfile` (without any file extension) and add

```
 web: node index.js
```

> Heroku first looks for this Procfile. If none is found, Heroku will attempt to start a default web process via the start script in your `package.json`.

- Start your app locally using the heroku local command to be sure everything works fine

```
heroku local web
```

> Your app should now be running on http://localhost:5000.

- Don't forget to `.gitignore`

```
/node_modules
.DS_Store
/*.env
```

#### Deploy via GitHub integration
