const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

(async () => {
  // create folder
  fs.mkdir(path.join(__dirname, "test"), { flag: "w+" }, err => {
    if (err) return console.error(err);
    console.log('ok');
  })

  // create and write to file
  await fsPromises.writeFile(path.join(__dirname, "test", "test.txt"), "Some line", { flag: "w" })

  // add text to existing file
  await fsPromises.writeFile(path.join(__dirname, "test", "test.txt"), "\nNew line", { flag: "a" })

  // read from file
  const res = await fsPromises.readFile(path.join(__dirname, "test", "test.txt"), { encoding: "utf8" });
  console.log(res);

  await fsPromises.rename(path.join(__dirname, "test", "test.txt"), path.join(__dirname, "test", "test2.txt"));
})();
