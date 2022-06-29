import React,{useState} from "react";

const SearchBar = (props) => {
   
   const[saveSearch,setSaveSearch]=useState()
   
   
   function handelSearch(event){
    event.preventDefault();
    props.runSearch(saveSearch)
   }
   
   
   
    return ( 
   <form onSubmit={handelSearch}>
        <div > 
      <input type='text' value={saveSearch} onChange={(event)=> setSaveSearch(event.target.value)} ></input>
      {console.log('savedSearch:',saveSearch)}
      <button className='' type='submit' placeholder='What video are you looking for'>Search</button>
        </div>
        </form>
     );
}
 
export default SearchBar;