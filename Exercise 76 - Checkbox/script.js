const wrapper = document.querySelector(".wrapper");
const image = document.querySelector("img");
wrapper.addEventListener("change", (event) => {
  console.log(event.target);
  event.target.checked
    ? image.classList.remove("hidden")
    : image.classList.add("hidden");
});
