let count = document.querySelector('.count');

const inc = document.querySelector('.inc');
const increment = () => {
  count.textContent++;
};
inc.addEventListener('click', increment);

document.querySelector('.dec').addEventListener('click', () => {
  +count.textContent === 0 ?
  (count.textContent = 0) :
    count.textContent--;
});
