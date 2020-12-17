---
title: 输入url发生了什么--HTTP
date: 2020-12-02
tags: 
  - 计算机知识
  - HTTP
author: 追旅
location: 杭州滨江 
---

## 前言

TCP连接成功后就可以发送http请求，然后服务端返回相应的资源，之后就会四次挥手断开连接

## HTTP版本差异

HTTP是TCP/IP模型中的应用层协议，不同版本的http发起请求过程不尽相同：

### http1.0

每次发起请求时会连接TCP，服务器响应后TCP会断开连接

### http1.1

* 管线化(pipelining)

http1.1管线化(pipelining)支持在一个TCP连接中多个http请求一一发送，各请求不需要等待服务器对前一个请求的响应，不过客户端在接收响应的时候还是按照发送的顺序接收的，如果前一个请求阻塞后续的请求都需要等待，所以仍会造成阻塞，即线头阻塞（HOLB: head of line blocking）

* 长连接

http1.1支持长连接，默认开启Connection: keep-alive，不会关闭TCP连接，可以继续发送http请求，但长连接不能并行发起请求，各请求依赖上一个请求的响应，所以有时候依然会造成阻塞

所以http1.1没有完全的解决HOLB问题

### http2.0

http2.0是基于SPDY设计的，主要有一下特点：

* 多路复用

即共享TCP连接，一个request请求对于一个id，一个连接上可以有多个request请求，每个连接的request可以随机混杂在一块，接收方可以根据request的id将request在归属到各自不同的服务器里

* 新的二进制格式

HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮

* header压缩

http1.x中header携带了很多重复复杂的信息，http2.0使用算法压缩了header，减小包的大小和数量

* 服务端推送

采用了SPDY网页，如服务器向客户端推送style.css的同时会推送一个style.js，当客户端再次获取style.js时会从缓存中获取，不需要在发请求


相对于1.x版本，http2.0请求资源的速度会快很多

## 发送HTTP请求

一个请求报文由请求行、请求头、空行、正文组成，空行表示：请求头结束，接下来是正文，如下是一个完整的请求报文：

```
GET /index.css HTTP/1.1  // 请求行（请求方法 + url + 协议版本）
Host: locahost:8001 // 以下到空行为请求头
Connection: keep-alive
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36
Accept: */*
Referer: http://locahost:8001
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7
Cookie: sessionId=e5a74d-3871-4817-a073-49d1bc241
                         // 此处是空行表示请求头到此结束
id=1&test=2 // 请求正文
```

http1.1请求方法有：

* GET（通常用来请求资源）
* POST（通常用来添加）
* DELETE（通常用来删除）
* PUT（通常用来更新，这里的更新可以理解为替换资源）
* PATCH（通常用来更新部分资源）
* HEAD（类似于GET, 但是不返回body信息，用于检查对象是否存在，以及得到对象的元数据）
* OPTIONS（预检，询问服务器是否允许访问）
* TRACE（回显服务器收到的请求，主要用于测试或诊断）

非简单请求会触发预检（options请求），详看阮一峰的[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## 服务端响应

第一次发送请求后服务端响应请求，响应状态码一般有如下分类：

* 1xx: 指示信息，表示请求已接收，继续处理
* 2xx: 成功，操作被成功接收并处理
* 3xx: 重定向
* 4xx: 客户端错误
* 5xx: 服务端错误

常见状态码：

* 200: 请求成功
* 301: 永久移动
* 302: 临时移动
* 304: 资源未改变（协商缓存）
* 400: 客户端语法错误
* 403: 拒绝请求
* 404: 资源找不到
* 500: 服务器内部错误
* 501: 服务器不支持请求功能
* 505: 服务器不支持请求协议版本

## 浏览器缓存(HTTP缓存)

第一次请求到资源后，浏览器会根据请求头中的缓存标识决定是否缓存、如何缓存资源，之后会引出两个概念强缓存和协商缓存，强缓存和协商缓存都是拉取的缓存数据，区别就在于是否和服务器有交流

### 强缓存

浏览器请求资源时会先获取缓存的请求头信息，如果```Cache-Control```和```expires```命中强缓存则拉取本地缓存

#### expires

```expires```是http1.0的规范，它的值是一个绝对时间的GMT格式的时间字符串（如Wen, 18 Mar 2020 17:25:00 GMT），这个值表示资源的过期时间，未超过该时间则会从本地拉取缓存

缺点是```expires```的值是绝对时间，这对客户端和服务端时间一致性要求就比较高，一旦修改了客户端时间或客户端和服务端时间差异较大就会出现缓存混乱的问题

#### Cache-Control

```Cache-Control```是http1.1的规范，通过```max-age```来判断（如max-age=1000，表示1秒后过期），这是一个相对时间，除了max-age还有以下属性：

1. no-cache: 不使用强缓存，但可以使用协商缓存
2. no-store: 强缓存和协商缓存均无法使用
3. pubilc: 浏览器和代理服务器都可以对资源进行缓存
4. privite: 只有浏览器可以缓存，代理服务器不能缓存
5. s-maxage: 代理服务器的缓存有效期，同时设置max-age和s-maxage，客户端会使用max-age，代理服务器会使用s-maxage

其实还有一个Pragma，不过它已经逐渐被抛弃了，这里不做过多了解了

#### 优先级

Cache-Control > expires

### 协商缓存

当强缓存没有命中，接下来就要看是否能够命中协商缓存，所谓协商就是浏览器与服务器协商，如果资源还是老的资源没有更新变动则返回304告诉浏览器从缓存中拉取数据，主要是通过请求头中的```last-modified```和```etag```来判断是否需要重新拉取数据

#### last-modified/if-modified-since

如果第一次请求服务器返回的头信息带有```last-modified```信息后续请求会携带```if-modified-since```，```last-modified```记录的是资源的最后修改时间，```if-modified-since```记录的是上次```last-modified```，服务器会将浏览器传过来的```if-modified-since```和资源修改时间做对比，如果时间一致则表示资源未修改返回304，拉取缓存的资源，如果时间不一致则向服务器请求新的资源，更新```last-modified```为新的修改时间

缺点是只能精确定秒，秒以内修改无法，假如一个文件1s内修改了n次，```last-modified```是无法捕获的。另外一个问题是只要文件被修改了，无论内容是否有变化，都会以最新的修改时间为判断依据，这就导致了一些没必要的请求，接下来的etag就是来解决这个问题的

#### etag/if-none-match

和```last-modified```相同，第一次请求服务器返回的头信息携带了```etag```后续的请求会携带```if-none-match```，```if-none-match```记录的是上次的```eatg```，```etag```和```last-modified```判断同样过程相似，服务器对比浏览器传过来的```if-none-match```和当前内容的标识字符串，不同则返回新的资源和新的标识字符串

#### 与```last-modified```区别：

1. ```etag```是唯一标识字符串，只要内容变动etag就会变化，更精确的感知内容的变化
2. 即使304，由于```etag```重新生成过，服务器还是会将```etag```返回，即使这个```etag```没有变化

#### 优先级

etag > last-modified

### 图解流程

![An image](../.vuepress/public/computer/20201130computer3.png)

## 断开TCP连接

之前TCP部分已经讨论过了，不在赘述。












