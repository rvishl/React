console.log("Hey, everyone");

let a = 1;
var b = 2;

function test() {
    console.log(this.a, this.b); //This will refer to global scope (window). a = undefined, b = 2
    let a = 10;
    var b = 11;
    {
        let a = 20; //because a is a let variable, it will have it's OWN scope (OWN Memory Location). It will not update the parent variable. because let and const are block scoped.
        b = 21;
    }

    console.log(a, b); // a = 10, b = 21;
}
console.log(a, b); // a = 1, b = 2;

test();

console.log(a, b); //a = 1, b = 2;