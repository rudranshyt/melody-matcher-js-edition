const emailAddress = "";
const nameOfUser = new URLSearchParams(window.location.search).get("username");
const selectedCategory = "";

function getUserInput() {
  selectedCategory = document.getElementById("category").value;
  emailAddress = document.getElementById("emailId").value;
}

