const myForm = document.getElementsByTagName("form")[0];
const email = document.querySelector('input[name="email"]').value;
const button = document.querySelector("button");
const status = document.getElementsByClassName("status")[0];
const errIcon = document.querySelector("button + img");

button.addEventListener("click", (e) => {
  errIcon.classList.add("hide");
  status.textContent = "";
  e.preventDefault();

  if (email === "" || validateEmail(email)) {
    status.textContent = "Please provide a valid email";
    status.style.color = "hsl(0, 93%, 68%)";
    if (errIcon.classList.contains("hide")) {
      errIcon.classList.remove("hide");
    }
  }
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
