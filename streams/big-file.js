const fs 	= require("fs");
const file 	= fs.createWriteStream("./big")

for (var i = 0; i <= 1e6; i++) {
	file.write("This is a new message as example for generating a big file");
}

file.end();