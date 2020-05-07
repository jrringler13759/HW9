const axios = require("axios");



const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    return axios.get(queryUrl)
    
    .catch(function(err){
      console.log(err);
    })
  }

}

module.exports = api;

