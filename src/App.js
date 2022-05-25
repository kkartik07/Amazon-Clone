import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />]} />
          <Route path="/checkout" element={[<Navbar />, <Checkout />]} />
          <Route path="/h1" element={[<Navbar />, <h1>hekwwdjnwkn</h1>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
