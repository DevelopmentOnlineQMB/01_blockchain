// call npm run dev-test

//Iport der erforderlichen Kalssenbezüge

const Block = require ("./block.js");
const Blockchain = require("./blockchain");

// Test der Blockfunktionalität //

const chain = new Blockchain();
console.log(chain); // Genesisdaten

chain.addBlock("Neue Blockdaten mitschicken");
console.log(chain);

chain.addBlock("Weitere Blockdaten mitschicken");
console.log(chain);
