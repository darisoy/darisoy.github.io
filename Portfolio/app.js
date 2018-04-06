{
  function renderTime() {
    var now = new Date();
    var diem = "am";
    var h = now.getHours();
    var min = now.getMinutes();
    var s = now.getSeconds();
    var y = now.getFullYear();
    var mon = now.getMonth() + 1;
    var d = now.getDate();

    if (h == 0) {
      h = "00";
    } else if (h > 12) {
      h = h - 12;
      diem = "pm";
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (s < 10) {
      s = "0" + s;
    }
    if (mon < 10) {
      mon = "0" + mon;
    }
    if (d < 10) {
      d = "0" + d;
    }

    document.querySelector(".budget__title--month").textContent = "" + mon + "/" + d + "/" + y + " " + h + ":" + min + ":" + s  + diem;
    setTimeout('renderTime()', 1000);
  }
  renderTime();
  intro();

  function intro() {
    document.querySelector(".links").insertAdjacentHTML('beforeend', '<div id="div1"><li><span><a href="./Portfolio/DorukArisoyResume.pdf" target="_blank">resume</a></span></li><li><span><a href="https://www.linkedin.com/in/dorukarisoy/" target="_blank">linkedin</a></span></li><li><span><a class="projects">projects ></a></span></li><li><span><a href="./Portfolio/DorukArisoyNetworkingPortfolio.pdf" target="_blank">networking portfolio</a></span></li><li class="popup"><span><a>contact</a></span><span class="popuptext" id="myPopup"></span></li><li></li><li></li></div>');
    document.querySelector(".logo").style.backgroundImage = "url('Portfolio/logo.jpg')";
    document.querySelector(".popup").addEventListener("click", function() {
        console.log("works");
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    });
    document.querySelector(".projects").addEventListener("click", function() {
      var element = document.getElementById("div1");
      element.remove(element);
      document.querySelector(".links").insertAdjacentHTML('beforeend','<div id="div1"><li><span><a href="./Budgety/index.html">budgeting app</a></span></li><li><span><a href="./Pig-Game/index.html">pig-game</a></span></li><li><span><a>coming soon...</a></span></li><li><span><a class="back">< back</a></span></li></div>');
      document.querySelector(".logo").style.backgroundImage = "url('Portfolio/projects.jpg')";
      document.querySelector(".back").addEventListener("click", function() {
        var element = document.getElementById("div1");
        element.remove(element);
        intro();
      });

    });
  }
}
