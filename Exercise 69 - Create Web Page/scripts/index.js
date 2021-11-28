const container = document.createElement("div");
document.body.appendChild(container);

const title = document.createElement("h1");
const img = document.createElement("img");
const subtitle = document.createElement("h3");

container.appendChild(title);
container.appendChild(img);
container.appendChild(subtitle);

Object.assign(container.style, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column",
  height: "100vh",
});

title.textContent = "Johnny Bryce";

img.src = "./assets/images/john-bryce.jpg";
Object.assign(img.style, {
  width: "400px",
});

subtitle.textContent = "The best training company in the world since 1990";
