function myFunction1() {
  alert("Iqbal moutache");
}

function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
