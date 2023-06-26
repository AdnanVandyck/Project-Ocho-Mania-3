import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";

function App() {
  const [listOfPerformances, setListOfPerformances] = useState([]);


  useEffect(() => {
Axios.get("http://localhost:8888/performances").then((response) => {
  setListOfPerformances(response.data)
})
  }, [])




  return (
    <div className="App">
      <div className="performanceDisplay">
        {listOfPerformances.map((performance) => {
          
          return (
            <div className="performanceList"> 
              <h1>Venue: {performance.venue}</h1>
              <h1>Event Promo:
                <img src={performance.image} alt={performance.date} />
                </h1>
              <h1>Date: {performance.date}</h1>
              <h1>Song of the Night!: {performance.bestSong} by {performance.songArtist}</h1>
            </div>
          )
        }
        )}
      </div>




      {/* ends "App" div */}
    </div> 
  );
}

export default App;
