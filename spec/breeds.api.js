var axios = require('axios');

class Api{
  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  async getBreeds() {
    var response = await axios.get(this.baseUrl + '/breeds/list/all');

    return {
      status: response.status,
      data: response.data
    };
  }

  async getSubBreeds(breed) {
    var response = await axios.get(this.baseUrl + '/breed/' + breed + '/list');

    return {
      status: response.status,
      data: response.data
    };
  }
}

module.exports = Api;