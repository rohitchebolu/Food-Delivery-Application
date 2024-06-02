import React from "react";
import ReactDOM from "react-dom"
// Header
//  logo
//  navitems
// Body
//  Search
//  RestaurantContainer
//    RestaurantCard
// Footer
//  copyright
//  Links
//  Address
//  Contact

const Header = () => {
  return(
    <div className="header">
      <img src="https://cdn.dribbble.com/userupload/5966432/file/original-03c1fe57f7907074905632cbf187f058.png?resize=400x0" className="logo-container"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>  
    </div>
  )
}

const RestaurantCard = () => {
  return(
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" id="res-img"></img>
      <h3>Pizza Hut</h3>
      <h4>4.2</h4>
      <p>Gajuwaka</p>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <input type="text" id="search-box" placeholder="Find your favourite dish"></input>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout/>);