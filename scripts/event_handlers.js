(function attachCollapseTriggers() {
  var colTriggers = document.getElementsByClassName('collapse-trigger');
  for (var colTrig of colTriggers) {
    colTrig.addEventListener('click',  function() {
      this.classList.toggle('active');
      const ariaExpanded = this.getAttribute('aria-expanded');
      this.setAttribute('aria-expanded', ariaExpanded == 'true' ? 'false' : 'true');
    });
  }
})();

(function attachViewMapTriggers() {
  var mapTriggers = document.getElementsByClassName('map-trigger');
  for (var mapTrig of mapTriggers) {
    mapTrig.addEventListener('click', function(e) {
      var mapTriggers = document.getElementsByClassName('map-trigger');
      for (var mapTrig of mapTriggers) {
        if (mapTrig.classList.contains('active')) mapTrig.classList.toggle('active');
      }
      this.classList.toggle('active');
      const main = document.getElementById('main');
      main.innerHTML = `<object class="map" data="${e.target.value}.html"></object>`;
    });
  }
})();