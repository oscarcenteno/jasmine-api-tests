var axios = require('axios');
describe('A suite', function() {
	it('contains spec with an expectation', (done) => {
		getBreeds().then((response) => {
			expect(response.status).toBe(201);
			//  TODO: Stop uing callbacks in my async functions
			done();
		});
	});

	//FIXME: This shouyld be extracted to another function

	function getBreeds() {
		return axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
			return {
				// TODO: Improve response.data
				status: response.status,
				data: response.data
			};
		});
	}
});
