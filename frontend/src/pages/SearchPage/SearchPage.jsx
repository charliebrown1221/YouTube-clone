import React,{useEffect,useState} from "react";
import axios from "axios";
import CommentMapper from "../../components/Comment/CommentMapper";
import SearchBar from "../../components/SearchBar";
import VideoPlayer from "../../components/VideoPlayer";



const SearchPage = (props) => {
    // const [user, token] = useAuth();
    const [comments, setComments] = useState([]);
    const [searchResults, setSearchResults ]=useState([])
    const [videoId, setVideoId]=useState('')



    async function runSearch(searchTerm) {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBxIKxXVF3XT_WlqGfZSmlyBKhRkRmG_xE&type=video&part=snippet`)
        console.log(response.data)
        setSearchResults(response.data.items)
        setVideoId(response.data.items[1].id.videoId)
      } catch (error) {
        console.log(error.response.data)
        
      }
    };
  useEffect(() => {
    const getComments = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/comments/1/", );
          setComments(response.data);
        console.log(response.data)
        } catch (error) {
          console.log(error.response.data);
        }};
      getComments();
    
      runSearch("cats")
    }, []);
    
    
  
  


     
    
   

    return ( 
      <div>
        
        <div>
          <SearchBar runSearch={runSearch} />
        </div>
        <div><VideoPlayer videoId={videoId} searchResults={searchResults} /></div>
        <div>
          <CommentMapper comment={comments}/>
        </div>
        </div>
     );
}
 
export default SearchPage;