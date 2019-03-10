let didShowMessage = false;
function showMessage() {
	const message = 'I like logs';

	for (let index = 0; index < 5; index++) {
		console.log(message);
	}
}

showMessage();
