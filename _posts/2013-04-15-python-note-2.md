---
layout: post
title: convert .csv to .html in Python
---
git 了一个小小小程序，根据提供的 *.csv* 文件生成一个 *.html* 表格。做这个的原因是之前 Google 通讯录导出之后是 *.csv* 文件，用 excel 打开后数据都挤在一块了很难看。不过很悲催的是写完这个程序发现把那个 *.csv* 文件编码格式换成 ANSI 就打开正常了……

项目地址：[https://github.com/lonn/csv2html](https://github.com/lonn/csv2html) 代码也不长，如下：

    from sys import argv
    import csv

    script, filename = argv
    table = ""

    #open .csv file
    with open(filename, 'rb') as csvfile:
        reader = csv.reader(csvfile)

        #generate table
        table += "<table border='1'>"

        #get every row in .csv
        for row in reader:
            #get every item in row
            table += "<tr>\n" + "".join(["<td>%s</td>\n" % item for item in row]) + "</tr>\n"

        table += "</table>"

    #write to .html
    tofile = filename + ".html"
    with open(tofile, 'w+') as htmlfile:
        htmlfile.write(table)

    print "All done.."

感觉最帅的是这个 inline statement `["<td>%s</td>\n" % item for item in row]`，能把 for loop 写在一行。其他一般。叹气。

其实还能把这个程序再扩展，做成 HTML 表单，修改表格数据提交。不过就可能得借助 Web 框架了，又是另一个 project 了。呼～
