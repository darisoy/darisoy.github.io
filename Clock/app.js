{
  var slider = true;
  renderTime();
  //calculates date and time and updates it every second
  function renderTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    if (h == 0) {
      h = "00";
    } else if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    var hex = "#" + h + m + s;
    var rgb = "rgb(" + h + "," + m + "," + s + ")";
    var res;
    if (slider) {
      res = hex;
    } else {
      res = rgb;
    }
    document.querySelector(".clock").textContent = res;
    document.body.style.backgroundColor = res;
    setTimeout('renderTime()', 500);
  }

  document.querySelector('.slider').addEventListener('click', function() {
    slider = !slider;
  });
}
