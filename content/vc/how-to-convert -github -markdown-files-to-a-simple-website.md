---
title: "How to convert GitHub Markdown files to a simple website"
date: 2018-11-05T13:22:14+07:00
draft: false
type: "post"
tags: ["markdown", "GitHub", "website"]
---

### Easy Markdown to GitHub Pages

### Introduction

This little guide demonstrates how to turn any [Github](https://github.com/)
repository with a bunch of [Markdown](https://en.wikipedia.org/wiki/Markdown)
files into a simple website using [Github Pages](https://pages.github.com/) and
[Jekyll](https://jekyllrb.com/).


* You don't need to use the command line or anything other than your browser.
* It doesn't require any knowledge in Jekyll.
* It's completely compatible with any bunch of markdown files you already have in
any existing repository without any modification to those files. That includes
the basic `README.md`almost all repositories contain.
* The markdown files will remain just as readable and usable in Github than in
your website.

### Step by step instructions

### Determine the repository where you want to activate GitHub Pages

You can of course create a new repository if you want.

### Create the `_.config.yml` file

That file should be created on the root of your repository. Here is some content
to copy-paste in it:

```
plugins:
  - jekyll-relative-links
relative_links:
  enabled: true
  collections: true
include:
  - CONTRIBUTING.md
  - README.md
  - LICENSE.md
  - COPYING.md
  - CODE_OF_CONDUCT.md
  - CONTRIBUTING.md
  - ISSUE_TEMPLATE.md
  - PULL_REQUEST_TEMPLATE.md
```


It's basically just a few tuning of GitHub Pages default configuration to have
a better handling of Markdown files.

### Activate GitHub Pages in your repository configuration

On the GitHub page of your project go into `Settings > Options > Github Pages`:

![](https://cdn-images-1.medium.com/max/880/0*eZBV54NOulDlzKy8.png)

In the `Source` option, select `master branch` then `Save`:

![](https://cdn-images-1.medium.com/max/880/0*H972YMaFG9Gfiolm.png)

You must also choose a theme:

![](https://cdn-images-1.medium.com/max/880/0*zdXm2jwli-YMIBAh.png)

That's it! Now you can just use the link provided by GitHub to access you
website:

    Your site is published at https://bolajiayodeji.github.io/xxxxxx/

### Usage guide

* Any markdown file in your repository will display in your GitHub Pages website.
You just have to use the same path to access it and replace the `.md` extension
by `.html`.

So if you want to display your `README.md` file, you have to enter the URL as
`README.html`

* To make links between your Markdown files just use a relative path to the other
Markdown file. The configuration you copy pasted in your `_config.yml` provides
a plugin to convert those URLs.

So your Markdown files will have correct links both in GitHub and GitHub Pages.

* The index page of your website can be a `index.md` file or a `README.md` file.
If both exists the `index.md` file has priority.
* You should be able to use any [GitHub Flavored
Markdown](https://guides.github.com/features/mastering-markdown/).

### Known differences between GitHub and GitHub Pages

* No automatic links with GitHub Pages. The GitHub Markdown renderer can
automatically detect a simple copy-pasted link and make it a clickable link.
GitHub Pages doesn't propose a feature to reproduce that behavior, so you'll
have to braces your links with the `[]()`syntax.


# Subscribe for my Newsletter [here](https://eepurl.com/geCCfL) and get notified when I write something cool.

![thewebdev](https://res.cloudinary.com/iambeejayayo/image/upload/c_scale,w_100/v1547954566/fav-500.png)