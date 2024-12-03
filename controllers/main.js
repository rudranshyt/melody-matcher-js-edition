function getUserInput() {
  const username = document.getElementById("getUsername").value;
  redirectFunc(username);
}
function redirectFunc(username) {
  window.location.href =
    "templates/criteria.html?username=" + encodeURI(username);
}
