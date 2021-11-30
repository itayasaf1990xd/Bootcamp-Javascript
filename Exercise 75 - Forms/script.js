const form = document.querySelector("form");
form.addEventListener("submit", formValidation);

function formValidation(event) {
  const name = event.target.querySelector("#name");
  const age = event.target.querySelector("#age");
  const email = event.target.querySelector("#email");
  const message = confirm(
    `Is ${name.id}: ${name.value}?\nIs ${age.id}: ${age.value}?\nIs ${email.id}: ${email.value}?`
  );
  message ? formSubmitted() : event.preventDefault();
}

function formSubmitted() {
  form.remove();
  const div = document.createElement("div");
  div.innerHTML = "<p>Congratulations the form submitted successfully!</p>";
  document.body.appendChild(div);
}