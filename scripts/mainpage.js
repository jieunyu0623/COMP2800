function menuBar() {
    var x = document.getElementById("navBar");
    if (x.className === "menubar") {
      x.className += " responsive";
    } else {
      x.className = "menubar";
    }
  }