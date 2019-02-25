---
title: "Introducing GitHub Linguist"
date: 2019-02-25T13:22:14+24:00
draft: false
type: "post"
tags: ["lang", "github", "linguistic"]
---


![](https://cdn-images-1.medium.com/max/800/1*N80Y9PGa8PQf_90PZAaXog.png)

The files and directories within a repository determine the languages that make
up the repository. With GitHub, you can view a repository’s languages to get a
quick overview of the repository. But how does this happen? What powers this
repository language overview?

In this article I would:

* Introduce you to GitHub Linguist
* How it works
* How to fix common Linguist issues
* How to use `gitattributes`to override Linguist :)
* How to use Emacs or Vim modelines to override Linguist
* How to contribute to GitHub Linguist

Let’s Roll!

*****

You might have noticed this section at the top of your GitHub repositories that
gives you an overview of languages contained in the repository

![](https://cdn-images-1.medium.com/max/800/1*FWBD77YB6yedoMIc04BSOA.png)

Well, GitHub uses the open source [Linguist
library](https://github.com/github/linguist) to determine file languages for
syntax highlighting and repository statistics. Language statistics will update
after you push changes to your default branch (which is usually `master`).

### What is GitHub Linguist?

> GitHub Linguist is a library is used on GitHub.com to detect blob languages,
> ignore binary or vendored files, suppress generated files in diffs, and generate
language breakdown graphs. Source: GitHub Linguist Docs

Basically, Linguist is a library that runs on every GitHub repository. It checks
every file and directory and detects the programming language used in that file.

### How does Linguist work?

Linguist takes the list of languages it knows from `languages.yml` and uses a
number of methods to try and determine the language used by each file, and the
overall repository breakdown.

Linguist starts by going through all the files in a repository and excludes all
files that it determines to be binary data, vendored code, generated code,
documentation, or are defined as `data` (e.g. SQL) or `prose` (e.g. Markdown)
languages, whilst taking into account any overrides.

The result of this analysis is used to produce the language stats bar which
displays the languages percentages for the files in the repository. The
percentages are calculated based on the bytes of code for each language as
reported by the [List
Languages](https://developer.github.com/v3/repos/#list-languages) API.

### How to fix common Linguist issues

Some files are hard to identify, and sometimes projects contain more library and
vendor files than their primary code. If you’re receiving incorrect language
analysis, then read below for common Linguist issues and how to fix them.

#### * My repository isn’t showing my language. :(

Linguist does not consider [vendored
code](https://github.com/github/linguist#vendored-code), [generated
code](https://github.com/github/linguist#generated-code),
[documentation](https://github.com/github/linguist#documentation), or `data`
(e.g. SQL) or `prose` (e.g. Markdown) languages (as defined by the `type`
attribute in `languages.yml`) when calculating the repository language
statistics.

If the language statistics bar is not showing your language at all, it could be
for a few reasons:

1.  Linguist doesn’t know about your language.
1.  The extension you have chosen is not associated with your language in
`languages.yml` e.g saving a JavaScript file as `app.jss`
1.  All the files in your repository are either [vendored
code](https://github.com/github/linguist#vendored-code), [generated
code](https://github.com/github/linguist#generated-code) or
[documentation](https://github.com/github/linguist#documentation) (e.g. SQL,
prose, Markdown…) Linguist excludes these files by default.

> If Linguist doesn’t know about the language or the extension you’re using,
> consider
[contributing](https://github.com/github/linguist/blob/master/CONTRIBUTING.md)
to Linguist by opening a pull request to add support for your language or
extension.

> You can also to tell Linguist to include your files in the language statistics
> by overidding it. (I’d explain how in a bit, read along)

#### * My repository is detected as a wrong language. ಠ_ಠ

If the language stats bar is reporting a language that you don’t expect:

1.  Click on the name of the language in the stats bar to see a list of the files
that are identified as that language.<br> Keep in mind this performs a search so
the [code search
restrictions](https://help.github.com/articles/searching-code/#considerations-for-code-search)
may result in files identified in the language statistics not appearing in the
search results. [Installing Linguist
locally](https://github.com/github/linguist#usage) and running it from the
[command line](https://github.com/github/linguist#command-line-usage) will give
you accurate results.
1.  If the files are misclassified, search for [open
issues](https://github.com/github/linguist/issues) on the Linguist Library to
see if anyone else has already reported the issue.
1.  If no issue solves your problem, [open an
issue](https://github.com/github/linguist/issues/new) on Linguist and include a
link to the repository or a sample of the code that is being misclassified.

> Keep in mind that the repository language stats are only updated when you push
> changes, and the results are cached for the lifetime of your repository. If you
have not made any changes to your repository in a while, you may find pushing
another change will correct the stats.

> A great way to fix this is using the manual override feature to correctly
> classify languages in your repository.

### How to use gitattributes to overriding Linguist

Just as you can customize an override the default configurations of a gaming
control pad, you can also use custom override strategies for language
definitions and file paths in Linguist.

Basically, gitattributes is just a file used to command or tell Git to perform
some specific tasks, sort of a way to tweaking it.

#### **Here’s how to use the Linguist override feature**

* Add a `.gitattributes` file to the root of your project

```
touch .gitattributes
```

* Use the standard git-style path matchers for the files you want to override
using the `linguist-documentation`, `linguist-language`, `linguist-vendored`,
`linguist-generated` and `linguist-detectable` attributes.

> When testing with a local installation of Linguist, take note that the added
> attributes will not take effect until the `.gitattributes` file is committed to
your GitHub repository.

— Using `linguist-language` attribute to override language extensions

    # .gitattributes file which reclassifies `.js` files as Java:

     *.js linguist-language=Java

— Using the `linguist-vendored` attribute to vendor or un-vendor paths

> By default, Linguist treats all of the paths defined in `vendor.yml` as vendored
> and therefore doesn't include them in the language statistics for a repository.

    special-vendored-path/* linguist-vendored
     jquery.js linguist-vendored=false

— Using the `linguist-documentation` attribute to mark or unmark paths as
documentation

    project-docs/* linguist-documentation
     docs/formatter.rb linguist-documentation=false

— Using the `linguist-generated` attribute to mark or unmark paths as generated.

> Not all plain text files are true source files. Generated files like minified
> JavaScript and compiled CoffeeScript can be detected and excluded from language
stats.

    Api.elm linguist-generated=true

— Using the `linguist-detectable` attribute to mark or unmark paths as
detectable

> Only programming languages are included in the language statistics. Languages of
> a different type (as defined in `languages.yml`) are not "detectable" causing
them not to be included in the language statistics.

    *.kicad_pcb linguist-detectable=true
     *.sch linguist-detectable=true
     tools/export_bom.py linguist-detectable=false

### Using Emacs or Vim modelines

If you do not want to use `.gitattributes` to override the syntax highlighting
used on GitHub.com, you can use Vim or Emacs style modelines to set the language
for a single file. Modelines can be placed anywhere within a file and are
respected when determining how to syntax-highlight a file on GitHub.com

Vim
```
# Some examples of various styles:

 vim: syntax=java

 vim: set syntax=ruby:

 vim: set filetype=prolog:

 vim: set ft=cpp:
```


Emacs
```
-*- mode: php; -*-

 -*- c++ -*-
```


### How to contribute to GitHub Linguist

If you experience any issue with Linguist, a quick way to get help is by
contributing via [Pull Requests](https://github.com/github/linguist/pulls) or
[Issues](https://github.com/github/linguist/issues).

GitHub Linguist is an Open sourced library and can be found
[here](https://github.com/github/linguist)

The contribution guide can also be found
[here](https://github.com/github/linguist/blob/master/CONTRIBUTING.md)

### Reference

[GitHub Linguist docs](https://github.com/github/linguist)

### Conclusion

Linguist defines the list of all languages known to GitHub in a [yaml
file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).
In order for a file to be highlighted, a language and lexer must be defined
there.

Most languages are detected by their file extension. This is the fastest and
most common situation.

Thank you for reading, cheers!


![thewebdev](https://res.cloudinary.com/iambeejayayo/image/upload/c_scale,w_100/v1547954566/fav-500.png)

# Subscribe for my Newsletter [here](https://eepurl.com/geCCfL) and get notified when I write something cool.