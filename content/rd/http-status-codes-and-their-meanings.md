---
title: "HTTP status codes and their meanings"
date: 2018-11-24T13:22:14+07:00
draft: false
type: "post"
tags: ["status code", "browser", "http"]
---

![](https://cdn-images-1.medium.com/max/880/0*23QfPlJt7VEIM2ri.png)
<span class="figcaption_hack">Source: Google</span>

Often time, we come across several errors while surfing through some websites
which displays with a status code, as developers we need to be familiar with
this status codes.

In this article, I'd be explaining what each HTTP status code stand for.

**What is an HTTP status code?**<br> For every request from a web browser the
server responds with a status code. If there was a error, you can get additional
information about the error. You can find the most frequent error codes and a
brief description in the list below.

**HTTP Error 401 — Unauthorized**<br> The 401 status code indicates that the
HTTP request has not been applied because it lacks valid authentication
credentials (usually username and password) for the target resource. If the
request included authentication credentials the 401 response indicates that
authorization has been refused for those credentials. Please check if your
username and password are correct.

**HTTP status 403 — Forbidden**<br> This is a permissions issue. You often
encounter this error when no index file (.htm, .html or .php) is present and the
directory listing is off for a folder in the Web space (Line “Options -Indexes”
in a .htaccess file). Sometimes user authentication was provided, but the
authenticated user is not permitted to view the content of the folder or file.
Other times the operation is forbidden to all users. Sometimes this error occurs
if there are too many connections at the same time.

**HTTP status 404 — Not Found**<br> This error message is shown when a site or
folder on a server are requested but cannot be found at the given URL. Please
check your inputted URL.

**HTTP status 429 — Too Many Requests**<br> The HTTP 429 Too Many Requests
response status code indicates the user has sent too many requests in a given
amount of time. A Retry-After header might be included to this response
indicating how long to wait before making a new request. For example if more
than 50 requests are received from the same IP address (cumulative hits) within
the same second, our server will block that IP for the next 10 minutes as a
security measure.

**HTTP status 500 — Internal Server Error**<br> This is a "catch all" status for
unexpected errors. It is a server side error message common causes of this are
eg. misconfigured .htaccess files or PHP errors, which you can check in the File
php_error.log on your Web host. You can find the php_error.log file in the /log/
directory — this directory can be found on the same level as your /html/
directory

**HTTP status 503 — Service unavailable**<br> This means, that the server is
currently unavailable or the server is over allocated. You can check the file
php_error.log as described for the status code 500.<br> Should you not find
helpful error messages in the log file, please try changing the session_cache to
the option file system, you can do this in the easy name control panel if you
navigate to [My Hosting]>>[PHP settings] and click the link "Settings". Please
note that this change will take up to 15 minutes to take effect, so please try
waiting 15 minutes before trying to call up your site and refresh it.