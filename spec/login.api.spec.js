var axios = require('axios');
describe('A suite', () => {
	it('contains spec with an expectation', () =>
    getBreeds()
    .then((response) => {
      expect(response.status).toBe(201);
    }));

	//FIXME: This should be extracted to another function
	function getBreeds() {
    return axios.get('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
      return {
        // TODO: Improve response.data
				status: response.status,
				data: response.data
			};
		});
	}});