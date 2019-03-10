module.exports = {
	env: {
		commonjs: true,
		es6: false,
		node: true,
		jasmine: true,
		protractor: true
	},
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		'linebreak-style': [ 'error', 'windows' ],
		semi: [ 'error', 'always' ]
	}
};
