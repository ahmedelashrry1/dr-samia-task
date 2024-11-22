const car = document.getElementById("car");
let text = document.getElementById("text");

function moveMouse() {
  text.innerHTML = "skincear is here 😎";
}

function mouseLeave() {
  text.innerHTML = "skincear left 😪";
}

// form
const name = document.getElementById("name");
const password = document.getElementById("password");
const emailText = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  try {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let messages = [];
    if (name.value === "" || name.value === null) {
      messages.push("Name is required");
    }

    if (emailText.value === "") {
      messages.push("Please enter email");
    }
    if (!emailText.value.match(validRegex)) {
      messages.push("Invalid email");
    }

    if (password.value.length < 6) {
      messages.push("Password must be longet than 6 chrachters");
    }
    if (password.value.length >= 20) {
      messages.push("Password must be longet than 6 chrachters");
    }

    if (password.value === "password") {
      messages.push("Password cannot be password");
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("finally");
  }
});
