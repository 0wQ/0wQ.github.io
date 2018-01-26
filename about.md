---
layout: page
title: About
permalink: /about.html
comment: true
---

<style>
.hue {
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
}
@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>

<p class="hue">最后提交: {{ site.time | date: "%Y-%m-%d %H:%M:%S" }}</p>
