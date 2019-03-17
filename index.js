//var xml = './mdreport/sample_results/junitresults.xml';
var xml = './mdreport/sample_results/junitresults-errors-screenshots.xml';
// var xml = './mdreport/sample_results/junitresults-ignored-failed.xml';

var testResults = loadXmlJunitResults(xml);
var values = generateValues(testResults);
generateFromTemplate(values);

function loadXmlJunitResults(file) {
	var convert = require('xml-js');
	var fileSystem = require('fs');
	var xml = fileSystem.readFileSync(file, 'utf8');

	var result = convert.xml2js(xml, { compact: true, spaces: 2 });
	// console.log(result);
	/*    result.testsuites.testsuite.forEach((element) => {
        console.log(element._attributes.name);
    });
 */
	return result;
}

function generateValues(testResults) {
	var summary = getSummary(testResults);
	var table = getSummaryTable(summary);
	var values = {
		summaryTable: table,
		testResults: testResults,
		passed: getTotalPassed(summary),
		failed: getTotalFailed(summary),
		ignored: getTotalIgnored(summary)
	};

	return values;
}

function getTotalPassed(summary) {
	var total = 0;
	summary.forEach((element) => {
		total = total + element.pass;
	});

	return total;
}

function getTotalFailed(summary) {
	var total = 0;
	summary.forEach((element) => {
		total = total + element.failed;
	});

	return total;
}

function getTotalIgnored(summary) {
	var total = 0;
	summary.forEach((element) => {
		total = +total + +element.ignored;
	});

	return total;
}

function getSummary(testResults) {
	var summary = [];
	var suites = testResults.testsuites.testsuite;

	suites.forEach((element) => {
		var attributes = element._attributes;
		var name = attributes.name;
		var failed = calculateFailed(element);
		var ignored = attributes.skipped;
		var pass = attributes.tests - failed - ignored;
		var result;

		if (
			summary.filter(function(e) {
				return e.name === name;
			}).length > 0
		) {
			var found = summary.filter(function(e) {
				return e.name === name;
			})[0];
			found.pass = found.pass + pass;
			found.failed = found.failed + failed;
			found.ignored = +found.ignored + +ignored;
		} else {
			result = {
				name: name,
				failed: failed,
				pass: pass,
				ignored: ignored
			};
			summary.push(result);
		}
	});

	return summary;
}

function getSummaryTable(summary) {
	var table = '';

	summary.forEach((element) => {
		if (table == '') {
			table = getSummaryRow(element);
		} else {
			table = table + '\n' + getSummaryRow(element);
		}
	});

	return table;
}

function getSummaryRow(summarySuite) {
	// TODO: Consider string-placeholder library
	// var template = '| %d | 11 | 2 |';
	var name = summarySuite.name;
	var failed = summarySuite.failed;
	var pass = summarySuite.pass;
	var ignored = summarySuite.ignored;

	return '| ' + name + ' | ' + pass + ' | ' + failed + ' |' + ignored + ' |';
}

function calculateFailed(suite) {
	var failures = 0;

	// if there is more than one test case
	if (Array.isArray(suite.testcase)) {
		suite.testcase.forEach((testcase) => {
			var fail = false;

			// if there is more than one failure
			if (typeof testcase.failure != 'undefined') {
				fail = true;
			}

			if (fail) {
				failures = failures + 1;
			}
		});
	} else {
		var fail = false;

		// if there is more than one failure
		if (typeof suite.testcase.failure != 'undefined') {
			fail = true;
		}

		if (fail) {
			failures = 1;
		}
	}

	return failures;
}

function generateFromTemplate(values) {
	var template = 'template'; // rho file
	var compiler = require('./mdreport/compiler');
	compiler.compile(template, values, processCompiled);
}

function processCompiled(err, text) {
	if (
		err // Handle the error somehow
	)
		return console.log(err);

	// console.log(text);
	// You'll get "# Hello, World!\n\nWe're happy to have you here, World!"
	// Now chain the compilation to rho, markdown, pandoc or whatever else.

	var targetFile = './mdreport/compiled.md';
	saveFile(targetFile, text);
}

function saveFile(targetFile, text) {
	var fileSystem = require('fs');

	fileSystem.writeFile(targetFile, text, processAfterWriteFile);
}

function processAfterWriteFile(err) {
	if (err) {
		return console.log(err);
	}

	console.log('The file was saved!');
}
