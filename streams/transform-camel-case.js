const {Transform} = require("stream");

const tranformStream = new Transform({
	transform(chunk, encoding, callback) {
		this.push(chunk.toString().split(" ").map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		}).join(""));
		callback();
	}
})

process.stdin.pipe(tranformStream).pipe(process.stdout);