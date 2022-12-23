const SHA256 = require ("crypto-js/sha256");

class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){ // für Debugging-Zwecke // schräge Hochkommata nehmen auch Tabs und Returns mit, daher return in mehreren Zeilen
        return `Block - 
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}`
    }

    static genesis() {
        return new this("Genesis Time","-0000-","a1b2c3","Genesis-Daten");
    };

    static mineBlock(lastBlock,blockData) { // weitere Blocks
        const timestamp = Date.now(); // Zeit in ms seit 1.1.1970 - UNIX-Time
        const lastHash = lastBlock.hash; // Hash-Wert des Vorgängers
        const hash = Block.hash(timestamp,lastHash,blockData);

        return new this(timestamp,lastHash,hash,blockData); //call constructor
    };

    static hash(timestamp, lastHash, blockData) {
        return SHA256(`${timestamp}${lastHash}${blockData}`).toString();
    }

   
}

module.exports = Block; // export als js-module