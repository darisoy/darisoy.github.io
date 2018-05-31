
function siteSize(){
  var elem = document.getElementById('site');
  if (window.innerWidth > 810) {
    elem.style.width = "750px";
    elem.style.left = ((window.innerWidth / 2) - (750 / 2) - 60) + 'px';
  } else {
    elem.style.left = '0px';
    elem.style.width = (window.innerWidth - 60) + "px";

  }
}

function intro(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><h1><center>Welcome to Doruk Arisoy's Portfolio</center></h1><div><center>Go to the sidebar to view projects</center></div><br><div id=\"container1\"><div id=\"container2\"><p><br></p><h2>Resume</h2><center><object width=\"100%\" height=\"400\" data=\"../Portfolio/DorukArisoyResume.pdf\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../Portfolio/DorukArisoyResume.pdf\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"../Portfolio/DorukArisoyResume.pdf\" download>Download</a><br><br><br></div></div><br><br><br><div id=\"container1\"><div id=\"container2\"><p><br></p><h2>LinkedIn</h2><center><script src=\"//platform.linkedin.com/in.js\" type=\"text/javascript\"></script><script type=\"IN/MemberProfile\" data-id=\"https://www.linkedin.com/in/dorukarisoy\" data-format=\"inline\" data-related=\"false\"></script></center><br><br><br></div></div><br><br><br><div id=\"container1\"><div id=\"container2\"><p><br></p><h2>Networking Portfolio</h2><center><object width=\"100%\" height=\"400\" data=\"../Portfolio/DorukArisoyNetworkingPortfolio.pdf\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../Portfolio/DorukArisoyNetworkingPortfolio.pdf\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"../Portfolio/DorukArisoyNetworkingPortfolio.pdf\" download>Download</a><br><br><br></div></div><br><br><br></div>");
}

function myReload(){
  location.reload();
}

intro();
siteSize();

window.addEventListener("resize", siteSize);
document.querySelector('.doruka').addEventListener('click', myReload);

document.getElementById('link1').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"></div>");
});

document.getElementById('link2').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"></div>");
});

document.getElementById('link3').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><div id=\"container1\"><div id=\"container2\"><p><br></p><h1>Clock</h1><p>Description: ..... </p><center><object width=\"100%\" height=\"400\" data=\"../Clock/index.html\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../Clock/index.html\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"http://github.com\" target=\"_blank\">Source Code &lt;/&gt;</a><br><br><br></div></div></div>");
});

document.getElementById('link4').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><div id=\"container1\"><div id=\"container2\"><p><br></p><h1>Old Portfolio</h1><p>Description: ..... </p><center><object width=\"100%\" height=\"400\" data=\"../index.html\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../index.html\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"http://github.com\" target=\"_blank\">Source Code &lt;/&gt;</a><br><br><br></div></div></div>");
});
