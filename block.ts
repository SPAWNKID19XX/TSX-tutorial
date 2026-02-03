class Block {
    readonly nonce: number;
    readonly hash: string;

    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ) {
        const {nonce, hash} = this.mine();//method doesnt exist at the momment
        this.nonce = nonce;
        this.hash= hash;
    }

}