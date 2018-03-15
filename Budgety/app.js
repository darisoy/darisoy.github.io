{
  var income = 0;
  var expenses = 0;
  var overID = 0;
  var overall = income - expenses;
  var valEx = [];
  var valAll = [];

  // entry object
  function Entry (description, sign, value, id) {
    this.description = description;
    this.sign = sign;
    this.value = value;
    this.id = id;
  }

  //intro
  var now = new Date();
  var year = now.getFullYear();
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  document.querySelector(".budget__title--month").textContent = month[now.getMonth()] + " " + year;
  document.querySelector(".budget__value").textContent = "0.00";
  document.querySelector(".budget__income--value").textContent = "+ 0.00";
  document.querySelector(".budget__expenses--value").textContent = "- 0.00";
  document.querySelector(".budget__expenses--percentage").textContent = "---";

  //changes the UI to red when user selects a negative entry for expenses
  document.querySelector(".add__type").addEventListener('change', function() {
    document.querySelector(".add__type").classList.toggle("red-focus");
    document.querySelector(".add__description").classList.toggle("red-focus");
    document.querySelector(".add__value").classList.toggle("red-focus");
    document.querySelector(".add__btn").classList.toggle("red");
  });

  //when pressed enter
  document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
          typeEntry();
      }
  });

  //when clicked on the check mark
  document.querySelector(".add__btn").addEventListener("click", typeEntry);

  // lets user enter a new item to the budget through the UI
  function typeEntry() {
    var des = document.querySelector(".add__description").value;
    var val = document.querySelector(".add__value").value;
    if (des != "" && val != "") {
      overID++;
      addValue(new Entry(des, document.querySelector(".add__type").value, val, overID));
      document.querySelector(".add__description").value = "";
      document.querySelector(".add__value").value = "";
    }
  }

  //adds an entry object to the app
  function addValue(entr) {
    //document.cookie = "username=" + entr.description + ";expires=Thu, 18 Dec 2019 12:00:00 UTC;path=/";
    document.cookie(entr1.overID + "=" + "[" + entr.description + ":" + entr.sign + ":" + entr.value + "];");
    if (entr.sign == "inc") {
      income += Math.round(parseFloat(entr.value) * 100) / 100;
      calcInc();
      updateExpPer();
    } else {
      expenses += Math.round(parseFloat(entr.value) * 100) / 100;
      calcExp();
      valEx.push(entr.value);
    }
    valAll.push(entr);
    calcPercentage();
    calcAvBudget();
    displayEntry(entr);
  }

  //displays new entrees
  function displayEntry(entr) {
    var html, element, value
    if (entr.sign === 'inc') {
        element = ".income__list";
        value = "+ " + entr.value;
        value += zeros(entr.value);
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    } else if (entr.sign === 'exp') {
        element = ".expenses__list";
        value = "- " + entr.value;
        value += zeros(entr.value);
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

    }
    html = html.replace("%id%", entr.id);
    html = html.replace("%description%", entr.description);
    html = html.replace("%value%", value);
    document.querySelector(element).insertAdjacentHTML('beforeend', html);
    updateExpPer();
  }

  //deletes entries
  document.querySelector(".container").addEventListener('click', function() {
    var item = event.target.parentNode.parentNode.parentNode.parentNode.id
    var splitID, type, ID;
    if (item) {
        splitID = item.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);
        var el = document.getElementById(item);
        el.parentNode.removeChild(el);
    }
    var value;
    for (var i = 0; i < valAll.length; i++) {
      if (valAll[i].id == ID) {
        value = valAll[i].value;
        valAll.splice(i, 1);
      }
    }
    if (type == "inc") {
      income -= value;
      calcInc();
    } else {
      expenses -= value;
      calcExp();
    }
    updateExpPer();
    calcPercentage();
    calcAvBudget();
  });

  //calculates  and updates available overall budget
  function calcAvBudget() {
    overall = Math.round((income - expenses) * 100) / 100;
    var restot = "";
    if (overall > 0) {
      restot += "+ " + overall;
    } else if (overall < 0) {
      restot += "- " + (overall * -1);
    } else {
      restot = 0;
    }
    restot += zeros(overall);
    document.querySelector(".budget__value").textContent = restot;
  }

  //calculates and updates income
  function calcInc() {
    var resinc = "+ " + Math.round(income * 100) / 100;
    resinc += zeros(income);
    document.querySelector(".budget__income--value").textContent = resinc;
  }

  //calculates and updates expanses
  function calcExp() {
    var resex = "- " + Math.round(expenses * 100) / 100;
    resex += zeros(expenses);
    document.querySelector(".budget__expenses--value").textContent = resex;
  }

  //calculates total percentage of expenses
  function calcPercentage() {
    if (income == 0 || expenses == 0) {
      document.querySelector(".budget__expenses--percentage").textContent = "---";
    } else {
      document.querySelector(".budget__expenses--percentage").textContent = Math.round((expenses / income) * 100) + "%";
    }
  }

  //updates the percentages of expenses
  function  updateExpPer() {
    var fields = document.querySelectorAll(".item__percentage");
    for (var i = 0; i < fields.length; i++) {
      var per = Math.round((valEx[i] / income) * 100);
      if (income != 0 && per > 0) {
        fields[i].textContent = per + "%";
      } else {
        fields[i].textContent = "---";
      }
    }
  }

  //puts necessary decimal zeroes at the end of a value
  function zeros(val) {
    if (val * 100 % 100 == 0) {
      return ".00";
    } else {
      return "";
    }
  }

  document.querySelector(".popup").addEventListener("mouseenter", function() {
      var popup = document.getElementById("myPopup");
      popup.classList.add("show1");
      document.getElementById("menub").style.animationPlayState = "paused";
  });

  document.querySelector(".popuptext").addEventListener("mouseenter", function() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("unshow");
    popup.classList.remove("show1");
    popup.classList.add("show2");
  });

  document.querySelector(".popup").addEventListener("mouseleave", function() {
      var popup = document.getElementById("myPopup");
      popup.classList.remove("show1");
      popup.classList.remove("show2");
      popup.classList.add("unshow");
      setTimeout(function(){popup.classList.remove("unshow");}, 990);
      document.getElementById("menub").style.animationPlayState = "running";
  });


//document.cookie = "username=Johnny TEST;";

  // function getCookie(cname) {
  //     var name = cname + "=";
  //     var decodedCookie = decodeURIComponent(document.cookie);
  //     var ca = decodedCookie.split(';');
  //     for(var i = 0; i < ca.length; i++) {
  //         var c = ca[i];
  //         while (c.charAt(0) == ' ') {
  //             c = c.substring(1);
  //         }
  //         if (c.indexOf(name) == 0) {
  //             return c.substring(name.length, c.length);
  //         }
  //     }
  //     return "";
  // }
  //
  // function checkCookie() {
  //     var user=getCookie("username");
  //     if (user != "") {
  //         alert("Welcome again " + user);
  //         console.log(user);
  //     } else {
  //       document.cookie = "username=John Doe; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
  //       console.log("cookie set");
  //     }
  // }
}
