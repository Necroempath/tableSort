const users = [
  ["Ian", 29, "Sydney"],
  ["Diana", 22, "Tokyo"],
  ["Charlie", 28, "Berlin"],
  ["Ethan", 35, "Toronto"],
  ["Alice", 25, "New York"],
  ["Fiona", 27, "Paris"],
  ["George", 30, "Madrid"],
  ["Hannah", 24, "Rome"],
  ["Julia", 31, "Amsterdam"],
  ["Bob", 32, "London"],
];

const table = document.querySelector("#table");

const sortMethods = ['sort', 'reverse'];

const indexes = [];

const sortTypes = [(a, b, id) => a[id].localeCompare(b[id]), (a, b, id) => a[id] - b[id]];

const header = document.querySelector("#header");

[...header.children].forEach((item, index) => {
  item.dataset.id = index;
  indexes.push(0);
})

function createTable(data) {
  data.forEach(row => {
    const tr = document.createElement("tr");

    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;

      tr.append(td);
    })

    table.append(tr);
  })
}

function overrideTable(data) {
  for (let i = 0; i < data.length; i++) {

    let tr = table.children[i + 1]

    for (let j = 0; j < data[i].length; j++) {
      tr.children[j].textContent = data[i][j];
    }
  }
}

createTable(users);

function sort(e, data) {
  const id = e.target.dataset.id
  const type = e.target.dataset.type;
  if (e)
    data[sortMethods[(indexes[id]++) % 2]]((a, b) => sortTypes[type](a, b, id));
  overrideTable(data);
}

header.addEventListener('click', (e) => sort(e, users));

