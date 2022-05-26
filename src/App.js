import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import Login from './components/Login'
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
          <Route path="/login" element={[<Login />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
