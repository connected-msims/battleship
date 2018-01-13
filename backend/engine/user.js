const helper = require('../helper/generalHelper');

class User {
  constructor(userName = "") {
    this.userName = userName;
    this.userId = helper.generateHexString();
  }
}

module.exports = User;