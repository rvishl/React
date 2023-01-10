
import './App.css';
import Home from './component/Home';
import Content from './component/Content';
import About from './component/About';
import Nav from './component/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/nav' element={ <Nav /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/' element={ <Home /> } />
          <Route path='/content' element={ <Content /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
