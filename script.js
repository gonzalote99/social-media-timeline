(function () {
  'use strict';
  var items = document.querySelectorAll('.timeline li');

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.bottom - 100 > 0 && rect.top + 100 < (window.innerHeight || document.documentElement.clientHeight));
  }


  function callbackFunction() {
    for (var i = 0; i < items.length; i++) {
      if(isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      }
    }
  }

  window.addEventListener('load', callbackFunction);
  window.addEventListener('resize', callbackFunction);
  window.addEventListener('scroll', callbackFunction);
})(); 