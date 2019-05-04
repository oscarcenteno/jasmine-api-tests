var Api = require('./breeds.api');

describe('Dog API', function() {
	var api;

	beforeAll(() => {
		api = new Api('https://dog.ceo/api');
	});

	it('can get all breeds', async function() {
		var response = await api.getBreeds();

		expect(response.status).toBe(200);
	});

	it('can get subbreeds', async function() {
		var response = await api.getSubBreeds('hound');

		expect(response.status).toBe(200);
	});
});
