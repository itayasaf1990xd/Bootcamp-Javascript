const url = `http://www.omdbapi.com/?apikey=e750f306&t=`;
const searchButton = document.querySelector("button");
const movieName = document.querySelector("input");
const errorMessage = document.querySelector(".errorMessage");
const movieCard = document.querySelector(".movie-card");
const movie = {};
let movieRatting;

const focusOnInput = () => {
  movieName.focus();
};

const errorHandler = (error) => {
  errorMessage.textContent = error;
  setTimeout(() => {
    errorMessage.textContent = "";
  }, 2500);
};

function addMovieCard() {
  let innerHTML = `
    <div class="img-container">
      <img class="poster" src="${movie.poster}" alt="poster image" />
    </div>
    <div class="information-container">
      <h1>${movie.title}</h1>
      <div><span class="title">Genre: </span>${movie.genre}</div>
      <div><span class="title">Release Year: </span>${movie.year}</div>
      <div><span class="title">Plot: </span>${movie.plot}</div>
      <div><span class="title">Director: </span>${movie.director}</div>
      <div><span class="title">Actors: </span>${movie.actors}</div>
      <div class="rating-wrapper">`;
  for (const key of Object.keys(movie.ratings)) {
    innerHTML += `
        <div class="rating-box">
          <img class="rating-img" src="./${key}.png" alt="ratting" />
          <div>${movie.ratings[key]}</div>
        </div>`;
  }
  innerHTML += `</div>`;
  movieCard.innerHTML = innerHTML;
}

const searchMovieHandle = async (error) => {
  errorMessage.textContent = "";
  error.preventDefault();
  try {
    const response = await fetch(`${url}${movieName.value}`);
    const data = await response.json();
    if (data.Response === "True") {
      console.log("Good");
      movie.poster = data.Poster;
      movie.title = data.Title;
      movie.genre = data.Genre;
      movie.year = new Date(data.Released).getFullYear();
      movie.plot = data.Plot;
      movie.director = data.Director;
      movie.actors = data.Actors;
      movie.ratings = {};
      movieRatting = data.Ratings;
      for (let i = 0; i < Object.keys(data.Ratings).length; i += 1) {
        if (
          ["Internet Movie Database", "Rotten Tomatoes", "Metacritic"].includes(
            data.Ratings[i].Source
          )
        ) {
          movie.ratings[data.Ratings[i].Source] = data.Ratings[i].Value;
        }
      }
      addMovieCard();
    } else {
      errorHandler(data.Error);
    }
  } catch (error) {
    console.log(222)
    errorHandler(error);
  }
  focusOnInput();
  movieName.value = "";
};

searchButton.addEventListener("click", searchMovieHandle);
