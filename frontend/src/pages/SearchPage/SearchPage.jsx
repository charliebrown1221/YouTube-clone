import React,{useEffect,useState} from "react";
import axios from "axios";
import CommentMapper from "../../components/Comment/CommentMapper";
import SearchBar from "../../components/SearchBar";
import VideoPlayer from "../../components/VideoPlayer";
import CommentForm from "../../components/Comment/CommentForm";
import useAuth from "../../hooks/useAuth";



const SearchPage = (props) => {
    // const [user, token] = useAuth();
    const [comments, setComments] = useState([]);
    const [searchResults, setSearchResults ]=useState([])
    const [videoId, setVideoId]=useState('')
    const [relatedVideoIds, setRelatedVideoIds]=useState('')
    const [user, token] = useAuth();

    //another useEffect that watches [videoId]



    async function runSearch(searchTerm='programming') {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDNUZRw6IXIPIweEE6RbU-1ELmDiuORHkI&type=video&part=snippet`)
        console.log(response.data)
        setSearchResults(response.data.items[0])
        setVideoId(response.data.items[0].id.videoId)
      } catch (error) {
        console.log(error.response.data)
        
      }
    };
    useEffect(() => {
      runSearch()
    }, []);

  useEffect(() => {
    const getComments = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/` );
          setComments(response.data);
        console.log('comment:',response.data)
        } catch (error) {
          console.log(error.response.data);
        }};
        
      getComments();
    }, [videoId]);
//make related videos apis call using the videoID
      //set a state variable of relatedVideos
    useEffect(() =>{
    const relatedVid = async()=> {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyDNUZRw6IXIPIweEE6RbU-1ELmDiuORHkI&part=snippet`)
        setRelatedVideoIds(response.data.items)
        console.log('related:',response.data)
      } catch (error) {
        console.log(error.response.data); 
      }};
      relatedVid() 
    }, [])

    
    async function createComment (createdComment) {
      try {
        let response = await axios.post("http://127.0.0.1:8000/api/comments/add/", createdComment,{
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (response.status ===201){
          getComments();
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
  
    
    
    return ( 
      <div>
        
        <div>
          <SearchBar relatedVid={relatedVideoIds} runSearch={runSearch} />
        </div>
        <div><VideoPlayer videoId={videoId} searchResults={searchResults} /></div>
        <div>
          <CommentMapper comment={comments}/>
        </div>
        <CommentForm user={user}   createComment={createComment}/>
        </div>
     );
    }
 
export default SearchPage;