const Block = require('./MyBlock');

class MyBlockchain {
    constructor () {
        this.chain = [this.generateGenesisBlock()];
    }
    
    generateGenesisBlock() {
        return new Block(0, '04/12/2020', 'In the beginning, there was nothing, then, there was this block.', null)
    }

    getMostRecentBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(block) {
        block.prevHash = this.getMostRecentBlock().hash;
        block.hash = block.calculateHash();
        this.chain.push(block);
    }

    isValidChain() {
        this.chain.forEach( function (curBlock, index, chain = this.chain) {            
            const prevBlock = chain[index - 1];
            if (curBlock.hash != curBlock.calculateHash()) {
                return false;
            }
            if (index > 0)  {
                if (curBlock.prevHash != prevBlock.hash) {
                    return false;
                }
                return true;
            }
        });
    }
}

module.exports = MyBlockchain;