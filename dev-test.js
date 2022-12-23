// call npm run dev-test

// console.log("Pause");

const Block = require ("./block.js");
const Blockchain = require("./blockchain");

//console.log(Block.genesis().toString());

//console.log(Block.mineBlock(Block.genesis(),"Test"));

//const testBlock = Block.mineBlock(Block.genesis(),"testData");




// Test der Blockfunktionalität //

const chain = new Blockchain();
console.log(chain);

chain.addBlock("Neue Blockdaten");
console.log(chain);

chain.addBlock("Neue Blockdaten");
console.log(chain);


//const block = new Block("aktuelle Zeit","hash1","hash2","Daten");

//console.log (block.toString());

//console.log (Block.genesis());

//console.log(chain);

//console.log (testBlock.toString());

