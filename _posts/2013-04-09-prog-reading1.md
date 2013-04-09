---
layout: default
title: 初探 PHP 实现用户登录功能
---
{{ page.date | date_to_string }}
不得不说程序员的道路走起来相当的坎坷，一个用 PHP 实现用户注册登录的功能看了一天。最后还只是初探了一个大概。唉～～

问题概括：通过建立一个用户系统，实现用户对网页的数据交互。

方法概要：

* 建立两个对象文件：其一 Database 用以提供连接数据库的方法；其二 Login 用以根据 GET 和 POST 执行不同的方法，还会用到 session 来跟服务器对话，主要用来判断用户是否已经登录，用户关闭浏览器 session 自动销毁。
* index.php：主页面，建立对象，根据状态方法展示页面。
* register.php：用户注册页面，提供 GET 和 POST。
* logged_in.php：用户已登录页面。
* not_logged_in.php：用户登录页面。

剩下问题：用户密码存储到数据库时的 md5 编译，cookies 的使用。
