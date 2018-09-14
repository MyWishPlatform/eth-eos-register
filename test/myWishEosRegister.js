const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .use(require('chai-as-promised'))
    .should();


contract('MyWishEosRegister', function (accounts) {
    const TARGET = accounts[1];
    const RECIPIENT_1 = accounts[2];
    const RECIPIENT_2 = accounts[3];

    let snapshotId;

    beforeEach(async () => {
        snapshotId = (await snapshot()).result;
    });

    afterEach(async () => {
        await revert(snapshotId);
    });

    it('#1 construct', async () => {
        const register = await MyWishEosRegister.new();
    });

});
