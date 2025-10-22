import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{
    const [showItems,setShowItems]=useState(false);

    const handleclick=()=>{
        setShowItems(!showItems)
    }
  
    return <div>
        {/* {accordion header} */}
        <div className=" w-6/12 mx-auto my-4 p-3 bg-gray-100 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>🔽</span> 
        </div>
        {showItems && <ItemList items={data.itemCards} />}
        </div>
        
    </div>
}
export default RestaurantCategory;