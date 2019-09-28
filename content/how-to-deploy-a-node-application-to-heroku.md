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

##### **☑️ Checklist**

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

##### **🚀 Let's Deploy**

How this works is, you have the project working on local already and you've pushed to your favorite Git Hosting already (e.g GitHub)

- Run `heroku create`

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569625900/blog/0005/heroku-create.png)

Basically this command creates a new Heroku app for you with some randomly generated domain and adds Heroku to your local git repository.


- Now run `git push heroku master`

This is the magic command, it pushes your app to Heroku, installs it there and launches it on your allocated domain (In the example above, it's https://lit-cove-58897.herokuapp.com/)

> You can always make changes to your app settings and domains in your [Heroku Dashboard](https://dashboard.heroku.com/)

- Now visit your app in your browser

```
heroku open
```
- You can also view information about your running app using one of the logging commands, this is very useful in debugging errors.

```
heroku logs --tail
```

#### Deploy via GitHub integration

> You can configure GitHub integration in the Deploy tab of apps in the [Heroku Dashboard](https://dashboard.heroku.com).


**☑️ Checklist**

- All previous checklists apply here
- Ensure you have the app deployed to GitHub already

**🚀 Let's Deploy**

How this method works is that you push your entire project to GitHub and integrate it to Heroku. Every time you push, it deploys from GitHUb to Heroku. Pretty cool right?

- Login to your Heroku Dashboard
- Create a new app

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569626896/blog/0005/create-app.png)

- Select your app name and Region

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569626958/blog/0005/new-app.png)

Now your app is successfully created

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569638822/blog/0005/heroku-dash.png)

- Click the deploy tab and scroll to the **Deployment method** section

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569638956/blog/0005/heroku-deploy.png)

- Click the **Connect to GitHub** button

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569639188/blog/0005/heroku-github.png)

- Now you have the **Connect to GitHub section**, search for the repository and deploy.

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569639329/blog/0005/heroku-search.png)

- Now your app is deployed successfully

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569639330/blog/0005/heroku-200.png)

#### Automatic deploys

Now your app is deployed but you'll have to keep deploying manually. You need to enable automatic deploys for a GitHub branch, so Heroku builds and deploys all pushes to that branch.

- Scroll to the **Automatic Deploys** section

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569640012/blog/0005/heroku-auto.png)

- Select the branch you want to deploy. Ideally this should be the `master` branch but change this according to your preference.

- Now every push to `master` (or the branch you chose) will deploy a new version of this app. 

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569640182/blog/0005/heroku-auto-200.png)

#### Node.js Buildpack

In Heroku, Buildpacks are scripts that are run when your app is deployed. They are used to install dependencies for your app and configure your environment. 

After deploying your app, ensure you add a Node.js buildpack to your project.

- Go to **Settings** and scroll to the **Buildpack section**

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569640434/blog/0005/heroku-buildpack.png)

- Click the **Add Buildpack** button and select Node.js in the Pop up

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1569640503/blog/0005/heroku-add-build.png)

- Now the new buildpack configuration will be used when this app is next deployed.
- Make some changes to your app and push to GitHub, it will automatically deploy.

### Adding a Database to your deployed App

Heroku provides three managed data services to all customers in form of Add-ons:

- [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql)
- [Heroku Redis](https://elements.heroku.com/addons/heroku-redis)
- [Apache Kafka on Heroku](https://elements.heroku.com/addons/cloudkarafka)

Heroku allows you to manage your database directly from Heroku.

Writing about this three will make this article too long. It's pretty since and I'll add some links from Heroku Docs.

- [Heroku Postgresql Docs](https://devcenter.heroku.com/categories/postgres-basics)
- [Heroku Redis Docs](https://devcenter.heroku.com/articles/heroku-redis)
- [Apache Kafka on Heroku Docs](https://devcenter.heroku.com/articles/kafka-on-heroku)
