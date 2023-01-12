const url = require("url");

const myUrl = new URL("https://mywebsite.com:8000/hello.html?id=100500&status=acticve");

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.)