// 3
const fetchFilm = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < 10; i++) {
    fetchCharacter(data.characters[i]);
  }
};

// 4
const fetchCharacter = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const characterProperties = {};
  characterProperties.name = data.name;
  characterProperties.hair = data.hair_color;
  characterProperties.height = data.height;
  fetchPlanet(characterProperties, data.homeworld);
};

// 5
const fetchPlanet = async (characterProperties, url) => {
  const response = await fetch(url);
  const data = await response.json();
  characterProperties.planetName = data.name;
  characterProperties.planetPopulation = data.population;
  appendCharacterToTable(characterProperties);
};

// 6
const appendCharacterToTable = (characterProperties) => {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${characterProperties.name}</td>
      <td>${characterProperties.hair}</td>
      <td>${characterProperties.height}</td>
      <td>${characterProperties.planetName}</td>
      <td>${characterProperties.planetPopulation}</td>
  `;
  tbody.appendChild(tr);
};

// 2
const createTable = () => {
  const table = document.createElement("table");
  table.innerHTML = `
    <table>
      <thead>
        <tr>
          <th colspan="5">Star Wars</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>hair</td>
          <td>height</td>
          <td>planet name</td>
          <td>planet population</td>
        </tr>
      </tbody>
    </table>
`;
  document.body.appendChild(table);
};

// 1
const url = "https://swapi.dev/api/films/1/";
createTable();
fetchFilm(url);
