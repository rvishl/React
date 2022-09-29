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

// console.log(tdz);
// let tdz = 20;

let s = "irewerjid";
s = Number(s); //This will convert to a Number
console.log(s); // NaN
console.log(typeof s); //This HAS to be number

console.log(undefined + 1);
// why no concatenation -> undefined has a lower priortity than Number datatype. It will convert to Number, but since it cannot be, it will be NaN.
console.log(undefined + "1");


const abcd = NaN;
console.log(abcd == NaN);
console.log(NaN == NaN);

const v1 = "ABCD" // When converted, this will give NaN
const v2 = "XYZ" // When converted, this will give NaN

console.log(v1 == v2); //false

console.log(Number(v1) == Number(v2)); //false

// "NaN" 

let v3 = "1234abcd";
let v4 = parseInt(v3);
v3 = Number(v3);
console.log(v3); // It will give NaN
console.log(v4); // It will give as output = 1234

const arr = [26, 27, 26, 26, 26, 27, 28, 28, 29, 30];


// const unique = arr.filter((e, i, original_arr) => {
//     if (original_arr.lastIndexOf(e) == i) {
//         return true;
//     } else {
//         return false;
//     }
// });

const unique = arr.filter((e, i, original_arr) => original_arr.lastIndexOf(e) == i);


console.log(unique);


