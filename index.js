// For testing ESLint
// var x = 1; // unused variable // uncomment to see lint error

function showMessage() {
	const message = 'I like logs';

	for (let index = 0; index < 5; index++) {
        //eslint-disable-next-line no-console
        console.log(message);
        // console.log(message) // uncomment to see error
	}
}

// showmessage(); // uncomment to see error
showMessage();
