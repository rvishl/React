# Sep-09, 2022

## BOM 
- Just like DOM, this is also a global object.
- Similarly if we wanted to change anything of the browser, then we would use Browser Object Model.
- BOM -> Browser Object Model.
- This is window.
- This refers to the 
- This points to the browser's reference.
- DOM is part of BOM.
- Things that the browser implements:
    - History
    - Location for navigation
    - session
    - local storage
    - timer functions
    - fetch
    - console
    - alert
    - Document
- Finally, BOM is the global most object.
- This is available everywhere.

## Type Casting (Type Conversion / Type Cercion)
- Also known As Implicit Type Conversion
- This is when the compiler will change the data type automatically.
- There is certain priority in the Data types. For example, numbers will be converted to string.

### Explicit Type Conversion
- This is when the developer converts the Datatype.
- Here, in JS, to convert the Data type, we use the class constructor.
- Example:
    let a = "1234";
    a = Number(a);
    console.log(a); // a as a number

## NaN
- Not a Number
- This is a special variable object which is globally.
- This is of datatype of a Number.
- NaN occurs when we expect a Number Datatype but it cannot be a valid Number. Then  we say, it is not a number.
- Any variable has two parts, first is the value and second is the data type.
- For NaN, the value is Not a valid number (Not a Number)
- But for Datatype, it is a Number data type.
- To check whether it is NaN or not, we use a function. isNaN();
- Two NaNs will never be same.
- We never compare using == or ===.
- Because two NaNs can be different actual values which we don't know , so they are possible to be different. Therefore, in general, it is just considered NaN == NaN as false.

### Number vs parseInt
- Number is used for Explicit Type conversion.
- Number will try to convert the data as a WHOLE!
- It will try to convert the whole data. If it can be converted, it will give numeric value, otherwise it will give NaN.
- parseInt takes a shortcut approach.
- It will check and convert character by character. If it finds a digit next, it add it, but if it fine anything else, it will break and exit.
- If the first character itself is Not a Number, it will return NaN.
- Number("1234abcd"); //NaN
- parseInt("1234abcd"); //1234
- parseInt("abcd1234"); // It will give NaN
- parseInt("1ab234"); // It will give 1.


# Assignment:
- ## First:
- Prepare the answer for the question `what is the difference between BOM and DOM`.
- ## Second:
- Write a JS function which takes in a string and returns the number from it.
- Example: 
    - "12abcd456" -> 12456
    - "111rfkdfjikd323irfif5434" -> 1113235434
    - "abcd123abcd5667" -> 1235667


// window.location.href;
// window.open("https://www.google.com"); 
// window.location.href = "https://www.google.com";
// window.history.back();
// window.history.forward();
// window.alert("abcd");
// window.fetch;

i would say, till now i have not encontered a challenge where had to work on spring boot. So, honestly you know i'm not worked on it. however if given chance i ready confident i will be able to you know learn and work on it easily because i as a programmer feels programming language are compratebly less important than know the programming concept and i am good with programming concept if you are genuinly intersted into the company you want to give a positive thing then you can answer it like that