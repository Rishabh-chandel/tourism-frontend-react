import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours.js";

function App() {
  const [tours, setTours] = useState(data);
  function removetourHandler(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  function refreshHandler() {
    setTours(data);
  }

  if(tours.length == 0) {
    return(
      <div className="refresh">
        <h2>No Tours Left :'(</h2>
        <button className="btn" onClick={refreshHandler}>Refresh..</button>
      </div>
    );
  }

  return(
    <div>
      <Tours tours = {tours} removetour = {removetourHandler}></Tours>
    </div>
  );
}

export default App;
