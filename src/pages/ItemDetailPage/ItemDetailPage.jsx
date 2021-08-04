import * as usersService from '../../utilities/users-service';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


export default function ItemDetail(props) {
    const location = useLocation();
    const [itemDetail, setItemDetail] = useState({});
 
    useEffect(() => {
        console.log(location.state);
        setItemDetail(location.state);
     }, [location]);

    return(
        <main className="ItemDetail">
            <h1>Item Details</h1>
            <div>Item Name: {itemDetail.itemName}</div>
            <div>Calories: {itemDetail.itemCalories}</div>
            <div>Category: {itemDetail.itemCategory}</div>
            <button>Update</button>
            <button>Delete</button>
        </main>
    )
}