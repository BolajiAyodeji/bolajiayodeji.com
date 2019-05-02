---
title: "Introduction to Web Accessibility"
date: 2019-04-05T13:22:14+24:00
draft: false
type: "post"
tags: ["web", "accessibility", "a11y"]
---


![](https://cdn-images-1.medium.com/max/800/1*aCjM9p-nzRGLeGMtNFx0Qw.png)

As developers, it’s easy to assume that all users can see and use a keyboard, mouse or screen, you feel everyone can interact with your web page the same way you do. This can lead to a user experience that works well for some people but creates issues for others :(

Many developers have only a little or blurred understanding of what
accessibility means, of course, accessibility can be a complex and difficult
topic but understanding it, its scope and its impact can make you a better and
inclusive web developer.

In this article, I’ll introduce you to accessibility, what it means, why you should care, a few tips, tools and resources to get you started.

![](https://cdn-images-1.medium.com/max/800/0*WXgUQC2V92dkcYgZ)
<br />
<span class="figcaption_hack">*Gif by [Jona Dinges](https://dribbble.com/jonadinges)*</span>

*****

### What is Accessibility?

Let’s start by defining accessibility and inclusion.

> According to [thesaurus
> dictionary](https://www.dictionary.com/browse/accessibility), accessibility
simply means: easy to approach, reach, enter, speak with, or use.

*****

> **Inclusion** is a societal ideology regarding individuals with disabilities and
> special education. I**nclusion** describes a group that’s particularly welcoming
to all kinds of people irrespective of their differences.

*****

> In computer-human interaction, accessibility simply means making the web
> accessible and having functionalities that can be operated by literally everyone
including those with all forms of disabilities, limitations and conditions..

*****

#### Those with Disabilities

According to WHO, there are about 285,000,000 people in the world today. Blind
and visually impaired make up of the 285,000,000 people according to the [World
Health Organization](http://www.who.int/mediacentre/factsheets/fs282/en/) (June
2012) with 39,000,000 categorized as legally blind and the remaining 246,000,000
visually impaired. The deaf and hearing impaired make up 275,000,000 (2004) in
the moderate-to-profound hearing impairment category.

Some forms of disabilities include:

* **Physical disabilities** (One that affects a person’s mobility or dexterity)
* **Intellectual or Learning Disabilities** ( People with an intellectual,
learning, or cognitive disability have a reduced capacity to read, learn tasks
or process information.)
* **Visual impairments** (People with sight challenges, visually impaired
individuals and blind people.)
* **Hearing impairments** ( Deafness and hearing loss)
* **Neurological disabilities** ( Disabilities associated with damage to the
nervous system that results in the loss of some physical or mental functions.)

#### Those with limitations/ conditions

Disabilities can also be conditional. 

* A broken arm
* A loud restaurant
* Not speaking the local language e.t.c

All these are examples where someone may benefit from accessible practices.

> Everybody is a keyboard user when they are eating with their mouse hand.

> — Adrian Roselli

#### How can we help these people?

Web Accessibility comes to the rescue. It is a practice whereby web applications
are designed and developed so that its functionality can be operated by people
with disabilities. 

*****

### Web Accessibility Guidelines

> Throughout this article, I’ll refer to the [Web Content Accessibility Guidelines
> (WCAG) 2.0](https://www.w3.org/TR/WCAG20/), a set of guidelines and best
practices put together by web accessibility experts to address what
“accessibility” means in a methodical way.

WCAG is organized around four principles often called *The POUR Principle*:

* **Perceivable** <br>
 Can users perceive the content? This ensures that our
applications are perceivable with *sight, touch, or hearing* senses via the
browser or assistive technologies e.g Screen readers
* **Operable** <br>
Can users use UI components easily and navigate the content? For
example, something that requires a hover interaction cannot be operated by
someone who can’t use a mouse or touch screen. This means users should be able
to control your web apps elements using either the mouse, keyboard or an
assistive device.
* **Understandable** <br>
Can users understand the content? Can users understand the
interface and is it clear and concise? This ensures an easy understanding and
smooth user experience.
* **Robust** <br>
Can the content be consumed by a wide variety of users on several
browsers? This ensures compatibility of your app across several devices,
browsers or operating systems.

*****

### Web accessibility tips

Now that you understand what Web Accessibility means and why you should care,
let me walk you through a few tips that would help you to build accessible
websites :)

* **Always add alternative texts to images**

Now that you understand what Web Accessibility means and why you should care,
let me walk you through a few tips that would help you to build accessible
websites :)

* **Always add alternative texts to images**

This is one thing most developers miss, I used to miss this too when I started
out because I didn’t really understand the essence of *alternative texts.*

> Alternative texts (also know as `alt`) is a word that can be inserted as an
> attribute in an HTML document to tell your website users the contents of an
image. The alt text appears in a blank box that would normally contain the
image. Alt text is useful when an image is not available because of a broken
link, changed URL or something else.

*Alternative texts as the name imply serve as an alternative for screen readers.
They are read aloud to blind users on a screen reader and other screen
assistive technologies.*

You add alternative texts to images with the *`alt`* attribute

    <img src="./school.png" alt="a private school in Kogi State.">

Another important aspect of the `alt` attribute is that you should be specific
when adding these texts. For example, examine the images below:

<br> 

![](https://cdn-images-1.medium.com/max/600/0*l82N_5g3MF01TecN.jpg)
<span class="figcaption_hack">Beautiful [Aniekan Inyang](https://medium.com/u/61b12cb51464)</span>

<br> 

    <img src="./lady.png" alt="a beautiful lady">

--

    <img src="./lady.png" alt="a beautiful lady smiling in front of a brown door">

<br> 

Which of the code above would support accessibility more, 1 or 2?

<br> 

![](https://cdn-images-1.medium.com/max/600/0*0-CYDoZHLHaOY2c2)
<span class="figcaption_hack">Beautiful [Ada Nduka Oyom](https://medium.com/u/fb80690688e0)</span>

<br> 

    <img src="./lady.png" alt="a beautiful and alluring lady">

--

    <img src="./lady.png" alt="a beautiful and alluring lady smiling next to the beach waves">

<br> 

Which of the code above would support accessibility more, 1 or 2?

<br> 

Now you should understand the context of being specific when using alternative
texts. You might not see the need, you probably would not need it, but a whole
lot of users with disabilities need it.

* **Design your forms for Accessibility**

Ensure you add `<label>` to your form elements though they might not be visible.
You can add labels for screen readers and still hide them from displaying to
other users.

```
<form action="./contact.php" method="POST">
  <label for="fullname">Full name</label>
  <input type="text" name="fullname" id="fullname">
  <label for="email">Email address</label>
  <input type="email" name="email" id="email">
  <label for="phone">Telephone</label>
  <input type="number" name="phone" id="phone">
</form>
```

Ensure that your `for` attribute matches the `id` 

* **Always specify your web app language**

```
<html lang="en-US"> // American english

 <html lang="en-UK"> // British english

 <html lang="fr"> // French
```

If your app supports multiple languages or translations, ensure to specify that
too.

* **Don’t use tables for anything except tabular data**
* **Don’t auto-play video, music or other media files** (Please avoid this)
* **Ensure that links are recognizable. Either underlined or with a different
colour**
* **Always provide a skip to main content option**

Skipping to main content links are useful for users who use keyboard navigation
only

```
<body>
...
  <a href="#main">Get Started</a>
...
  <p>
   Our story is a story which explains another story. Cut the crap
   this is too long and I don't want to read it.
  </p>
...
  <main id="main">
    <!-- page specific content -->
   <p> Here's the main stuff bro </p>
  </main>
</body>
```


* **Reduce your divs and make use of semantic elements**

HTML5 provides additional elements, such as `<nav>` , `section` and `<aside>`,
to better structure your content.

*****

I’d stop here as we have tons of accessibility guidelines, but don’t worry, I’ve
included links for further reading below :)

### The A11y project

This is a community-driven effort to make web accessibility easier with tons of
resources, events, patterns, checklists and lots more to help you build more
accessible applications. [https://a11yproject.com/](https://a11yproject.com/)

> Accessibility can be a complex and difficult topic. The Accessibility Project
> understands this and wants to help make it easier to implement on the web.

### Web accessibility tools

* **ally.css**

This CSS file intends to warn developers about possible risks and mistakes that
exist in HTML code. It can also be used to roughly evaluate a site’s quality by
simply including it as an external stylesheet.

Get the Ally.css built by [Gaël Poupard](https://github.com/ffoodd)
[here](https://ffoodd.github.io/a11y.css/) or download the equivalent web
extension (chrome, firefox and opera) Alix built by [Ire
Aderinokun](https://medium.com/u/f7f8398c3660)
[here](https://github.com/ireade/alix)

* **Chrome lighthouse**

Lighthouse is an [open-source](https://github.com/GoogleChrome/lighthouse),
automated tool for improving the quality of web pages. You can run it against
any web page, public or requiring authentication. It has audits for performance,
accessibility, progressive web apps, and more. Read my previous article:
[Introduction to chrome
lighthouse](https://bolajiayodeji.com/introduction-to-chrome-lighthouse/) to get
started.

* **Contrast Checker**

Check the contrast of your colour design for accessibility based on Web Content
Accessibility Guideline (WCAG). Check it [here](https://contrastchecker.com/).

* **NoCoffee**

A chrome extension which is helpful for understanding the problems faced by
people with slight to extreme vision problems. Download
[here](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)

#### A full list of web accessibility tools can be found
[here](https://www.w3.org/WAI/ER/tools/)

*****

### Resources

* [Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/TR/WCAG20/)
* [HTML Language
Codes](https://www.w3docs.com/learn-html/html-language-codes.html)
* [Guide to using Alternative Texts on
images](https://www.giftegwuenu.com/guide-to-using-alternative-text-on-images)
by [Egwuenu Gift](https://medium.com/u/46bccfc2f42c)
* [Creating valid and accessible
links](https://a11yproject.com/posts/creating-valid-and-accessible-links/)
* [ARIA Landmark roles and HTML5 implicit
mapping](https://a11yproject.com/posts/aria-landmark-roles/)
* [Introduction to NDVA](https://a11yproject.com/posts/getting-started-with-nvda/)
* [How-to hide content but still make it accessible to screen
readers.](https://a11yproject.com/posts/how-to-hide-content/)
* [How-to: Using caption services with HTML5
video](https://a11yproject.com/posts/using-caption-services-with-html5-video/)
* [Basic screen reader commands for accessibility
testing](https://developer.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

#### A full list of web accessibility resources can be found
[here](https://a11yproject.com/resources)

*****

### Conclusion

Everyone should be able to access and enjoy the web irrespective of their
challenges or limitations. As developers, we’re building solutions for **every
user** and not just **some users**. As much as we focus on UI/UX, we should also
put extra focus on accessibility. Thanks for reading!

<br> 

![](https://cdn-images-1.medium.com/max/800/0*BQcPB-Ak2H8VA0AT.png)

Like this article? Kindly follow me on twitter
[@iambolajiayo](https://twitter.com/iambolajiayo)
