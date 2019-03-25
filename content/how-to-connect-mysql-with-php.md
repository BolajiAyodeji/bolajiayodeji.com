---
title: "How to Connect Mysql with PHP"
date: 2018-04-28T13:22:14+24:00
draft: false
type: "post"
tags: ["php", "mysql", "database"]
---


When many developers refer to a database, they are usually referring to MySQL, a
very popular DBMS that powers projects of all sizes. The USP of MySQL is its
ability to handle huge volumes of data without breaking a sweat.

In this article I will discuss how to connect MySQL Database using Localhost Server.


### Create MySQL Database at the Localhost

First, let me tell you what PHPMyAdmin is. It is a control panel from where you
can manage your database that you have created. Open your browser and go to
localhost/PHPMyAdmin or click “Admin” in XAMPP UI.

When you first installed XAMPP, it only created the username for it to be
accessed, you now have to add a password to it by yourself. For this, you have
to go to User account where the user is same as the one shown in this picture:

![](https://cdn-images-1.medium.com/max/880/0*Kjc-5Hwt0tHeDZJE.png)

Now click *Edit privileges* and go to Change Admin password, type your password
there and save it. Remember this password as it will be use to connect to your
Database.

![](https://cdn-images-1.medium.com/max/880/0*Bf6g12KPGGtGDHuS.png)

Note: It is not necessary to change password to access databases on local host.
It is a good practice and that is why we have used a password.

### Create Database

Now return to the homepage of phpmyadmin. Click *New* button to create a new
database.

![](https://cdn-images-1.medium.com/max/880/0*7IUxi9DeitEReIya.png)

In the new window, name your database as per your need, I am naming it
“**practice**”. Now select Collation as utf8_general_ci, as we are using it for
learning purposes and it will handle all of our queries and data that will be
covered in this tutorial series. Now click on *Create* and your database will be
created.

![](https://cdn-images-1.medium.com/max/880/0*2Cysb8IhDpvzDuQ7.png)

The newly created database will be empty now, as there are no tables in it. I
will be covering that in the upcoming series where we will learn how to create
tables and insert data in it. In this tutorial, we are going to connect this
database to a localhost using PHP.

![](https://cdn-images-1.medium.com/max/880/0*zjlRKjiDUjimMy7q.png)

### Create a Folder in htdocs

Now, locate the folder where you installed XAMPP and open htdocs folder (usually
c:/xampp). Create a new folder inside c:/xampp/htdocs/ and name it “practice” we
will place web files in this folder. Why we have created folder in htdocs? XAMPP
uses folders in htdocs to execute and run your PHP sites.

Note: If your using WAMP, then add your practice folder in c:/wamp/www folder.

### Create Database Connection File In PHP

Create a new php file and name it *db_connnection.php* and save it. Why am I
creating a separate database connection file? Because if you have created
multiple files in which you want to insert data or select data from the
databases, you don’t need to write the code for database connection every time.
You just have to include it by using PHP custom function **include** (include
‘connection.php’) on the top of your code and call its function and use it. It
also helps when you are moving your project location from one PC to another and
you have to change the values on the single file and all the changes will be
applied to all the other files automatically. Write the following code in your
db_connection file.

```
<?php function OpenCon()
{
$dbhost = “localhost”;
$dbuser = “root”;
$dbpass = “1234”;
$db = “example”;
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die(“Connect failed: %s\n”. $conn -> error);
return $conn;
}
function CloseCon($conn)
{
$conn -> close();
}
?>
```

Here is the explanation of the variable that we have used in our db_connection
file:

1.  $dbhost will be the host where your server is running it is usually localhost.
1.  $dbuser will be the username i.e. **root** and $dbpass will be the password
which is the same that you used to access your phpmyadmin.
1.  $dbname will be the name of your database which we have created in this
tutorial.

### Create new php file to check your database connection

Create a new php file to connect to your database. Name it index.php and add
this code in this file.

```
<?PHP
INCLUDE ‘DB_CONNECTION.PHP’;
$CONN = OPENCON();
ECHO “CONNECTED SUCCESSFULLY”;
CLOSECON($CONN);
?>
```

### Run it!

Now open your browser and go to `localhost/practice/index.php` and you should see
this screen:

![](https://cdn-images-1.medium.com/max/880/0*Jl6hwq9wTGqgI67x.png)

Confirmation Message

Congratulations! You’ve successfully connected your database with your
localhost! If you are not able to see this screen, then check if you have done
everything right in your db_connection.php file.



![thewebdev](https://res.cloudinary.com/iambeejayayo/image/upload/c_scale,w_100/v1547954566/fav-500.png)

# Subscribe for my Newsletter [here](https://eepurl.com/geCCfL) and get notified when I write something cool.