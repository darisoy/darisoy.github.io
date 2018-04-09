{
  var color;
  var pics = 6;
  var num = Math.floor(Math.random() * pics) + 1;

  changeTitle(0);
  renderTime();
  intro();
  colorSelect();

  //calculates date and time and updates it every second
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

  //selects a random color and number and sets the logo and popup backgrounds
  function colorSelect() {
    var colors = ["#002b80", "#000000", "#ff0000", "#006600", "#995c00", "#990000", "#990099", "#52527a", "#ff6699"];
    color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".logo").style.backgroundColor = color;
    num = Math.floor(Math.random() * pics) + 1;
    var url = document.querySelector(".logo").style.backgroundImage;
    if (url.includes("logo")) {
      document.querySelector(".logo").style.backgroundImage = "url('Portfolio/logo/" + num + ".png')";
      document.getElementById("myPopup").style.backgroundColor = color;
    } else {
      document.querySelector(".logo").style.backgroundImage = "url('Portfolio/projects/"+ num + ".png')";
    }

  }

  //enters the links, goes between Doruk and Projects page
  function intro() {
    document.querySelector(".links").insertAdjacentHTML('beforeend', '<div id="div1"><li><span><a href="./Portfolio/DorukArisoyResume.pdf" target="_blank" id="a1">resume</a></span></li><li><span><a id="a2" href="https://www.linkedin.com/in/dorukarisoy/" target="_blank">linkedin</a></span></li><li><span><a id="a3" class="projects">projects ></a></span></li><li><span><a id="a4" href="./Portfolio/DorukArisoyNetworkingPortfolio.pdf" target="_blank">networking portfolio</a></span></li><li class="popup"><span><a id="a5">contact</a></span><span class="popuptext" id="myPopup"></span></li><li></li><li></li></div>');
    document.getElementById("myPopup").style.backgroundColor = color;
    document.querySelector(".logo").style.backgroundImage = "url('Portfolio/logo/" + num + ".png')";
    document.querySelector(".popup").addEventListener("click", function() {
        document.getElementById("myPopup").classList.toggle("show");
    });
    for (var i = 1; i < 6; i++) {
      hover("a" + i);
    }
    document.querySelector(".projects").addEventListener("click", function() {
      var element = document.getElementById("div1");
      element.remove(element);
      document.querySelector(".links").insertAdjacentHTML('beforeend','<div id="div1"><li><span><a id="a6" href="./Budgety/index.html">budgeting app</a></span></li><li><span><a id="a7" href="./Pig-Game/index.html">pig-game</a></span></li><li><span><a id="a8">more coming soon...</a></span></li><li><span><a id = "a9" class="back">< back</a></span></li></div>');
      document.querySelector(".logo").style.backgroundImage = "url('Portfolio/projects/"+ num + ".png')";
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

  //changes background color of the link when hovered over with a mouse
  function hover(id) {
    var url = document.querySelector(".logo").style.backgroundImage;
    document.getElementById(id).addEventListener("mouseover", function(){
      document.getElementById(id).style.backgroundColor = color;
      // document.addEventListener('keypress', function(event) {
      //   if (event.keyCode === 13 || event.which === 13) {
      //     document.getElementById(id).style.backgroundColor = color;
      //   }
      // });
    });
    document.getElementById(id).addEventListener("mouseout", function(){
      document.getElementById(id).style.backgroundColor = "transparent";
      // document.addEventListener('keypress', function(event) {
      //   if (event.keyCode === 13 || event.which === 13) {
      //     document.getElementById(id).style.backgroundColor = "transparent";
      //   }
      // });
    });
  }

  //changes the color when enter is pressed
  document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
          colorSelect();
      }
  });

  //alternates the page title between Doruk and press enter to change color
  function changeTitle(i) {
    var html = ["Doruk", "Press ENTER", "To Change Color"];
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
}
