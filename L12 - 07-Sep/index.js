const a1 = 10 + 10;
console.log(a1);

const a2 = "10" + "10";
console.log(a2);

const a3 = 10 + "20";
// "1020"
console.log(a3);

const a4 = "10" + 20;
// "1020";
console.log(a4);

const a5 = 10 + 10 + 10 + "10";
// 30 + "10";
// "3010";
console.log(a5);

const a6 = "10" + 10 + 10 + 10;
// "1010" + 10 + 10;
// "101010" + 10;
// "10101010";
console.log(a6);

const a7 = "10" + (10 + 10 + 10);
// "10" + (30);
// "1030"
console.log(a7);

const a8 = "10" + 10 ** 2;
// "10" + 100;
// "10100"
console.log(a8);


const a9 = "10" + 10 - 10;
// "1010" - 10; 
// 1010 - 10; // first it will convert string to number because there is no subtraction operator in string
// 1000
console.log(a9);
console.log(typeof(a9));

const a10 = "10" + 30 - 10;
// "1030" - 10;
// 1030 - 10;
// 1020
console.log(a10);

const a11 = "10" - "10";
// 10 - 10
// 0
console.log(a11);

const a12 = 10 + 10 - 10 + "10" - "10" + 20 - 30 + "0";
// 10 + "10" - "10" + 20 - 30 + "0";
// "1010" - "10" + 20 - 30 + "0";
// 1010 - 10 + 20 - 30 + "0";
// 990 + "0";
// "9900";
console.log(a12);

const a13 = "abcd" - "efg";
// NaN
console.log(a13);

const a14 = -10 - "-10";
console.log(a14);

const a15 = [1, 2, 3, 4] + "100";
console.log(a15);
console.log(typeof(a15));


const a16  = 10 * "2";
console.log(a16);

const a17 = [10, 20, 30] - "60";
console.log(a17);

const a18 = "abcd" - "efgh";
console.log(a18);


// String Template
//Your OTP for Transaction for <amount> Rupees with Card Number ending with xx<CardNumber> is <OTPValue>.

const amount = 100;
const CardNumber = 4582;
//const otp = 124385;
//const otp = Math.floor(Math.random() * 1000000);
const otp = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

const str = `Your OTP for Transaction for ${amount} Rupees with Card Number ending with xx${CardNumber} is ${otp}.`
console.log(str);

const a = 1;
const b = 2;
const c = 3;
const d = 4;
// "1234" How?

const result = "" + a + b + c + d;
console.log(result);

console.log(Math.trunc(Math.random() * 100000 + 1));
// 0.00000012 * 100000
// 00003 => 3

const my_fname = "Vishal";
const my_lname = "Raj";
const my_role = "Student";

// Without String Templating. Just concatenation.
const str0 = "Hi, I am " + my_fname + " " + my_lname + " and I am your " + my_role;

// With string Templating.
const str1 = `Hi, I am ${my_fname} ${my_lname} and I am your ${my_role}`;
console.log(str0, str1);

const my_fn = () => {
    return "Vishal";
}

const str2 = `Hi, I am ${my_fn()}`;
console.log(str2);

const str3 = `1 + 1 = ${1 + 1}`;
console.log(str3);