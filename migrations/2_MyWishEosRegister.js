const MyWishEosRegister = artifacts.require('./MyWishEosRegister.sol');

module.exports = function (deployer, _, accounts) {
    deployer.deploy(MyWishEosRegister);
};
