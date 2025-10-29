const jsInternals = [
  ["Prototype", "Internal Slot", "Reference to the object's prototype through which property lookup is performed"],
  ["Scope", "Internal Slot", "Closed function context that stores references to outer variables"],
  ["Call", "Internal Method", "Method invoked when the function is called"],
  ["Construct", "Internal Method", "Method invoked when the function is called with new"],
  ["Target", "Internal Slot", "Target object of a Proxy, holding the original object"],
  ["Handler", "Internal Slot", "Proxy handler object containing traps (get, set, apply, etc.)"],
  ["WeakRefs", "Internal Slot", "Reference to objects tracked by WeakRef that don’t prevent garbage collection"],
  ["Realm", "Internal Slot", "Separate JavaScript execution environment with its own global objects"],
  ["PrototypeChain", "Concept", "Sequence of objects the engine traverses to find a property"],
  ["HiddenClass", "Engine Optimization", "Internal engine representation of an object’s structure to optimize property access"],
  ["Closures", "Concept", "Closures that preserve the lexical environment for inner functions"],
  ["Bytecode", "Engine Artifact", "Compiled function code in bytecode form before interpreter execution"],
  ["GC", "Engine Process", "Garbage collector mechanism managing the lifetime of objects"],
  ["EventLoop", "Engine Concept", "Event loop managing asynchronous execution of JavaScript code"],
  ["JobQueue", "Engine Concept", "Queue of microtasks (Promise callbacks, MutationObserver, etc.)"]
];

//jsInternals.sort().reverse()
const table = document.querySelector("#table");

const sortMethods = ['sort', 'reverse'];

const indexes = [];

const header = document.querySelector("#header");

header.children.forEach((item, index) => {
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

function overrideTable(data){
  for(let i = 0; i < data.length; i++) {

    let tr = table.children[i + 1]

    for(let j = 0; j < data[i].length; j++) {
      tr.children[j].textContent = data[i][j];
    }
  }
}

createTable(jsInternals);
//console.log(table.children);
header.addEventListener('click', (e) => {
  let id = e.target.dataset.id
  jsInternals[sortMethods[0]]();
  overrideTable(jsInternals);
});

