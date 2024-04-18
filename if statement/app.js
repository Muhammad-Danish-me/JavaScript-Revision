var skills = prompt("Enter your skills");
if (skills === "html") {
  var exp = +prompt("enter Your Experience");
  if (exp > 2) {
    var city = prompt("Enter your city");
  } else alert("Not Hired");
  if (city === "karachi") {
    alert("hired");
  } else alert("Not Hired");
} else alert("not hired");


