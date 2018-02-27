document.addEventListener('touchstart', function() {}, false);
getScript('/src/headroom.min.js?v=0.9.4', function() {
    var elem = document.querySelector('header');
    new Headroom(elem, {
      tolerance: 20,
      offset: 150,
      classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp',
      }
    }).init()
})
getScript('/src/jquery.min.js?v=3.3.0', function() { jqend() })

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

function getCss(url) {
  try {
    document.createStyleSheet(url)
  } catch(e) {
    var cssLink  = document.createElement('link');
    cssLink.rel  = 'stylesheet';
    cssLink.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(cssLink)
  }
}

function valine(path) {
  getScript('/src/av.min.js?v=3.5.0', function() {
    getScript('//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js', function() {
      new Valine({
        el: '#comment',
        appId: '6KYmYkGjyDQhJTFGfRDRl209-gzGzoHsz',
        appKey: 'jrVcAx4FX4CdEMJDuJq9YATe',
        verify: true,
        avatar: 'retro',
        pageSize: 5,
        placeholder: '输入你的评论内容...',
      })
    })
  })
}

function jqend() {
  $.ajaxSetup({ cache: true });
  setTimeout(function() {
    if ($('#comment').length) valine(location.pathname)
  }, 0)
  setTimeout(function() {
    $('div.content a').not("[href^='#']").not("[href^='/']").attr('target', '_blank')
  }, 0)
  setTimeout(function() {
    if ($('.highlight').length) getCss('/src/syntax.css?v=0.1')
  }, 0)
}
