document.addEventListener('touchstart', function() {}, false)
function getScript(a, b) {
  var c = document.createElement('script');
  c.src = a;
  var d = document.getElementsByTagName('head')[0],
    done = false;
  c.onload = c.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      done = true;
      b();
      c.onload = c.onreadystatechange = null;
      d.removeChild(c)
    }
  }
  d.appendChild(c)
}
function jqend() {
  $.ajaxSetup({cache:true})
  if ($('#comment').length > 0) {
    setTimeout(function() {
      valine(location.pathname)
    }, 0)
  }
  setTimeout(function() {
    !function(o){'use strict';o.fn.toTop=function(t){var i=this,e=o(window),s=o('html, body'),n=o.extend({autohide:true,offset:1200,speed:1100,position:true,right:20,bottom:50},t);i.css({cursor:'pointer'}),n.autohide&&i.css('display','none'),n.position&&i.css({position:'fixed',right:n.right,bottom:n.bottom}),i.click(function(){s.animate({scrollTop:0},n.speed)}),e.scroll(function(){var o=e.scrollTop();n.autohide&&(o>n.offset?i.fadeIn(n.speed):i.fadeOut(n.speed))})}}(jQuery)
    $('#to-top').toTop()
  }, 0)
  setTimeout(function() {
    $('div.content a').not("[href^='#']").not("[href^='/']").attr('target', '_blank')
  }, 0)
}
function valine(path) {
  var url1 = '//cdn1.lncld.net/static/js/3.0.4/av-min.js'
  var url2 = '//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js'
  getScript(url1, function() {
    getScript(url2, function() {
      new Valine({
        el: '#comment',
        appId: '6KYmYkGjyDQhJTFGfRDRl209-gzGzoHsz',
        appKey: 'jrVcAx4FX4CdEMJDuJq9YATe',
        verify: true,
        avatar: 'retro',
        pageSize: 5,
        path: path,
        lang: 'en',
        placeholder: 'Just so so...'
      })
    })
  })
}
getScript('/src/jquery-3.2.1.min.js', function() {jqend()})