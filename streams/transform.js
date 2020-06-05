const {Transform} = require("stream");

const tranformStream = new Transform({
	transform(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	}
})

process.stdin.pipe(tranformStream).pipe(process.stdout);