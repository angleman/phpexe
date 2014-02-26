// phpexe
// https://github.com/angleman/phpexe
// License: MIT


// inspired by: https://stackoverflow.com/questions/6542169/execute-php-scripts-within-node-js-web-server


var exec = require("child_process").exec;


function phpExe(command, args, callback) {
	if (typeof args === 'function') {
		callback = args
		args = undefined
	}
	args = (args) ? ' "' + args.join('" "') + '"' : ''
	command = 'php ' + command + args
	exec(command, function (error, stdout, stderr) {
		if (!error && stderr.length > 0) {
			error = stderr;
		}
		callback(error, stdout);
	});
}


module.exports = phpExe