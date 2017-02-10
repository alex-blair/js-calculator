
$(document).ready(function() {
  var entry = $("#entry")
  var history = $("#history")
  $(".btn").click(function(){
    //global variables
    var btnVal = $(this).val()

    if ($(this).hasClass("calculate")) {
      result = eval($("#history").text());
      entry.html(result);
      history.append("= " + result);
    }
    else if ($(this).hasClass("clearall")) {
      clearall();
    }
    else if ($(this).hasClass("clearlast")) {
      if (history.text().includes("=")) {
        clearall()
      } else {
        clearlast()
      }
    }
    else if ($(this).hasClass("operator")){
      lastvalueHistory(operator)
      switch(operator) {
        case "+":
        case "-":
        case "*":
        case "÷":
        alert("Please don't put two operators in a row");
        break;
      }
    }
    else if (/^[0-9.]/.test(entry.text()) === false) {
      entry.html(btnVal);
      history.append(btnVal);
    }
    // else if (isNaN(entry.text()) || entry.text() !== ".") {
    //   entry.html(btnVal);
    //   history.append(btnVal);
    // }
    else if ($(this).hasClass("num")) {
      if (history.text() === "0") {
        entry.html(btnVal);
        history.html(btnVal);
      } else {
        entry.append(btnVal);
        history.append(btnVal);
      }
    }
    else {
      entry.html(btnVal);
      history.append(btnVal);
    }
  })
  function clearall() {
    entry.html("0");
    history.html("0");
  }
  function clearlast() {
    var arr = history.text().split(/(\D)/g);
    arr.pop();
    var joinArr = arr.join('');
    entry.html('0');
    history.html(joinArr);
  }
});
