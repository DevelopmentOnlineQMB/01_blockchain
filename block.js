const SHA256 = require ("crypto-js/sha256");

class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }
    
    // String der den gesamten Block darstellt
    toString(){ // schräge Hochkommata, wie in diesem return-Block nehmen auch Tabs und Returns mit
        return `Block - 
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}`
    }

    // Startblockbildung 
    static genesis() { 
        return new this(Date.now(),"Blockchain Start","Blockchain Start","Blockchain Start");
    };
    
    // weitere Blocks
    static mineBlock(lastBlock,blockData) { 
        const timestamp = Date.now(); // Zeit in ms seit 1.1.1970 - UNIX-Time
        const lastHash = lastBlock.hash; // Hash-Wert des Vorgängers
        const hash = Block.hash(timestamp,lastHash,blockData);
    
    //call constructor
        return new this(timestamp,lastHash,hash,blockData);
    };
    
    // Hashbildung 
    static hash(timestamp, lastHash, blockData) { 
        return SHA256(`${timestamp}${lastHash}${blockData}`).toString();
    }

   
}

module.exports = Block; // export als js-module
