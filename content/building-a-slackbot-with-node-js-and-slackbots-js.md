---
title: Building a SlackBot with Node.js and SlackBots.js
type: post
date: 2019-08-12T06:24:42.839Z
tags:
  - Slack Bots
  - Slack API
  - Node.js
  - JavaScript
---
Slack is an American cloud-based set of proprietary team collaboration software tools and online services, developed by Slack Technologies. Slack is basically a work space where teams can communicate and collaborate.

> Teamwork in Slack happens in channels — a single place for messaging, tools and files — helping everyone save time and collaborate together.

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1565594320/blog/0004/organize-conversations-slack-product-desktop.png)

- - -

One awesome feature of Slack is [Slack Apps](https://slack.com/apps), integrations and [Slack Bots](https://api.slack.com/bot-users).

> Basically, a Slack bot is a type of Slack App designed to interact with users via conversation. Your bot can send DMs, it can be mentioned by users, it can post messages or upload files, and it can be invited to channels. Cool right?

If you use Slack already, you should be familiar with some creative Slack bots like: [Standupbot](https://standupbot.com/), [Birthdaybot](https://birthdaybot.io/) and more.

In this article, I'll walk you through building your first Slack bot from start to finish with [Node.js](http://nodejs.org/) and [SlackBots.js](https://github.com/mishk0/slack-bot-api)

# **Table of contents**

* Slackbot Description
* Prerequisites
* Setup environment
* Install Dependencies
* Create a Slack workspace
* Register your Slack bot
* Building the bot

# SlackBot Description

We're going to build a simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers.

I built a [chrome extension](https://github.com/BolajiAyodeji/inspireNuggets) before now that displays random inspiring techie quotes for developers/designers on your new tab (you can download it [here](https://chrome.google.com/webstore/detail/inspirenuggets-for-chrome/acnfgdioohhajabdofaadfdhmlkphmlb)), we'll be using the quotes JSON from this extension as our quotes API and [Chuck Norris Jokes API](https://api.chucknorris.io/) for the jokes.

Basically, when a user mentions our bot and adds **inspire me**, the bot returns a random quote from [inspireNuggets](https://chrome.google.com/webstore/detail/inspirenuggets-for-chrome/acnfgdioohhajabdofaadfdhmlkphmlb), when the user types **random joke**, it returns a random joke from [Chuck Norris](https://api.chucknorris.io/) API and when the user types help, it returns the instruction guide. 

> @inspirenuggets inspire me
> @inspirenuggets random joke
> @inspirenuggets help

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1565594124/blog/0004/capture2.png)

> This article is not really about what we'll be building, it's just to show you the concept behind Slack bots and how to build yours, after now, you can think about something else and build a different bot, there're several possibilities.

Pretty interesting right? Let's  get started

# Prerequisite

This bot will be built with Node.js and SlackBots.js. You don't really need to know how to write Node.js, I'll walk you through it, but knowing it is an advantage.

* Basic JavaScript knowledge
* Slack workspace
* Some experience with Slack
* Some version control skills

# Setup environment

Let's setup and install Node.js and Npm first.

- Download node [here](https://nodejs.org/en/), If you have it installed already, skip this step. If you prefer to use a package manager to install, read [this](https://nodejs.org/en/download/package-manager/#windows) for all operating systems.

- Check if you have Node installed
```
node -v
```
- Node.js comes with Npm, you don't have to install that again.
```
npm -v
```

Now that we have Node.js setup, let's initialize out project

* Create your project directory (I called mine Slackbot)
* Initialize git

```
git init
```

* create a `index.js` file

```
touch index.js
```

* Initialize Npm

```
npm init
```
Simply answer all questions that come afterwards, if you're having issues, here's my own `package.json`

```
{
  "name": "slackbot",
  "version": "1.0.0",
  "description": "A simple Slackbot that displays random inspiring techie quotes for developers/designers.",
  "main": "index.js",
  "scripts": {
    "start": "index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/BolajiAyodeji/slackbot.git"
  },
  "author": "Bolaji Ayodeji",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/BolajiAyodeji/slackbot/issues"
  },
  "homepage": "https://github.com/BolajiAyodeji/slackbot#readme"
}
```

# Install Dependencies

**Now let's install and setup all libraries we need.**

## SlackBots.js

[SlackBots.js](https://github.com/mishk0/slack-bot-api) is Node.js library for easy operation with Slack API.

```
npm install slackbots
```

In `index.js`

```
const SlackBot = require('slackbots');
```

## Axios

[Axios](https://github.com/axios/axios) is a promise based HTTP client for the browser and node.js. If you know Fetch or AJAX, this is just a library that does same with far way cooler features. You can see them [here](https://github.com/axios/axios)

```
npm install axios
```

In `index.js`

```
const axios = require('axios')
```

## Nodemon

To run a script in Node.js, you have to run `node index.js`. Whenever you make changes to this file, you have to rerun `node index.js`, this sucks right when you'll making so many changes like we'll be doing. That's why we need [nodemon](https://github.com/remy/nodemon), nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```
npm install -g nodemon
```

In `package.json`, locate the scripts section and add a new start script

```
"scripts": {
    "start": "node index.js"
  }
```

If you run `npm start`, the file will run but won't restart on change. To fix this use the nodemon we installed instead of node like so:

```
"scripts": {
    "start": "nodemon index.js"
  }
```

# Dotenv

I won't explain this in depth, in a few days, I'll publish an article around Environmental variables, for now just know that we use this to hide secret keys and tokens like the Slack token key we would be using. This way you don't have to push your secret keys to GitHub. There are several ways to do this, but I prefer using dotenv, [Dotenv](https://github.com/motdotla/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env.

```
npm install dotenv
```

In `index.js`

```
const dotenv = require('dotenv')

dotenv.config()
```

After all installation, your `package.json` should look like this:

```
{
  "name": "inspireNuggetsSlackBot",
  "version": "1.0.0",
  "description": "A simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers.",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/BolajiAyodeji/inspireNuggetsSlackBot.git"
  },
  "author": "Bolaji Ayodeji",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/BolajiAyodeji/inspireNuggetsSlackBot/issues"
  },
  "homepage": "https://github.com/BolajiAyodeji/inspireNuggetsSlackBot#readme",
  "devDependencies": {
    "dotenv": "^8.0.0"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "slackbots": "^1.2.0"
  }
}
```

# Create your Slack workspace

Now that we have all setup, we need a Slack workspace to run our bot in development. Creating a workspace is pretty easy, read [this](https://get.slack.help/hc/en-us/articles/206845317-Create-a-Slack-workspace).

# Register your Slack Bot

Now that you have a workspace, you should have a Slack URL wihth your workspace name, mine is `mekafindteam.slack.com`.

- Now you'll need to create a Slack App. Create one [here](https://api.slack.com/apps/new)

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1565600492/blog/0004/capture5.png)

> Enter your App name and ensure you're in the workspace you created if you're in multiple workspaces.

- Now you'll see the settings > Basic Information page. Click the first tab `Add features and functionality`

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1565600643/blog/0004/capture6.png)

Since we're building a bot, select the **Bots** field.

- Now you'll see the Bot user page

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1565600858/blog/0004/capture7.png)

Click the `Add a Bot User` button

- Your display name will automatically be filled in from your already chosen App name, you can update but I'll advice you use the same name everywhere with the same alphabet case to avoid errors.

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1565600959/blog/0004/capture8.png)

Now, toggle the `Always Show My Bot as Online` switch to always show your bit as Online, remember this bot is just like a user in your workspace. Afterwards, click the `Add Bot User` button
