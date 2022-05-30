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
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './components/Orders';

const promise = loadStripe(
  "pk_test_51L4N8PSAeezdO0EWbwWXkl2438hRUJq86ATPEQSLlGM0j0Y7CalOkAAGDOYyZcnAoBwXrn4NUZI38OlkHs6InmE400XVtgs7oB"
)

function App() {
  // eslint-disable-next-line
  const [user, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if (authUser) {
        // the user is logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />]} />
          <Route path="/checkout" element={[<Navbar />, <Checkout />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path='/orders' element={[<Navbar />, <Orders />]} />
          <Route path="/payment" element={[<Navbar />, <Elements stripe={promise} > <Payment ></Payment> </Elements>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
