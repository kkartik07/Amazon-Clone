import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
          <Route path="/h1" element={[<Navbar />, <h1>hekwwdjnwkn</h1>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
