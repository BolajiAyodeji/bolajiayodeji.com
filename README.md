<div align="center">
  
![](https://res.cloudinary.com/iambeejayayo/image/upload/v1547954566/fav-500.png)

My personal PWA blog built with Hugo, JavaScript and Hosted on Netlify. <br>
I write articles on Web & Frontend Development. <br>

Syntax theme based on [Hugo Lamp Theme](https://github.com/huyb1991/hugo-lamp) with tons of tweaks & modifications.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a596dc79-6e68-4927-8d05-2c32cae50786/deploy-status)](https://app.netlify.com/sites/bolaji-test/deploys)

</div>

## Contributing Guide

To run locally, you need to have [Hugo](https://gohugo.io/) setup first. Hugo installation guide can be found [here](https://gohugo.io/getting-started/installing) <br>


After installing Hugo, clone this repository 
```
git clone https://github.com/BolajiAyodeji/bolajiayodeji.com.git
```
```
cd bolajiayodeji.com
```
Install dependencies
```
npm install
```

Run this command to start local build `hugo server -D`, then open https://localhost:1313.

## Modifying posts

Run this to build search index
```
grunt lunr-index
```
