import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';   //importing the style file rom bootstrap
import {                            //importing Router elements from npm router-dom
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './component/Home'   //importing components of source file
import RestaurantCreate from './component/restaurantCreate'
import RestaurantDetails from './component/restaurantDetails'
import RestaurantLists from './component/restaurantLists'
import RestaurantSearch from './component/restaurantSearch'
import RestaurantUpdate from './component/restaurantUpdate'  
import BannerSlider from './component/bannerSlider'
import Login from './component/Login'
import NavBarMenu from './component/NavBarMenu'
import GridContainer from './component/GridContainer'
import Paragraph from './component/Paragraph'
import GridContainer2 from './component/GridContainer2'
import Profile from './component/Profile';
function App() {
  return (
    <div className="App">

     
      {/* <Router>

      <NavBarMenu />

        <div>

          <switch>
            <Route path="/create">
              <RestaurantCreate />
            </Route>
            <Route path="/lists">
              <RestaurantLists />
            </Route>
            <Route path="/update/:id"
             render={props=>(
              <RestaurantUpdate {...props}/>
             )}
            >
             
            </Route>
            <Route path="/login"
             render={props=>(
              <Login {...props}/>
             )}
            >
             
            </Route>
            <Route path="/details">
              <RestaurantDetails />
              </Route>
            <Route path="/search">
              <RestaurantSearch />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </switch>
        </div>
      </Router>
                
      <BannerSlider />
      <GridContainer2 />
      <GridContainer />
      <Paragraph /> */}
    </div>
    
  );
}

export default App;
