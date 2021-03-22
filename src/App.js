import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import BookingDetails from './components/BookingDetails/BookingDetails';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/car/:name">
          <BookingDetails/>
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
