const fs = require("fs");
const file = process.argv[2];

if (!file) {
	console.log("the file param is required");


}

try {
	const content = fs.readFile(file, function(err, content) {
		if (err) {
			return console.log(err);
		}
		console.log( content.toString().split("\n").length );
	});
	console.log("alv!!!");
} catch (err) {
	console.log(err)
}