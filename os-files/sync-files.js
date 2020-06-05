const fs = require("fs");

try {
	const file = process.argv[2];
	const content = fs.readFileSync(file).toString();
	console.log ( content.split("\n").length )
	console.log("alv!!!");
} catch (err) {
	console.log(err)
}