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
* Setup environment and dependencies
* Install Slackbot.js
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

Pretty interesting right? Let's  get started

# Prerequisite

This bot will be built with Node.js and SlackBots.js. You don't really need to know how to write Node.js, I'll walk you through it, but knowing it is an advantage.

* Basic JavaScript knowledge
* Some experience with Slack
* Some version control skills

# Setup environment and dependencies
