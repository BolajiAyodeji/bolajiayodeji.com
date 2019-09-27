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

<div align="center">

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569615494/blog/0005/heroku.png)

</div>

----

One of Heroku's core feature is deploying, managing, and scaling apps with your favorite languages [Node, Ruby, Python, Java, PHP, Go and more].

In this article, I'll show you how to take an existing Node.js app and deploy it to Heroku. From creating your Heroku account, till adding a Database to your deployed application.

## Prerequisites

In my previous article, I wrote about "[Building a SlackBot with Node.js and SlackBots.js](https://www.bolajiayodeji.com/building-a-slackbot-with-node-js-and-slackbots-js/)" and I promised to write a follow up article to show how to host the SlackBot on either Heroku, Zeit or Netlify and publish it to the Slack Apps store. Well, this is the follow up article but without the "Publishing to Slack Apps" part, we'll cover that in another article.

I assume you have/ know the following already:

- Read my [previous article](https://www.bolajiayodeji.com/building-a-slackbot-with-node-js-and-slackbots-js/)
- Built the [inspireNuggets SlackBot](https://github.com/BolajiAyodeji/inspireNuggetsSlackBot)
- Node and npm installed
- A free [Heroku account](https://signup.heroku.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed

## Bonus

If you don't have npm, Node and Heroku CLI installed, here's a quick bonus [Yes, you're welcome :)].

### Installing Npm and Node

> [Node.js](https://nodejs.org) is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

> [npm]() npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

You can simply download Node.js [here](https://nodejs.org/en/). Don't worry, npm comes with Node.js, so doing this installs both ✨
