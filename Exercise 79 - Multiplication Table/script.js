const table = document.querySelector("#multiplication-table");

(createMultiplicationTable = () => {
  const size = 10;
  for (let i = 1; i <= size; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
      console.log(row);
    }
  }
})();