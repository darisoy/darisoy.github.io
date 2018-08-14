{
  var database = new XMLHttpRequest();
  database.open("GET","questions.txt");
  document.getElementById('question').innerHTML = "Question: " + database.send();
}
