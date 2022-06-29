import React from "react";


const VideoPlayer = (props) => {
    
  let vid= `https://www.youtube.com/embed/${videoIds.videoId}`
  console.log("search_result:",props.searchResults)
    return ( 
        <>
     <ul> {props.searchResults.map( (videoIds, index)=><li key ={index}> {videoIds.videoId} </li>)}</ul>
        <iframe width="560" height="315" src={vid} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture" allowFullScreen></iframe>
       </>
     );
     
}
 
export default VideoPlayer;

