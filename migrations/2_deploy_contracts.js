const SavingGroups = artifacts.require('./SavingGroups.sol');

module.exports = function (deployer) {
  deployer.deploy(SavingGroups);
};
