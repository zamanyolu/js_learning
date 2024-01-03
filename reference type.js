let user = {
    name: "John",
    hi() { console.log(this.name); }
};

let hi = user.hi;
hi();
(user.hi)();

console.log("\u007A")

console.log( '😂'.length );
//
// let user = {
//     name: "John",
//     go: function() { console.log(this.name) }
// };
//
//
// (user.go)() // John