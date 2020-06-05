const fs = require("fs");

fs.mkdir("cmb/tupac/amaru", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});
