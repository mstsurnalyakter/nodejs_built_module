const url = require("url");
const adr = "https://www.google.com/search?sca_esv=569938233&sxsrf=AM9HkKl0HRK6-zFh9wiRxPHYSipcKiusfA:1696220811906&q=mvc+architecture+in+node+js&spell=1&sa=X&ved=2ahUKEwip59D3wtaBAxWSUGwGHf-2Bu4QBSgAegQIBxAB&biw=2133&bih=1025&dpr=0.9";

const q = url.parse(adr, true);

console.log(q.auth);
console.log(q.hash);
console.log(q.host);
console.log(q.hostname);
console.log(q.href);
console.log(q.path);
console.log(q.pathname);
console.log(q.protocol);
console.log(q.query);
console.log(q.search);

console.log(q.slashes);
