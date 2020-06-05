const fs = require("fs");
const server = require("http").createServer();

/*
server.on("request", (req, res)=> {
	fs.readFile("./big", (err, data)=> {
		if (err) {
			console.log("error", err)
		}

		res.send(data);
	});
})
*/

server.on("request", (req, res)=> {
	const src = fs.createReadStream('./big');
	src.pipe(res);
})

server.listen(3000);
console.log("listening at http://localhost:3000");