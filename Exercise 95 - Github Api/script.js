const url = `https://api.github.com/users/`;
const searchButton = document.querySelector("button");
const userName = document.querySelector("input");
const errorMessage = document.querySelector(".errorMessage");
const users = {};
const cardsContainer = document.querySelector(".cards-container");

const focusOnInput = () => {
  userName.focus();
};

const errorHandler = (error) => {
  errorMessage.textContent = error;
  setTimeout(() => {
    errorMessage.textContent = "";
  }, 2500);
};

const addCard = (userInformation) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a class="card-link" href=${userInformation.link} target="_blank">
    <div class="img-container">
      <img src="${userInformation.image}" alt="user image" />
    </div>
    <div class="information-container">
      <h3>${userInformation.username}</h3>
      <h2>${userInformation.name}</h2>
      <div>Number of public Repos: ${userInformation.repository}</div>
      <a href=${userInformation.link} target="_blank">Click to the profile</a>
    </div>
  </a>`;
  cardsContainer.prepend(card);
};

const fetchUser = async (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  if (users[userName.value]) {
    errorHandler("The Github data already display on the page");
  } else {
    try {
      const response = await fetch(`${url}${userName.value}`);
      const data = await response.json();
      if (response.ok) {
        users[userName.value] = {
          username: data.login,
          name: data.name,
          image: data.avatar_url,
          repository: data.public_repos,
          link: data.html_url,
        };
        addCard(users[userName.value]);
      } else {
        errorHandler(`${userName.value} ${data.message}`);
        // if (response.status === "404") {
        //   errorHandler(`${userName.value} ${data.message}`);
        // } else if (response.status === "403") {
        //   errorHandler(`${userName.value} ${data.message}`);
        // }
      }
    } catch (error) {
      errorHandler(error);
    }
  }
  focusOnInput();
  userName.value = "";
};

searchButton.addEventListener("click", fetchUser);
