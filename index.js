function showMessage() {
	const message = 'I like logs';

	for (let index = 0; index < 5; index++) {
        //eslint-disable-next-line no-console
        console.log(message);
	}
}

showMessage();
