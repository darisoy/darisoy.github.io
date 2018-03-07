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

  document.querySelector(".budget__title--month").textContent = "" + mon + "/" + d + "/" + y + " " + h + ":" + min + ":" + s + " " + diem;
  setTimeout('renderTime()', 1000);
}
renderTime();
alert("This online portfolio is under production and is not yet done.");

// var txtFile = "/logs.txt";
// var file = new File(txtFile);
// var str = "Hope this will work";
//
// file.open("w");
// file.writeln("Test test test: this is the first line of text");
// file.writeln("Second line " + str);
// file.writeln("str");
// file.close();
