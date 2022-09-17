//import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const colors = ["red", "grey", "yellow", "blue", "pink"];

  return (
    <div>
      {/* <MyComponent color="red" />
      <MyComponent color="grey" />
      <MyComponent color="green" />
      <MyComponent color="pink" />
      <MyComponent color="blue" /> */}

      {colors.map((element, idx) => {
        return (
          <MyComponent color= {element} key={idx} />
        )
      })
      }


    </div>
  );
}

export default App;
