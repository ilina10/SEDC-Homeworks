function doTheTable() {
  let table = document.getElementById("table");
  let row = document.getElementById("rows").value;
  let col = document.getElementById("columns").value;
  console.log(row + " " + col);
  for (let i = 0; i < row; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      let td = document.createElement("td");
      let text = document.createTextNode(" " + j);
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

document.getElementById("do").addEventListener("click", doTheTable);
