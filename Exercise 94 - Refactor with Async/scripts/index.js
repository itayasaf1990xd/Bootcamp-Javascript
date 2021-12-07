const jokebtn = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke p`);
const jokeButtonText = jokebtn.querySelector(".btn-text");
const jokeTitle = document.querySelector(".title");
const baseURL1 = "https://icanhazdadjoke.com";
const baseURL2 = "https://api.jokes.one/jod";

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

const getJoke1 = () => {
  jokeHolder.textContent = "Loading...";
  fetch(baseURL1, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((joke) => (jokeHolder.textContent = joke.joke))
    .catch((e) => (jokeHolder.textContent = "try again"));
};

const getJoke2 = async () => {
  jokeHolder.textContent = "Loading...";
  try {
    const response = await fetch(baseURL2);
    const data = await response.json();
    jokeTitle.textContent = data.contents.jokes[0].joke.title;
    jokeHolder.textContent = data.contents.jokes[0].joke.text;
  } catch (e) {
    jokeHolder.textContent = "try again";
    console.log(e);
  }
};

const randomItemFromArray = (arr, current) => {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === current) {
    return randomItemFromArray(arr, current);
  }
  return item;
};

const clickHandler = () => {
  getJoke2();
  jokeButtonText.textContent = randomItemFromArray(
    buttonText,
    jokeButtonText.textContent
  );
};

jokebtn.addEventListener("click", clickHandler);
