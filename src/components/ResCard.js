
import { CDN_URL } from "../utils/constants";

const ResCard =(props) =>{
    const{resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla, }=resData?.info;
    
    return(
        <div key = {resData.info.id}className="res-card bg-gray-50  hover:bg-gray-200 w-[250] rounded-lg m-2 p-2 ">
           <img alt="imglogo" className="res-img rounded-lg" src ={ CDN_URL + resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4 className="">{cuisines.join(",")}</h4>
            <h4>Rating:{avgRating}</h4>
            <h4>{costForTwo }</h4>
            <h4>DeliveryTime: {sla?.slaString}</h4>

        </div>

    )
}


 export const withPromotedLabel =(ResCard)=>{
    return(props)=>{
        return (
            <div>
                <label className="absolute m-3 py-1 pt-0 px-4 items-center bg-black text-white rounded-lg">veg</label>
                <ResCard {...props}/>
            </div>
        )
    }
}
export default ResCard ;