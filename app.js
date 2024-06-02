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

const RestaurantCard = (props) => {
  const{resData}=props;
  return(
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} id="res-img"></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating}</h4> 
      <h4>{resData.info.cuisines}</h4>
      <p>{resData.info.locality}</p>
    </div>
  )
}
const resObj =  
[{
  "info": {
    "id": "334228",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Gajuwaka",
    "areaName": "Gajuwaka",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas"
    ],
    "avgRating": 4.2,
    "parentId": "721",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-02 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Pizza.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹189"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-dc3ba857-8fb5-4060-bec6-ac9e092867b0"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-gajuwaka-vizag-334228",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}];

const Body = () => {
  return(
    <div className="body">
      <input type="text" id="search-box" placeholder="Find your favourite dish"></input>
      <div className="res-container">
        {resObj.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
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