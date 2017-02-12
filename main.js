
$(document).ready(function() {
  var entry = $("#entry")
  var record = $("#record")
  $(".btn").click(function(){
    var btnVal = $(this).val()

    if ($(this).hasClass("calculate")) {
      result = eval(record.text());
      entry.html(result);
      record.append("=" + result);
    }
    else if (record.text().includes("=")) {
      if ($(this).hasClass("clearlast")) {
        clearAll()
      }
      else if ($(this).hasClass("clearall")) {
        clearAll()
      }
      else {
        clearAll()
        entry.html(btnVal);
        record.html(btnVal);
      }
    }
    else if ($(this).hasClass("clearall")) {
      clearAll();
    }
    else if ($(this).hasClass("clearlast")) {
      clearLast()
    }
    else if (!/^[0-9.]/.test(entry.text())) {
      entry.html(btnVal);
      record.append(btnVal);
    }
    else if ($(this).hasClass("num")) {
      if (record.text() === "0") {
        entry.html(btnVal);
        record.html(btnVal);
      } else {
        entry.append(btnVal);
        record.append(btnVal);
      }
    }
    else {
      entry.html(btnVal);
      record.append(btnVal);
    }
  })
  function clearAll() {
    entry.html("0");
    record.html("0");
  }
  function clearLast() {
      var arr = record.text().split(/(\D)/g);
      arr.pop();
      var joinArr = arr.join('');
      entry.html('0');
      record.html(joinArr);
    // }
  }
});
