function valForm() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let age = document.getElementById("age").value;

  if (firstName === "" || lastName === "" || age === "") {
    message("Hãy điền đầy đủ.");
    return false;
  }

  if (isNaN(age) || age < 0) {
    message("Hãy điền tuổi hợp lệ.");
    return false;
  }

  return true;
}
function message(m) {
  document.getElementById("wrapper").innerHTML = m;
}
