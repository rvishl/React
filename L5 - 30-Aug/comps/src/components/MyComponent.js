function MyComponent(props) {
  console.log(props);

  return <button>{props.caption}</button>;
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
