(function() {
  "use strict";
  window.addEventListener("load", initialize);
  window.addEventListener("scroll", handleScroll);

  function initialize() {

  }

  function handleScroll() {
    let topDistance = window.scrollY;
    let layers = qsa(".layer");
    for(let i = 0; i < layers.length; i++) {
      let scroll = layers[i].getAttribute("data-scroll");
      let movement = -(topDistance * scroll);
      let styleTranslate = "translate3d(0, " + movement + "px, 0)";
      layers[i].style.transform = styleTranslate;
    }
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }

  function $(id) {
    return document.getElementById(id);
  }

})();
