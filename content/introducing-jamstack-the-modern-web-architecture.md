---
title: "Introducing JAMstack: The Modern Web Architecture"
date: 2019-05-15T13:22:14+24:00
draft: false
type: "post"
tags: ["jamstack", "javascript", "web"]
---

 

![](https://cdn-images-1.medium.com/max/720/1*xYSNCnp6eh2ZDpwQtYL6qg.jpeg)
<span class="figcaption_hack"><img src=”Google”></span>

I’m sure you’ve come across the word JAMstack before but you probably didn’t
understand what it really meant. I’ve seen this word before also but didn’t care
to check it out until [Egwuenu Gift](https://medium.com/u/46bccfc2f42c)
organized [JAMstack Lagos](https://twitter.com/jamstacklagos), then I realised
that I’ve been building JAMstack applications already.

JAMstack is a Modern web development architecture, it is not a programming
language or any form of tool. It is more of a web development practice aimed
towards enforcing better performance, higher security, lower cost of scaling,
and better developer experience.

In this article, I’ll introduce you to what JAMstack means, why you should care,
best practices and how to get started. :)

### Introduction

![](https://cdn-images-1.medium.com/max/720/0*t3L6E_t7RRLXjRcE.png)

According to the official [JAMstack documentation](https://jamstack.org/), 

> JAMstack is a Modern web development architecture based on client-side
> JavaScript, reusable APIs, and prebuilt Markup.

> When we talk about “The Stack,” we no longer talk about operating systems,
> specific web servers, backend programming languages, or databases.

> The JAMstack is not about specific technologies. It’s a new way of building
> websites and apps that delivers better performance, higher security, lower cost
of scaling, and a better developer experience.

**JAMstack** is a major trend in web development coined by [Mathias
Biilman](https://twitter.com/biilmann), the CEO and co-founder of Netlify. 

### Okay, chill! what is JAMstack?

You might have come across specific terms like **MEAN stack** and **MERN
stack.** These are just terms used to classify or group some certain
technologies with the aim of achieving a particular goal.

JAMstack here stands for

JavaScript

API

Markup

> stacks generally is just a combination of several technologies used to create a
> web or mobile application. So JAMstack is the combination of JavaScript, APIs
and Markup. Pretty interesting right?

JAMstack projects don’t rely on server-side code, they can be distributed
instead of relying on a server. Served directly from a CDN, JAMstack apps unlock
speed, performance and better the user experience.

![](https://cdn-images-1.medium.com/max/720/1*033Z3JaR-zCm46ro7AbD3A.png)

### Useful Terms

I’ll be using these terms in this article frequently and I thought you should
know their meanings (If you don’t)

* **API** is the acronym for Application Programming Interface, which is a
software intermediary that allows two applications to talk to each other.
* **CDN** (content delivery network) is a system of distributed servers (network)
that deliver pages and other Web content to a user, based on the geographic
locations of the user, the origin of the webpage and the content delivery
server.
* A **Server** is a computer designed to process requests and deliver data to
another computer over the internet or a local network.
* **A Database** is a collection of information that is organized so that it can
be easily accessed, managed and updated

### Why JAMstack?

<br> 

![](https://cdn-images-1.medium.com/max/720/0*HbtT08v5SNGI-FXo.png)

Unlike traditional websites or CMS sites (e.g Wordpress, Drupal, e.t.c) that
relies so much on servers, plugins and databases, JAMstack can load some
JavaScript that receives data from an API, serving files from a CDN and markup
generated using a static site generator during deploy time.

Sounds cool right?!

#### JAMstack is fast

When it comes to minimizing the time of load, nothing beats pre-built files
served over a CDN. JAMstack sites are super fast because the HTML is already
generated during deploy time and just served via
[CDN](https://flaviocopes.com/cdn/) without any interference or backend delays.

#### JAMstack is highly secured

Everything works via an API and hence no database or security breach. With
server-side processes abstracted into microservice APIs, surface areas for
attacks are reduced and hence your site becomes highly secured.

#### JAMstack is cheaper and easy to scale

JAMstack sites only contain just a few files with minimal sizes that can be
served anywhere, scaling is a matter of serving those files somewhere else or
via CDNs.

### JAMstack Best Practices

* Use CDN to distribute your files rather than servers 
* Installing and contributing to yr project should be easy and less complex, use
tools like npm and Git to ensure standard and faster setup.
* Use build tools and make your project compatible for all browsers (e.g Babel,
Browserify, Webpack e.t.c)
* Ensure your project is up to web standards and highly accessible 
* Ensure your build process is automated to reduce stress.
* Make your deployment process automatic, you can use platforms like
[Netlify](https://netlify.com) to do this

### How do I Get Started?

You can use some already built technologies to build JAMstack applications in a
few minutes. Here are a few:

* [Gatsby](https://www.gatsbyjs.org/)

Gatsby is a free and open source framework based on React that helps developers
build blazing fast **websites and** **apps**

* [NuxtJS](https://nuxtjs.org/)

NuxtJS is the Vue.js Framework for Universal applications, static generated
applications, single page applications, progressive web apps and desktop apps

* [Hugo](https://gohugo.io/)

Hugo is the world’s fastest framework for building websites

Hugo is one of the most popular open-source static site generators. With its
amazing speed and flexibility, Hugo makes building websites fun again.

* [Netlify CMS](https://www.netlifycms.org/)

Netlify CMS is an open source content management for your Git workflow which can
be used with any static site generator for a faster and more flexible web
project

* [Contentful](https://www.contentful.com)

Contentful is a smarter and seamless content management which provides editors
and developers with a unified content thereby enhancing collaboration and
ensuring digital products ship to the market faster.

* [Svelte](https://svelte.dev/)

Svelte is a radical new approach to building user interfaces. Whereas
traditional frameworks like React and Vue do the bulk of their work in the
*browser*, Svelte shifts that work into a *compile step* that happens when you
build your app.

[and many more. . .](https://www.staticgen.com/)

### Useful Resources

* [JAMstack WTF](https://jamstack.wtf/)
* [How to Build a JAMstack
Website](https://cosmicjs.com/blog/how-to-build-a-jamstack-website)
* [What is JAMstack and why you should try
it](https://www.giftegwuenu.com/what-is-jamstack-and-why-you-should-try-it/)
* [A JAMstack-ready CMS](https://www.contentful.com/r/knowledgebase/jamstack-cms/)
* [JAMstack for Clients: On Benefits & Static Site
CMS](https://snipcart.com/blog/jamstack-clients-static-site-cms)
* [Go static: 5 reasons to try JAMstack on your next
project](https://builtvisible.com/go-static-try-jamstack/)
* [Static Websites + JAMstack =
❤](https://julian.is/article/static-websites-and-jamstack/)

Find more resources [here](https://jamstack.org/resources/)


{{< youtube uWTMEDEPw8c >}}

*Creator of JAMstack and CEO of Netlify speaking on the Rise of JAMstack*

### Conclusion

JAMstack was invented as a way to put a nomenclature to the new way of building
websites and apps that delivers better performance, higher security, lower cost
of scaling, and a better developer experience.

JAMstack is not about specific technologies, it is a modern web development
architecture based on client-side JavaScript, reusable APIs, and prebuilt
Markup.

Join the [JAMstack community](https://jamstack.org/community/) to learn more and
get more updates

![](https://cdn-images-1.medium.com/max/720/0*u_qiPNnUE4eC3W6W.png)
