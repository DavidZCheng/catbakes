import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import backgroundImage from './assets/UGCtemplate01/1.png';
import secondImage from './assets/UGCtemplate01/2.png';
import thirdImage from './assets/UGCtemplate01/3.png';
import fourthImage from './assets/UGCtemplate01/5.png';
import fifthImage from './assets/UGCtemplate01/8.png'

function App() {
  
  return (
    // <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work with Me</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '100vh',
          width: '100vw',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} exact />
          {/* Add the new routes for the other pages */}
          {/* <Route path="/work" component={Work} />
          <Route path="/links" component={Links} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
      <div
        className="App"
        style={{
          backgroundImage: `url(${secondImage})`,
          minHeight: '100vh',
          width: '100vw',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="App"
        style={{
          backgroundImage: `url(${thirdImage})`,
          minHeight: '100vh',
          width: '100vw',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="App"
        style={{
          backgroundImage: `url(${fourthImage})`,
          minHeight: '100vh',
          width: '100vw',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="App"
        style={{
          backgroundImage: `url(${fifthImage})`,
          minHeight: '100vh',
          width: '100vw',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    // </Router>
  );
}

export default App;
