const SHA = require("crypto-js/sha256");
const Block = require("./MyBlock");
const MyBlockchain = require("./MyBlockchain");

let quBitCoin = new MyBlockchain();
quBitCoin.addNewBlock(new Block(1, "01/01/2021", { amount: 100 }));
quBitCoin.addNewBlock(new Block(2, "02/01/2021", { amount: 1000 }));
quBitCoin.addNewBlock(new Block(3, "03/01/2021", { amount: 10 }));

console.log(JSON.stringify(quBitCoin, null, 2));
console.log("isValidChain? " + quBitCoin.isValidChain());
