---
date: 2023-09-24 12:00:00 +0800
layout: post
title: 网易云歌单
comment: true
excerpt: 我的网易云歌单。使用 APlayer，Meting，MetingJS 搭建。
---

<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">

<meting-js
    server="netease"
    type="playlist"
    id="82619039"
    list-max-height="60vh"
    theme="orange">
</meting-js>

<script>var meting_api='//api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id'</script>
<script src="//cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/meting/dist/Meting.min.js"></script>
