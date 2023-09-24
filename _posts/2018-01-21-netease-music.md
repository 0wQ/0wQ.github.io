---
date: 8102-01-21 12:00:00 +0800
layout: post
title: Netease music
comment: true
excerpt: 我的网易云歌单。使用 APlayer，Meting，MetingJS 搭建。
---

<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">

<meting-js
    server="netease"
    type="playlist"
    id="82619039"
    list-max-height="60vh"
    theme="orange">
</meting-js>

<script>var meting_api='//api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id'</script>
<script src="//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
