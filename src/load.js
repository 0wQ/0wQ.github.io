document.addEventListener('error', function (e) {
  var elem = e.target;
  if (elem.tagName.toLowerCase() == 'img') {
    elem.src = '//wx1.sinaimg.cn/images/default_mw690.gif'
  }
}, 1)
document.addEventListener('touchstart', function () {}, 0)
getScript('//cdn.jsdelivr.net/npm/headroom.js@0.9.4/dist/headroom.min.js', function () {
    var elem = document.querySelector('header');
    new Headroom(elem, {
      tolerance: 55,
      offset: 170,
      classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp',
      }
    }).init()
})
getScript('//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js', function () {
  $.ajaxSetup({ cache: true });
  setTimeout(function () {
    $('.highlight').length && getCss('/src/syntax.css')
  }, 0)
  setTimeout(function () {
    $('#comment').length && getValine(location.pathname)
  }, 0)
  setTimeout(function () {
    $('.content a').not("[href^='#']").not("[href^='/']").attr('target', '_blank')
  }, 0)
})
function getCss(url) {
  try {
    document.createStyleSheet(url)
  } catch(e) {
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(cssLink)
  }
}
function getScript(a, b) {
  var c = document.createElement('script');
  c.src = a;
  var d = document.getElementsByTagName('head')[0],
   done = false;
  c.onload = c.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      done = true;
      b();
      c.onload = c.onreadystatechange = null;
      d.removeChild(c)
    }
  }
  d.appendChild(c)
}
function getValine(path) {
  getScript('//cdn.jsdelivr.net/npm/leancloud-storage/dist/av-min.js', function () {
    getScript('//cdn.jsdelivr.net/npm/valine@1.3.1/dist/Valine.min.js', function () {
      new Valine({
        el: '#comment',
        lang: 'en',
        appId: 'NwFaLNagoubAS89LoIJFm7ID-9Nh9j0Va',
        appKey: 'pALdRPcmECXURlb5NyrwceiV',
        verify: true,
        highlight: true,
        avatar: 'retro',
        avatar_cdn: '//dn-qiniu-avatar.qbox.me/avatar/',
        pageSize: 6,
        placeholder: 'Start this discussion...',
      })
    })
  })
}
