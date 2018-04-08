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

  function colorSelect() {
    var colors = ["#002b80", "#000000", "#ff0000", "#006600", "#995c00", "#990000", "#990099", "#52527a", "#ff6699"];
    color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".logo").style.backgroundColor = color;
  }

  function intro() {
    document.querySelector(".links").insertAdjacentHTML('beforeend', '<div id="div1"><li><span><a href="./Portfolio/DorukArisoyResume.pdf" target="_blank" id="a1">resume</a></span></li><li><span><a id="a2" href="https://www.linkedin.com/in/dorukarisoy/" target="_blank">linkedin</a></span></li><li><span><a id="a3" class="projects">projects ></a></span></li><li><span><a id="a4" href="./Portfolio/DorukArisoyNetworkingPortfolio.pdf" target="_blank">networking portfolio</a></span></li><li class="popup"><span><a id="a5">contact</a></span><span class="popuptext" id="myPopup"></span></li><li></li><li></li></div>');
    document.querySelector(".logo").style.backgroundImage = "url('Portfolio/logo.png')";
    document.querySelector(".popup").addEventListener("click", function() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        popup.style.backgroundColor = color;
    });
    for (var i = 1; i < 6; i++) {
      hover("a" + i);
    }
    document.querySelector(".projects").addEventListener("click", function() {
      var element = document.getElementById("div1");
      element.remove(element);
      document.querySelector(".links").insertAdjacentHTML('beforeend','<div id="div1"><li><span><a id="a6" href="./Budgety/index.html">budgeting app</a></span></li><li><span><a id="a7" href="./Pig-Game/index.html">pig-game</a></span></li><li><span><a id="a8">more coming soon...</a></span></li><li><span><a id = "a9" class="back">< back</a></span></li></div>');
      document.querySelector(".logo").style.backgroundImage = "url('Portfolio/projects.png')";
      for (var i = 6; i < 10; i++) {
        hover("a" + i);
      }
      document.querySelector(".back").addEventListener("click", function() {
        var element = document.getElementById("div1");
        element.remove(element);
        intro();
      });

    });
  }

  function hover(id) {
    document.getElementById(id).addEventListener("mouseenter", function(){
      this.parentNode.style.backgroundColor = color;
    });
    document.getElementById(id).addEventListener("mouseleave", function(){
      this.parentNode.style.backgroundColor = "transparent";
    });
  }

  document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
          colorSelect();
      }
  });

  function changeTitle(i) {
    var html = ["Doruk", "press enter", "to change color"];
    var sec;
    if (i == 0) {
      sec = 5000;
    } else {
      sec = 1000;
    }
    document.getElementById('title').innerHTML = html[i];
    i++;
    if (i == 3) {
      i = 0;
    }
    setTimeout('changeTitle(' + i + ')', sec);

  }

  changeTitle(0);
  renderTime();
  intro();
  var color;
  colorSelect();

}
