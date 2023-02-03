function MyComponent({caption}) {
  // console.log(props);

  return <button>{caption}</button>;
}

export default MyComponent;

//return <button>Click me</button> ✔
//return (<button>Click me</button>) ✔
/*return ( ✔
        <button>Click me</button>
    )*/

/* ❌

return
    <button>Click me</button>

*/
