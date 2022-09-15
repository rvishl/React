const fn = () => {
    console.log("This is a function");
}

const fn2 = () => {
    console.log("This is another function");
}

export default fn;
// export default fn2; // This is not allowed, default .... Syntax Error.

export const hello = () => {
    console.log("This is from another side");
}