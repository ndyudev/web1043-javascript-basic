function valForm() {
  var p = event.target.children;
  if (p.firstName.value == "") {
    message("Need a first name!");
    return false;
  }

  if (p.lastName.value == "") {
    message("Need a last name!");
    return false;
  }

  if (p.age.value < 0) {
    message("chưa đẻ!");
    return false;
  }
}

function message(mess) {
  document.getElementById("wrapper").innerHTML = mess;
}
