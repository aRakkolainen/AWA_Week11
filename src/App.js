//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyContainer from './components/MyContainer';
import About from './components/About';
import Header from './components/Header';
import {Suspense} from 'react';

function App() {

  //useEffect(()=> {

  //})
  return (
    <Router>
      <Suspense fallback="loading">
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header></Header> <MyContainer></MyContainer></>}></Route>
          <Route path="/about" element={<><Header></Header> <About></About></>}></Route>
        </Routes>
      </div>

      </Suspense>
    </Router>
  );
}

export default App;
