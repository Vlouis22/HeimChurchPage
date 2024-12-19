import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Watchlive from './pages/Watchlive';
import Offering from './pages/Offering';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <div className="App"></div>
       <Navbar/>
       <div className='content'>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="About" element={<About/>}></Route>
            <Route exact path="/watchlive" element={<Watchlive/>}></Route>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Offering" element={<Offering/>}></Route>
        </Routes>
       </div>
    </Router>
  );
}

export default App;
