const SHA = require('crypto-js/sha256');

class MyBlock {

    constructor (currIdx, timestamp, data, prevHash = '') {
        this.prevHash = prevHash;
        this.currIdx = currIdx;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA(this.currIdx + this.timestamp + this.prevHash + JSON.stringify(this.data)).toString();
    }
}

module.exports = MyBlock;