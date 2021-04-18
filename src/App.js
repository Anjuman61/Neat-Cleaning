import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddAdmin from './Components/AdminPanel/AddAdmin/AddAdmin';
import AddServices from "./Components/AdminPanel/AddServices/AddServices";

import Booking from "./Components/BookingProcess/Booking/Booking";
import CustomerReview from './Components/CustomerReview/CustomerReview';
import DashBoard from './Components/DashBoard/DashBoard';
import AdminSection from './Components/Home/AdminSection/AdminSection';
import Home from "./Components/Home/Home/Home";
import Services from './Components/Home/Services/Services';
import LogIn from './Components/LogIn/LogIn/Login';
import NoMatch from './Components/LogIn/NoMatch/NoMatch';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';



export const ServiceContext = createContext();
export const UserContext = createContext();


function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
  });
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://glacial-castle-93985.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <UserContext.Provider value={[user, setUser]}>
      <ServiceContext.Provider value={[services, setServices]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/addService'>
              <AddServices></AddServices>
            </Route>
            <Route path='/review'>
              <CustomerReview></CustomerReview>
            </Route>
            <Route path='/addAdmin'>
              <AddAdmin></AddAdmin>
            </Route>
            <PrivateRoute path='/dashBoard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/admin'>
              <AdminSection></AdminSection>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
