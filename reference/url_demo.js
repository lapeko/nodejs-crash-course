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
console.log(myUrl.pathname);

// Search params
console.log(myUrl.search);

// Search params
myUrl.searchParams.append('test', '123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((name, value) => console.log(name, value));
// console.log(myUrl.searchParams.get('id'));