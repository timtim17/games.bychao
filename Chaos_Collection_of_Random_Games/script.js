'use strict';

(function() {
  const CLASS_REDUCED_MOTION = 'reduced-motion';
  const LS_REDUCED_MOTION = 'reducedMotion';

  const qs = document.querySelector.bind(document);

  window.addEventListener('load', init);

  /**
   * Sets up functionality for the reduced motion checkbox. Also gets if the motion should be reduced
   * from local storage and updates the page accordingly.
   */
  function init() {
    const checkbox = qs('#reduced-motion-toggle input');
    checkbox.addEventListener('change', function() {
      setReducedMotion(this.checked);
      localStorage.setItem(LS_REDUCED_MOTION, this.checked);
    });
    if (localStorage.getItem(LS_REDUCED_MOTION) === 'true') {
      checkbox.checked = true;
      setReducedMotion(true);
    } else {
      localStorage.setItem(LS_REDUCED_MOTION, false);
      checkbox.checkbox = false;
      setReducedMotion(false);
    }
  }

  /**
   * Adds or removes animation from the page.
   * @param {boolean} reducedMotion if the motion should be reduced on the page
   */
  function setReducedMotion(reducedMotion) {
    if (reducedMotion) {
      document.body.classList.add(CLASS_REDUCED_MOTION);
    } else {
      document.body.classList.remove(CLASS_REDUCED_MOTION);
    }
  }
})();
