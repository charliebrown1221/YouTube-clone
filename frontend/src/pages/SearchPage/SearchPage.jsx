import React,{useEffect,useState} from "react";
import axios from "axios";


const SearchPage = (props) => {
    const [user, token] = useAuth();
    const [coments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/comments/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setComments(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      getComments();
    }, [token]);

    return ( 
        <div></div>
     );
}
 
export default SearchPage;