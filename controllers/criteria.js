import emailjsConfig from "./config.js";

(function () {
  emailjs.init(emailjsConfig.userID);
})();

function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendEmail() {
  const emailAddress = document.getElementById("emailId").value.trim();
  const selectedCategory = document.getElementById("category").value;
  const nameOfUser =
    new URLSearchParams(window.location.search).get("username") || "User";
  const songsPlaylist = {
    a: "https://open.spotify.com/playlist/2YsVFAOIyHgaEaIqpoIUFl?si=7241d1fd512143c9",
    b: "https://open.spotify.com/playlist/5qa7YCiXSmiaZp7vqesd7o?si=8ec033444f4a4809",
    c: "https://open.spotify.com/playlist/1KZabJbdVkIxXe2kP7O75r?si=0bdc34c23b4e4bc7",
    d: "https://open.spotify.com/playlist/2W6AmwXjsSo9YxSmKXSs72?si=48d3e455c3c24950",
    e: "https://open.spotify.com/playlist/4NAMMIsULmfzbFXkvCGRZw?si=4ffdca331da440cf",
  };
  let playlistLink;

  if (selectedCategory) {
    playlistLink = songsPlaylist[selectedCategory];
  }

  if (!emailAddress) {
    alert("Please enter an email address.");
    return;
  }

  if (!validateEmail(emailAddress)) {
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
      name: nameOfUser,
      link: playlistLink,
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
