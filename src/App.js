import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/puppy/:breedName' element={<CardDetails/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
