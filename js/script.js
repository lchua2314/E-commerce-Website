//Login Interaction
const sendBtn = document.querySelector("#loginBtn");
const usernameIn = document.querySelector("#userid");
const usernameOut = document.querySelector("#usernameDisplay");
const passwordInfo = document.querySelector("#pswrd");

const formJS = document.querySelector("form");

sendBtn.addEventListener("click", sendMsg);
formJS.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("form submitted!"); // Does not work
});

//Login info usage
//Code is insecure, but it is here just to test the login.
function check(form) {
  if (form.userid.value == "dew" && form.pswrd.value == "123") {
    window.open("https://www.youtube.com/watch?v=mJa_3IiKxFk");
  } else {
    alert("The username and password you entered don't match.");
  }
}

function sendMsg() {
  let content = '<i class="fas fa-user"></i> ' + usernameIn.value;
  let content2 = passwordInfo.value;
  if (content === '<i class="fas fa - user"></i> ') {
    alert("Please enter a username.");
  } else if (content2.length < 8) {
    alert("Please enter a password that is at least 8 character long.");
  } else {
    usernameOut.innerHTML = content;
    usernameIn.value = "";
    passwordInfo.value = "";
  }
}

//Slider
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

// Functionallity with Navbar

const navbarBtn = document.querySelector(".navbar__btn");
const navbarLinks = document.querySelector(".navbar__links");

navbarBtn.addEventListener("click", function () {
  let value = navbarLinks.classList.contains("navbar__collapse");
  if (value) {
    navbarLinks.classList.remove("navbar__collapse");
    navbarBtn.classList.remove("change");
  } else {
    navbarLinks.classList.add("navbar__collapse");
    navbarBtn.classList.add("change");
  }
});
