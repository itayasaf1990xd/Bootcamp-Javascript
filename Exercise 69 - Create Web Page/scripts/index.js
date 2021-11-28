const container = document.createElement('div');
document.body.appendChild(container);

const title = document.createElement('h1');
const img = document.createElement('img');

container.appendChild(title);
container.appendChild(img);

Object.assign(container.style, {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column'
})

title.textContent = 'Johnny Bryce';

img.src = 'john-bryce.jpg'
Object.assign(img.style, {
    width: '200px'
});
