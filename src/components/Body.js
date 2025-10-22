import ResCard ,{withPromotedLabel} from "./ResCard";

import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./ResCard";


const Body = ()=>{
  const [listofRestaurents,setlistofRestaurents]= useState([]);
  
   const [filteredRestaurents,setfilteredRestaurents]= useState([]);
const [searchText,setSearchtext]= useState("");

const RestaurantCardPromoted=withPromotedLabel(ResCard);
  
useEffect(()=>{fetchData();},[]);

const fetchData =async () =>{
  const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await Data.json();
  setlistofRestaurents(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredRestaurents(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
const onlineStatus=useOnlineStatus()
if (onlineStatus===false) return<h1>looks like you're offline</h1>


     return listofRestaurents.length === 0 ? (<Shimmer />) : (
        <div className="body">
          <div className="filter flex">
            <div className="search m-2 p-2">
              <input type="text" className="search-box border border-solid border-black" value ={searchText} onChange={(e)=>setSearchtext(e.target.value)}></input>
              <button className="px-2 py-2 m-2 rounded-lg bg-green-200"onClick={()=> {
              const filteredRestaurents = listofRestaurents.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredRestaurents(filteredRestaurents)
              }}>search</button>
              
            </div>
            <div className="search m-2 p-2">
            <button className="px-2 py-2  m-2 bg-gray-100 rounded-lg" onClick={()=>{const filteredList = listofRestaurents.filter((res)=>res?.info?.avgRating > 4.2);
              setfilteredRestaurents(filteredList);
              }}>Top rated restaurant
              </button>
              </div>
              </div>
            <div className="res-container flex flex-wrap ">
              {
                filteredRestaurents.map((restaurant) =>(<Link key={restaurant.info.id}  to={"/restaurants/" + restaurant.info.id}>
                  {restaurant.info.veg ?(<RestaurantCardPromoted resData = {restaurant}/>):<ResCard resData = {restaurant}/>}
                  </Link>))
              }
               

            </div>

        </div>
        )
}

export default Body;