import React,{useEffect,useState} from "react";
import axios from "axios";
import CommentMapper from "../../components/Comment/CommentMapper";
import VideoPlayer from "../../components/VideoPlayer";
import Navbar from "../../components/NavBar/NavBar";


const SearchPage = (props) => {
    // const [user, token] = useAuth();
    const [comments, setComments] = useState([]);

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
    }, []);
   

    return ( 
      <div>
        
        <div>
          {/* <VideoPlayer /> */}
        </div>
      
        <div>
          <CommentMapper comment={comments}/>
        </div>
        </div>
     );
}
 
export default SearchPage;