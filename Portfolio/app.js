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
document.addEventListener("touchstart", function(){}, true);
document.querySelector('.doruka').addEventListener('click', myReload);

document.getElementById('link1').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><div id=\"container1\"><div id=\"container2\"><p><br></p><h1>Budgeting App</h1><p>Description: This is an app that calculates an individual's monthly budget. You can add and remove income and expenses and see your total budget as well as how much of your income has gone towards a single expense or your total expenses. This app also uses cookies to save your budget. But don't worry, once you exit out of your browser, all the information is deleted.</p><center><object width=\"100%\" height=\"400\" data=\"../Budgety/index.html\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../Budgety/index.html\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"https://github.com/d1r1karsy/d1r1karsy.github.io/tree/master/Budgety\" target=\"_blank\">Source Code &lt;/&gt;</a><br><br><br></div></div></div>");
});

document.getElementById('link2').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><div id=\"container1\"><div id=\"container2\"><p><br></p><h1>Pig Game</h1><p>Description: This is a game where there are 2 dice and 2 players and the goal is to get to 100 (default value, this value can be changed by entering a number on to the \"Final Score\" box). In each turn, the numbers rolled by the player is added to their \"current\" box. A player can keep rolling the dice until they roll a 1 on either dice. Once they roll a 1, the lose all of their \"current\" points and it's the next player's turn. They can save their \"current\" points by clicking \"hold\". Once they chose to \"hold\", their \"current\" points are added to their total points and it's the next player's turn. </p><center><object width=\"100%\" height=\"400\" data=\"../Pig-Game/index.html\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../Pig-Game/index.html\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"https://github.com/d1r1karsy/d1r1karsy.github.io/tree/master/Pig-Game\" target=\"_blank\">Source Code &lt;/&gt;</a><br><br><br></div></div></div>");
});

document.getElementById('link3').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('link4').style.textShadow = "0px 0px 0px black";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><div id=\"container1\"><div id=\"container2\"><p><br></p><h1>Clock</h1><p>Description: This page shows the current clock in the hex form. The first two digits show the hour, the second two digits show minutes and the final two digits show the second. Whatever hex number is displayed on the screen is also the number that gives the background of the page its color. Switching to the \"rgb\" options will do the same thing in the rgb format.</p><center><object width=\"100%\" height=\"400\" data=\"../Clock/index.html\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../Clock/index.html\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"https://github.com/d1r1karsy/d1r1karsy.github.io/tree/master/Clock\" target=\"_blank\">Source Code &lt;/&gt;</a><br><br><br></div></div></div>");
});

document.getElementById('link4').addEventListener('click', function(){
  document.getElementById('link1').style.textShadow = "0px 0px 0px black";
  document.getElementById('link2').style.textShadow = "0px 0px 0px black";
  document.getElementById('link3').style.textShadow = "0px 0px 0px black";
  document.getElementById('link4').style.textShadow = "2px 2px 4px #4586ef";
  document.getElementById('div1').remove(document.getElementById('div1'));
  document.getElementById('site').insertAdjacentHTML('beforeend', "<div id=\"div1\"><div id=\"container1\"><div id=\"container2\"><p><br></p><h1>Old Portfolio</h1><p>Description: This website was Doruk\'s old website. While the links for the projects are no longer functional, the features are still available. Those features include, skills that randomly appear in the background and changing the logo and the theme color of the website. Click on the logo to change the theme. Also be sure to click on \"projects\" to see the logo change.</p><center><object width=\"100%\" height=\"400\" data=\"../OldPortfolio/index.html\" id=\"resume\"></object></center><br><a id=\"button\" href=\"../OldPortfolio/index.html\" target=\"_blank\">Open in New Page</a> <a id=\"button\" href=\"https://github.com/d1r1karsy/d1r1karsy.github.io/tree/master/OldPortfolio\" target=\"_blank\">Source Code &lt;/&gt;</a><br><br><br></div></div></div>");
});
