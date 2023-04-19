const SHA256 = require('crypto-js/sha256');

class Block {
  // Index = Posición del bloque en la cadena.
  // Data = El contenido de la cadena.
  // previousHash = Valor del bloque anterior de la cadena.
  // date = fecha de creación del bloque
  // hash = validacion como cadena originalChain
  // nounce = Numero aleatorio
  constructor(index, data, previousHash=''){
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.date = new Date();
    this.hash = this.createdHash();
    this.nounce = 0;
  }

  createdHash(){
    const originalChain = '${this.index} ${this.data} ${this.date} ${this.nounce}';
    return SHA256(originalChain.toString());
  }

  mine(dif){
    while(!this.hash.startsWith(dif).toString()){
        this.nounce++;
        this.hash = this.createdHash().toString();
    }
  }

}

module.exports = Block;
// Cifrados
// Simetricos y Asimetricos

//SHA
