import React, { useState } from "react";
import Card from "./Card";

function Tours(props) {
    return(
        <div className="tour-container">
            <div>
                <h1 className="tour-heading">Plan With Rishabh..</h1>
            </div>
            <div className="tour-card">
                {props.tours.map( (tour) => {
                    return(
                        <Card key={tour.id} {...tour} removetour = {props.removetour}></Card>
                    );
                })}
            </div>
        
        </div>
    );
}

export default Tours;