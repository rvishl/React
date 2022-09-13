//import logo from './logo.svg';
import "./App.css";
import MyComponent from "./components/MyComponent";
import MyArrayComp from "./components/MyArrayComp";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, "Whatever"];

  const styling = {
    color: "green",
    backgroundColor: "orange"
  };

  return (
    <div>
      <h2>Hello World!</h2>
      <MyComponent caption="Button 1" />
      <MyComponent caption="Button 2" another="something" />
      <MyComponent caption="Button 3" />
      <br />
      <MyArrayComp abcd_arr={arr} />
      <p className='special'>This is me</p>
      <p style={styling}>Inline</p>
    </div>
  );
}

export default App;
