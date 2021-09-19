function myFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " dropdown";
  } else {
    x.className = "topnav";
  }
}