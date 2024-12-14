import emailjsConfig from "./config.js";

(function () {
  emailjs.init(emailjsConfig.userID);
})();
function sendEmail() {
  const emailAddress = document.getElementById("emailId").value;
  const selectedCategory = document.getElementById("category").value;
  const nameOfUser =
    new URLSearchParams(window.location.search).get("username") || "User";

  if (!emailAddress) {
    alert("Please enter a valid email address.");
    return;
  }
  if (!selectedCategory) {
    alert("Please select a category.");
    return;
  }
  emailjs
    .send(emailjsConfig.serviceID, emailjsConfig.templateID, {
      to_email: emailAddress,
      to_name: nameOfUser,
      category: selectedCategory,
      message: `Hello ${nameOfUser},\n\nYou selected the category: ${selectedCategory}.\n\nThis is a test email.`,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response);
        alert("Email sent successfully!");
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Email sending failed!");
      }
    );
}
document.getElementById("sendButton").addEventListener("click", sendEmail);
