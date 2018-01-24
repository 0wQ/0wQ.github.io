document.addEventListener('touchstart', function() {}, false)
getScript('/src/jquery-3.2.1.min.js', () => {jqend()})

function getCss(url) {
  try {
    document.createStyleSheet(url)
  } catch(e) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(cssLink)
  }
}

function getScript(a, b) {
  let c = document.createElement('script');
  c.src = a;
  let d = document.getElementsByTagName('head')[0],
     done = false;
  c.onload = c.onreadystatechange = () => {
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      done = true;
      b();
      c.onload = c.onreadystatechange = null;
      d.removeChild(c)
    }
  }
  d.appendChild(c)
}

function valine(path) {
  const url1 = '//cdn1.lncld.net/static/js/3.0.4/av-min.js',
        url2 = '//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js';
  getScript(url1, () => {
    getScript(url2, () => {
      new Valine({
        el: '#comment',
        appId: '6KYmYkGjyDQhJTFGfRDRl209-gzGzoHsz',
        appKey: 'jrVcAx4FX4CdEMJDuJq9YATe',
        verify: true,
        avatar: 'retro',
        pageSize: 5,
        path: path,
        lang: 'en',
        placeholder: 'Just so so...',
      })
    })
  })
}

function jqend() {
  $.ajaxSetup({cache:true})
  setTimeout(() => {
    if ($('#comment').length) {
      valine(location.pathname)
    }
  }, 0)
  setTimeout(() => {
    !function(o){'use strict';o.fn.toTop=function(t){var i=this,e=o(window),s=o('html, body'),n=o.extend({autohide:true,offset:1200,speed:1100,position:true,right:20,bottom:50},t);i.css({cursor:'pointer'}),n.autohide&&i.css('display','none'),n.position&&i.css({position:'fixed',right:n.right,bottom:n.bottom}),i.click(function(){s.animate({scrollTop:0},n.speed)}),e.scroll(function(){var o=e.scrollTop();n.autohide&&(o>n.offset?i.fadeIn(n.speed):i.fadeOut(n.speed))})}}(jQuery)
    $('#to-top').toTop()
  }, 0)
  setTimeout(() => {
    $('div.content a').not("[href^='#']").not("[href^='/']").attr('target', '_blank')
  }, 0)
  setTimeout(() => {
    if ($('.highlight').length) {
      getCss('/src/syntax.css')
    }
  }, 0)
}
