import React, { useState } from "react";

function Card({id,image,info,price, name,removetour}) {
    const[readmore , setread] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}...`;
    function clickmoreHandler() {
        setread(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour_details">
                    <h3 className="tour_price">₹ {price}</h3>
                    <h3 className="tour_name">{name}</h3>
                </div>
                <div className="details">
                    {description}
                    <span className="read-more" onClick={clickmoreHandler}>
                        {readmore ? " show less" : " read more"}
                    </span>
                </div>
            </div>
            <button className="btn-pink" onClick={() => removetour(id)}>Not Intersted</button>
        </div>
    );
}

export default Card;