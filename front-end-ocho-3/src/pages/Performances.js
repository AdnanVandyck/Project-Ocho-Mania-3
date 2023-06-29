export default function Performances() {
  return(
    <h1>Performances</h1>
  )
}





// import React from 'react'



// function performanceList() {

//   //   const [listOfPerformances, setListOfPerformances] = useState([]);


// //   useEffect(() => {
// // Axios.get("http://localhost:8888/performances").then((response) => {
// //   setListOfPerformances(response.data)
// // })
// //   }, [])
//   return (
//     <div className="performanceDisplay">
//     {listOfPerformances.map((performance) => {
      
//       return (
//         <div className="performanceList"> 
//           <h1>Venue: {performance.venue}</h1>
//           <h1>Event Promo:
//             <img src={performance.image} alt={performance.date} />
//             </h1>
//           <h1>Date: {performance.date}</h1>
//           <h1>Song of the Night!: {performance.bestSong} by {performance.songArtist}</h1>
//         </div>
//       )
//     }
//     )}
//   </div>
//   )
// }

// export default performanceList