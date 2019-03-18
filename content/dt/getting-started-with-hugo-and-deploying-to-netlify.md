

---
title: "Getting Started With Hugo and Deploying to Netlify"
date: 2019-03-18T13:50:26+01:00
draft: false
type: "post"
tags: ["hugo", "go", "netlify"]
---


![](https://cdn-images-1.medium.com/max/800/0*3VZ6C9SZ58a039z4.png)

Hugo is a fast and modern static site generator written in
[Go](https://golang.org/), and designed to make website creation fun again. It
builds pages when you create or update your content. Websites built with Hugo
are extremely fast and secure like
[https://bolajiayodeji.com](https://bolajiayodeji.com/). In technical terms,
Hugo takes a source directory of files and templates and uses these as input to
create a complete website.

Hugo sites can be hosted anywhere, including [Netlify](https://netlify.com/),
[Heroku](https://www.heroku.com/), [GoDaddy](https://www.godaddy.com/),
[DreamHost](https://www.dreamhost.com/), [GitHub
Pages](https://pages.github.com/), [GitLab
Pages](https://about.gitlab.com/features/pages/), [Surge](https://surge.sh/),
[Aerobatic](https://www.aerobatic.com/),
[Firebase](https://firebase.google.com/docs/hosting/), [Google Cloud
Storage](https://cloud.google.com/storage/), [Amazon
S3](https://aws.amazon.com/s3/),
[Rackspace](https://www.rackspace.com/cloud/files),
[Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website),
and [CloudFront](https://aws.amazon.com/cloudfront/) and work well with CDNs.
Hugo sites run without the need for a database or dependencies on expensive
runtimes like Ruby, Python, or PHP.

In this tutorial, I’d show you how to build your first Hugo site and deploy to
Netlify. Let’s roll :)

![](https://cdn-images-1.medium.com/max/800/1*oIEz4ooK0G4XUVViipHHjA.png)

### Hugo Features

* Hugo is the fastest tool of its kind. At <1 ms per page, the average site builds
in less than a second.
* Hugo supports unlimited content types, taxonomies, menus, dynamic API-driven
content, and more, all without plugins.
* We love the beautiful simplicity of markdown’s syntax, but there are times when
we want more flexibility. Hugo shortcodes allow for both beauty and flexibility.
* Hugo ships with pre-made templates to make quick work of SEO, commenting,
analytics and other functions. One line of code and you’re done.
* Hugo provides full i18n support for multi-language sites with the same
straightforward development experience Hugo users love in single-language sites.
* Hugo allows you to output your content in multiple formats, including JSON or
AMP and makes it easy to create your own.

All features can be found [here](https://gohugo.io/about/features/)

*****

### Getting Started

For this tutorial, we’re going to build a Simple Blog with Hugo.

PS: I would be using a windows machine in this tutorial, so all steps would be
based on windows, but I added installation guides for other operating systems.

I’ve also created a repository with starter files which can be found
[here](https://github.com/BolajiAyodeji/hugo101). Use the installation guide to
get Hugo running on your machine and fork the starter files. Ensure you follow
the steps.

#### Prerequisites

* Git
* Code Explorer

#### Steps

* Install Hugo
* Fork the starter repository
[here](https://github.com/BolajiAyodeji/hugo101/fork)
* Create a new site
* Deploy to Netlify

#### Installation guide

To start using Hugo, you need to first install it.

> Hugo was written in Go, but you don’t need to install Go to enjoy Hugo. You only
> need a precompiled binary!

Hugo currently provides pre-built binaries for the following:

* macOS (Darwin) for x64, i386, and ARM architectures
* Windows
* Linux
* OpenBSD
* FreeBSD

#### Installing on Mac

Follow the video below to install Hugo on your macOS or read the [Installation
guide](https://gohugo.io/getting-started/installing#macos). There are several
techniques for installing Hugo on mac, so I won’t be going through them. BTW,
I’m using a windows machine so I possibly don't know how to guide you :)

{{< youtube WvhCGlLcrF8 >}}

#### Installing on Windows

Follow the video below to install Hugo on your windows machine or read the
[Installation guide](https://gohugo.io/getting-started/installing#windows). This
video is a complete guide, but if you have installation issues, please let me
know in comments.

{{< youtube G7umPCU-8xc >}}

#### Installing on Linux

* [Using Snaps](https://docs.snapcraft.io/installing-snapd/6735)

To install the “extended” Sass/SCSS:

    snap install hugo --channel=extended

To install the non-extended version without Sass/SCSS support:

    snap install hugo

* Using the [Debian Package](https://packages.debian.org/search?keywords=hugo) for
Ubuntu.

This installs the “extended” Sass/SCSS version.

    sudo apt-get install hugo

* For Arch Linux

    sudo pacman -Syu hugo

* For Fedora, Red Hat and CentOS

    sudo dnf install hugo

#### Installing on OpenBSD

    doas pkg_add hugo

### Creating a new site

You can simply fork the starter repository. It contains the finished work with
Theme and custom posts. Creating a site with Hugo is quite simple, just follow
the following steps.

* Create a new site with name `Hugo101`

    hugo new site Hugo101

Now you should have a new folder `Hugo101` with subfolders:

    .
    ├── archetypes
    ├── assets
    ├── config
    ├── content
    ├── data
    ├── layouts
    ├── static
    └── themes

Full directory structure explanation can be found
[here](https://gohugo.io/getting-started/directory-structure/)

Additional resource:

{{< youtube sB0HLHjgQ7E >}}

* Add a new theme. All Hugo themes can be found [here](https://themes.gohugo.io/).
For this tutorial, we’d be using the [Hugo Base16
](https://github.com/htdvisser/hugo-base16-theme)theme by [Hylke
Visser](https://github.com/htdvisser).

This video would show you how to install and use themes on Hugo. Installing is
very simple, you just need to find the theme you like and download it into the
`themes` subdirectory. If you’re using the starter file, I’ve done that already.

{{< youtube L34JL_3Jkyc >}}

* After installing the theme or cloning the starter file, start the Hugo server

    hugo server -D

Now your new site should be available at**
**[localhost:1313](http://localhost:1313/)**.**

* To add a new post

    hugo new post/my-first-post.md

This would be added in `/contents/post`

* Some posts parameters would be added at the top of the file. I’ve added some
additional parameters you might need.

```
    ---
    title: "my first post"
    date: 2018-11-05T13:22:14+24:00
    draft: false 
    tags: ["markdown", "GitHub", "website"]
    categories: ["hugo", "base16"]
    ---
```

* To build files, run

```
    hugo
```
Now your directory would have a new subfolder `public` , this is the final
build. *Hugo takes a source directory of files and templates and uses these as
input to create a complete website.* The `public` is the complete website and is
what you’d deploy.

```
    .
    ├── archetypes
    ├── assets
    ├── config
    ├── content
    ├── data
    ├── layouts
    ├── public
    ├── static
    └── themes
```

* Configure Hugo for deployment

We would deploy to Netlify in the next section of this tutorial, but before
that, we need to configure Hugo for Netlify.

Create a new file in the root of your project, If you’re using the starter file,
I’ve added this already.

    touch netlify.toml

Paste this in it: (This is just configuring how Hugo should work with Netlify)

    [build]
    publish = "public"
    command = "hugo --gc --minify"

    [context.production.environment]
    HUGO_VERSION = "0.54.0"
    HUGO_ENV = "production"
    HUGO_ENABLEGITINFO = "true"

    [context.split1]
    command = "hugo --gc --minify --enableGitInfo"

    [context.split1.environment]
    HUGO_VERSION = "0.54.0"
    HUGO_ENV = "production"

    [context.deploy-preview]
    command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

    [context.deploy-preview.environment]
    HUGO_VERSION = "0.54.0"

    [context.branch-deploy]
    command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"

    [context.branch-deploy.environment]
    HUGO_VERSION = "0.54.0"

    [context.next.environment]
    HUGO_ENABLEGITINFO = "true"

### Deploying to Netlify

[Netlify](https://www.netlify.com/) is an all-in-one workflow that combines
global deployment, continuous integration, automatic HTTPS and many other
features.

Ensure you have a forked version of the [starter
files](https://github.com/BolajiAyodeji/hugo101) or a version of your own
project hosted on GitHub

#### **Create a Netlify account**

Visit [app.netlify.com](https://app.netlify.com/) and select your preferred
signup method.

![](https://cdn-images-1.medium.com/max/800/0*Io0Yvvzt0avlMLJt.jpg)

#### **Create a New Site with Continuous Deployment**

Select the “New site from git.” button

![](https://cdn-images-1.medium.com/max/800/0*vFXRkn0f-D22wQdP.jpg)

#### **Select your git provider**

![](https://cdn-images-1.medium.com/max/800/1*wVPVKGmAZgI0dJanJ6XDNw.png)

#### **Select the repository you want to use for continuous deployment.**

For this tutorial, I assume its `Hugo101`, else you can filter through your
repositories in real time.

![](https://cdn-images-1.medium.com/max/800/1*eLqmQvQ-EO_gdgSdlu3jjQ.png)

#### **Deploy settings**

Here you select the branch you wanted published, your [build
command](https://gohugo.io/getting-started/usage/#the-hugo-command), and your
publish (i.e. deploy) directory. The publish directory is `public`. The
following steps assume you are publishing from the `master` branch.

![](https://cdn-images-1.medium.com/max/800/1*eS_547o7sh8vVqiHAopqNw.png)

#### Build and Deploy Site

In the Netlify console, select “Deploy site” and wait for it to build

![](https://cdn-images-1.medium.com/max/800/0*aJAHwKA-zRCZgvps.gif)

Once the build is finished, you should now see a “Hero Card” at the top of your
screen letting you know the deployment is successful. You’ll see that the URL is
automatically generated by Netlify. You can update the URL in “Settings.” [Visit
the live site](https://hugo101.netlify.com/).

Now every time you push changes to your hosted git repository, Netlify will
rebuild and redeploy your site. You can add your own changes to the starter
files and tweak as you wish.

### Conclusion

Hugo is the world’s fastest framework for building websites. It is one of the
most popular open-source static site generators. With its amazing speed and
flexibility, Hugo makes building websites fun again. (Hugo docs)

Hugo is open-source and completely free, you can contribute to Hugo
[here](https://github.com/gohugoio/hugo)

This is just a beginners guide, there’s still more to Hugo, head out and read
the Hugo docs to learn more. Below is a list of useful resources you might need.

* [Create a Hugo Theme](https://gohugo.io/themes/creating/)
* [Hugo Theme Components](https://gohugo.io/themes/theme-components/)
* [Introduction to Hugo Templating](https://gohugo.io/templates/introduction/)
* [Content Organization](https://gohugo.io/content-management/organization/)
* [Using a Custom Domain with
Netlify](https://www.netlify.com/docs/custom-domains/)
* [Hugo configuration](https://gohugo.io/getting-started/configuration/)
* [Hugo CLI commands](https://gohugo.io/commands/)
* [Hugo variables and Params](https://gohugo.io/variables/)
* [Hugo Pipes](https://gohugo.io/hugo-pipes/)
* [How Netlify handles Hugo
versions](https://www.netlify.com/blog/2017/04/11/netlify-plus-hugo-0.20-and-beyond/)

### Credits

* [Hugo Docs](https://gohugo.io/documentation/)
* [Mike Dane Youtube
Channel](https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw)
* [Hugo Base16 ](https://github.com/htdvisser/hugo-base16-theme)theme by [Hylke
Visser](https://github.com/htdvisser).


![thewebdev](https://res.cloudinary.com/iambeejayayo/image/upload/c_scale,w_100/v1547954566/fav-500.png)

# Subscribe for my Newsletter [here](https://eepurl.com/geCCfL) and get notified when I write something cool.