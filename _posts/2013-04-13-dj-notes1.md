---
layout: post
title: Django 开发的一般流程
---
看完豆瓣上的《[Django入门教程](http://read.douban.com/ebook/284513/)》，书是翻译 Django 官网上的 [tutorial](https://docs.djangoproject.com/en/1.5/intro/tutorial01/)（之前看了一半没坚持，掩面），通过建立一个投票应用来介绍 Django。刚接触 Django 就被其 MVC 开发模式所吸引啊（可能也是我第一次接触框架这个概念，觉得好强大，模型、视图、模板都是彼此去耦合的）。简单的做下记录：

Django 开发的一般流程包括模型设计、URL 设计、视图编码以及模板设计。

**模型设计**简单来说是建立数据库的结构，Django 自带的对象 - 关系映射工具（ORM）就能让你直接用 Python 代码来描述数据库结构。

    from django.db import models
    
    class Article(models.Model):
        pub_date = models.DateField()
        headline = models.CharField(max_length=200)
        content = models.TextField()
        reporter = models.ForeignKey(Reporter)
        
**URL 设计**是通过一个 URLconf 模块将由*正则表达式*写成的 URL 规则映射到 Python 回调函数（即视图）的位置。

    from django.conf.urls import patterns
    
    urlpatterns = patterns('',
        (r'^articles/(\d{4})/$', 'news.views.year_archive'),
        (r'^articles/(\d{4})/(\d{2})/$', 'news.views.month_archive'),
        (r'^articles/(\d{4})/(\d{2})/(\d+)/$', 'news.views.article_detail'),
    )
    
**视图**的任务是返回一个包含所请求页面的 HttpResponse 对象，或者抛出一个异常如 Http404 异常。一般来说，视图会根据匹配到地址的数据，载入模板，然后用数据来渲染模板。

    def year_archive(request, year):
        a_list = Article.objects.filter(pub_date__year=year)
        return render_to_response('news/year_archive.html', {'year': year, 'article_list': a_list})
          
**模板**就是我们朴素的 HTML 网页。

    {% raw %}
    {% extends "base.html" %}
    
    {% block title %}Articles for {{ year }}{% endblock %}
    
    {% block content %}
    <h1>Articles for {{ year }}</h1>
    
    {% for article in article_list %}
        <p>{{ article.headline }}</p>
        <p>By {{ article.reporter.full_name }}</p>
        <p>Published {{ article.pub_date|date:"F j, Y" }}</p>
    {% endfor %}
    {% endblock %}
    {% endraw %}
        
好想用 Django 啊，可是无从下手。
