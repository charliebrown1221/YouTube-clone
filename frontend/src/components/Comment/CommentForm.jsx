import React,{useState} from "react";

const CommentForm = (props) => {
const[newComment,setNewComment]=useState()



function handelPost(event){
    event.preventDefault();

}










    return ( 
        <form onSubmit={handelPost}>
        
          <div>
          <label>Comments</label>
          <input className='post-box' type="text" value={newComment} onChange={(event)=> setNewComment(event.target.value)} />
          <button className='Create-button' type="submit">Create</button>
          </div>
        
    </form>


     );
}
 
export default CommentForm;