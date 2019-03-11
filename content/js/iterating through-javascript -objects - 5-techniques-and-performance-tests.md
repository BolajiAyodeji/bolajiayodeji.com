---
title: "Iterating through JavaScript Objects  -  5 Techniques and Performance Tests."
date: 2019-03-10T13:22:14+24:00
draft: false
type: "post"
tags: ["javascript", "es6", "objects"]
---

![](https://cdn-images-1.medium.com/max/800/1*KWR1E4S6N5uZiWPd0x9KRg.png)

Developers tend to know how to iterate through JavaScript Arrays easily but most
times they tend to get confused while working with JavaScript Objects especially
beginners and intermediates. In this article, I’d show you Five (5) different
ways of iterating through JavaScript Objects and some performance comparison
tests to show you which is faster and more efficient.

*****

### * Useful tips :)

#### Property flags

Object properties, besides a `value`, have three special attributes (also known
as “flags”):

* `writable` – if `true`, can be edited, else it's read-only.
* `enumerable` – if `true`, then listed in loops.
* `configurable` – if `true`, the property can be deleted and these attributes can
be modified.

When we create a property “the usual way”, all of them are `true`. But we can
change them anytime.

The method
[Object.getOwnPropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
allows us to query the *full* information about a property.

{{< gist BolajiAyodeji a6b43032adb5dab84361a3437ed9e977 >}}

#### **What does an enumerable property mean?**

**Enumerable properties** are those **properties** whose internal **enumerable**
flag is set to true, which is the default for **properties** created via simple
assignment.

Basically, if you create an object via `obj = {foo: 'bar'}` or something
thereabouts, all the properties are enumerable.

*****

### 1. for…in loop

The **for...in loop statement** can be used to iterate over all
non-[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol),
[enumerable
properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
of an object.

{{< gist BolajiAyodeji 30f496fc4546fd2ecd6fec24f75a7ba0 >}}

### 2. Object.keys

The `Object.keys()` method returns an array of Object keys. This only returns
keys of enumerable properties.

{{< gist BolajiAyodeji 96f4d8012b961c790224503985a759ff >}}

### 3. Object.values

The `Object.values()` method returns an array of Objects Values. This only
returns values of enumerable properties.

{{< gist BolajiAyodeji fc94861337260f9c8ab16153801e847c >}}

### 4. Object.getOwnPropertyNames

The `Object.getOwnPropertyNames()` method returns an array of all properties
(including non-enumerable properties except for those which use Symbol) found
directly in a given object.

{{< gist BolajiAyodeji ae8829a2efffa7fa93a6e0511d9d4158 >}}

### 5. Object.entries

The `Object.entries()` method returns an array of a given object's own
enumerable property `[key, value]` pairs. 

{{< gist BolajiAyodeji c5aa111881e504d4d99669cbd685e112 >}}

<br> 

### Performance Comparison

Now let's test all these techniques and compare each one based on their speed
and performance to determine which is faster and much efficient

Most browsers like Chrome and Firefox implement high-resolution timing in
`performance.now()`. The `performance.now()` method returns a
`DOMHighResTimeStamp`, measured in milliseconds.

**Usage**

```
let start = performance.now();


// code to be timed...


let duration = performance.now() - start;

```

Let’s begin testing…

{{< gist BolajiAyodeji f42e98d723eb4e5629691d7a148ee550 >}}

### Test Results

According to our tests, here are the results in ascending order;

![](https://res.cloudinary.com/iambeejayayo/image/upload/v1552257253/loop.png)

So, according to these results, the fastest and most efficient way to iterate
through JavaScript Objects is the **for…in loop.**

Now, this doesn't mean the other methods are void or useless, it all depends on
use cases. For example, if you need to get only the keys in an object, there’s
no point using a for…in loop even though according to our test is the fastest,
you can easily use Object.keys() which would faster in this use case.

So if you’re dealing with both keys and values, then for…in loop should be your
best shot as it is flexible and allows you to access both keys and values within
the loop without having to run other methods otherwise, you should use the other
methods.

### Reference

* [http://javascript.info/](http://javascript.info/)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![thewebdev](https://res.cloudinary.com/iambeejayayo/image/upload/c_scale,w_100/v1547954566/fav-500.png)

# Subscribe for my Newsletter [here](https://eepurl.com/geCCfL) and get notified when I write something cool.