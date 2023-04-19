const Block = require('./block');
const Blockchain = require('./blockchain');

// let block = new Block(0, "lo que sea", null);
// console.log(block);

const blockchain = new Blockchain("hola a mi nueva cadena de bloques");
blockchain.addBlock("Data del segundo bloque");
blockchain.addBlock("Data del tercer bloque");

console.log(blockchain);
