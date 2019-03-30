{
  var color;
  var pics = 6;
  var num = Math.floor(Math.random() * pics) + 1;
  var s = 1;
  var first = decodeURIComponent(document.cookie);
  var skillWork = false;

  changeTitle(0);
  renderTime();
  intro();
  colorSelect();

  //check if the loader was already shown
  function checkLoader() {
    document.querySelector('.loader').style.display= 'block';
    if (first.includes('false')) {
      document.querySelector('.loader').style.display= 'none';
      skills();
      skillWork = true;
      outOfFocus();
      document.querySelector('.animate-top').style.display= 'block';
      document.querySelector('.animate-bottom').style.display= 'block';
      document.getElementById('hoop').style.display= 'block';
    } else {
      setTimeout(start, 3000);
    }
    setTimeout(function(){ document.querySelector('.clickme').style.display= 'block';}, 7000);
    setTimeout(function(){ document.querySelector('.highlight').style.display= 'block';}, 8000);
  }

  //makes the logo and links appear with annimation
  function start() {
    document.cookie = 'false';
    document.querySelector('.animate-top').style.display= 'block';
    document.querySelector('.animate-bottom').style.display= 'block';
    document.getElementById('hoop').style.display= 'block';
    setTimeout(function(){ document.querySelector('.loader').style.display= 'none'; }, 1000);
    setTimeout(skills, 2000);
    skillWork = true;
    setTimeout(outOfFocus, 2000);
  }

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
    document.querySelector(".date").textContent = "" + mon + "/" + d + "/" + y + " " + h + ":" + min + ":" + s  + diem;
    setTimeout('renderTime()', 1000);
  }

  //selects a random color and number and sets the logo and popup backgrounds
  function colorSelect() {
    var colors = ["#002b80", "#000000", "#ff0000", "#006600", "#995c00", "#990000", "#990099", "#52527a", "#ff6699"];
    color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".logo").style.backgroundColor = color;
    document.querySelector(".loader").style.backgroundColor = color;
    document.getElementById("hoop").style.border = '3px solid ' + color;
    num = Math.floor(Math.random() * pics) + 1;
    var url = document.querySelector(".logo").style.backgroundImage;
    if (url.includes("logo")) {
      document.querySelector(".logo").style.backgroundImage = "url('logo/" + num + ".png')";
      document.getElementById("myPopup").style.backgroundColor = color;
    } else {
      document.querySelector(".logo").style.backgroundImage = "url('projects/"+ num + ".png')";
    }
  }

  //enters the links, goes between Doruk and Projects page
  function intro() {
    document.querySelector(".links").insertAdjacentHTML('beforeend', '<div id="div1"><li><span><a target="_blank" id="a1">resume</a></span></li><li><span><a id="a2" target="_blank">linkedin</a></span></li><li><span><a id="a3" class="projects">projects ></a></span></li><li><span><a id="a4" target="_blank">networking portfolio</a></span></li><li class="popup"><span><a id="a5">contact</a></span><span class="popuptext" id="myPopup"></span></li></div>');
    document.getElementById("myPopup").style.backgroundColor = color;
    document.querySelector(".logo").style.backgroundImage = "url('logo/" + num + ".png')";
    document.querySelector(".popup").addEventListener("click", function() {
        document.getElementById("myPopup").classList.toggle("show");
    });
    for (var i = 1; i < 6; i++) {
      hover("a" + i);
    }
    document.querySelector(".projects").addEventListener("click", function() {
      var element = document.getElementById("div1");
      element.remove(element);
      document.querySelector(".links").insertAdjacentHTML('beforeend','<div id="div1"><li><span><a id="a6">budgeting app</a></span></li><li><span><a id="a7">pig-game</a></span></li><li><span><a id="a8">clock</a></span></li><li><span><a id="a9" target="_blank">this portfolio</a></span></li><li><span><a id="a10" class="back">< back</a></span></li></div>');
      document.querySelector(".logo").style.backgroundImage = "url('projects/"+ num + ".png')";
      for (var i = 6; i < 11; i++) {
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
    });
    document.getElementById(id).addEventListener("mouseout", function(){
      document.getElementById(id).style.backgroundColor = "transparent";
    });
  }

  //changes the color when logo is clicked
  document.querySelector('.logo').addEventListener('click', function() {
    colorSelect();
    document.querySelector('.highlight').style.display= 'none';
    setTimeout(function(){ document.querySelector('.clickme').style.display= 'none'; }, 500);
  });

  // alternates the page title between Doruk, Arisoy and portfolio
  function changeTitle(i) {
    var html = ["Doruk", "Arisoy", "Portfolio"];
    var sec;
    if (i == 0) {
      sec = 10000;
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

  //displays skills on the background, selects the random skill and location
  function skills() {
    var word = ['java programming', 'data structures', 'algorithms', 'javascript', 'hmtl 5', 'css', 'cisco-certified engineer', 'virtualization', 'linux', 'windows', 'mac os', 'data center operations', 'labview programming'];
    var x = (Math.random() * 80) + 10;
    var y = (Math.random() * 80) + 10;
    document.querySelector(".skills").insertAdjacentHTML('beforeend', '<h2 class=\'s' + s + '\'>' + word[Math.floor(Math.random() * word.length)] + '</h2>');
    if (skillWork) {
      animate(x, y, '.s' + s);
    }
    s++;
    if (s > 10) {
      s = 1;
    }
    setTimeout('skills()', ((Math.random() * 5) + 1) * 500);
  }

  //animates a word in the background, moves it up and makes it disappear
  function animate(x, y, s) {
    var y1 = y;
    var o = 0.2;
    var id2;
    var elem = document.querySelector(s);
    elem.style.fontSize = (Math.random() * 16) + 10 + 'px';
    var id1 = setInterval(frame1, 1);
    function frame1() {
      if (o > 0.6) {
        clearInterval(id1);
        id2 = setInterval(frame2, 5)
      } else {
        o += 0.01
        elem.style.opacity = o;
      }
    }
    function frame2() {
        if (y1 < y - 8) {
            clearInterval(id2);
        } else {
          if (y1 < y - 3) {
            o -= 0.002;
            if (o < 0) {
              elem.remove(elem);
            }
          }
          y1 -= 0.01;
          elem.style.left = x + '%';
          elem.style.top = y1 + '%';
          elem.style.opacity = o;
        }
    }
  }

  //hoop around the mouse
  document.addEventListener('mousemove', function() {
    var x = event.clientX;
    var y = event.clientY;
    var elem = document.getElementById('hoop');
    elem.style.left = x - 15 + 'px';
    elem.style.top = y + 43 + 'px';
  });

  //dims the hoop when mousedown
  document.addEventListener('mousedown', function() {
    var elem = document.getElementById('hoop');
    elem.style.opacity = '0.3';
    document.addEventListener('mouseup', function() {
      elem.style.opacity = '1';
    });
  });

  //stops the skills and removes the hoop around the mouse when the mouse leaves the page
  function  outOfFocus() {
    document.addEventListener('mouseout', function() {
      document.getElementById('hoop').style.display= 'none';
      skillWork = false;
    });
    document.addEventListener('mouseover', function() {
      document.getElementById('hoop').style.display= 'block';
      skillWork = true;
    });
  }
}
