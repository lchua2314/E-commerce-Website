// Login Interaction
const sendBtn = document.querySelector("#login-btn");
const usernameIn = document.querySelector("#userid");
const usernameOut = document.querySelector("#username-display");
const passwordIn = document.querySelector("#pswrd");
const formJS = document.querySelector("form");

sendBtn.addEventListener("click", sendMsg);
formJS.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("form submitted!"); // Does not work
});

// Login info usage
// Code is insecure, but it is here just to test the login.
function check(form) {
  if (form.userid.value == "Kangaroo" && form.pswrd.value == "Rat") {
    window.open(
      "https://lchua2314.github.io/Kangaroo-Rat-HTML-CSS-Project/Kangaroo%20Rat%20Folder/Kangaroo%20Rat.html"
    );
    alert("Thanks for looking at the code! :)");
  }
}

function sendMsg() {
  let username = '<i class="fas fa-user"></i> ' + usernameIn.value;
  let password = passwordIn.value;
  if (usernameIn.value === "") {
    usernameOut.innerHTML = "Please enter a username.";
  } else if (password.length < 8) {
    usernameOut.innerHTML =
      "Please enter a password that is at least 8 character long.";
  } else {
    usernameOut.innerHTML = username;
    usernameIn.value = "";
    passwordIn.value = "";
  }
}

// Slider
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 0;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });

  if (counter === 4) {
    counter = -1;
  }

  counter++;

  container.style.backgroundImage = "url('css/img/bcg-" + counter + ".jpg";
}

function prevSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });

  if (counter === 0) {
    counter = 5;
  }

  counter--;

  container.style.backgroundImage = "url('css/img/bcg-" + counter + ".jpg";
}

// Navigation Bar

const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector(".navbar__btn");
const hyperLink = document.querySelector(".navbar-content");
const navbarOverlay = document.querySelector(".navbar-overlay");

navbarBtn.addEventListener("click", function () {
  if (navbar.classList.contains("showNavbar")) {
    navbar.classList.remove("showNavbar");
    navbarOverlay.classList.remove("transparentBcg");
    navbarBtn.classList.remove("change");
  } else {
    navbar.classList.add("showNavbar");
    navbarOverlay.classList.add("transparentBcg");
    navbarBtn.classList.add("change");
  }
});

hyperLink.addEventListener("click", function () {
  navbar.classList.remove("showNavbar");
  navbarOverlay.classList.remove("transparentBcg");
  navbarBtn.classList.remove("change");
});
