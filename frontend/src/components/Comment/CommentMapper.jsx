import React from "react";




const CommentMapper = (props) => {
    
           
    console.log('Hello from CommentMapper', props.comment)
    return ( 
        <ul>
            {props.comment.map( (comments, index)=><li key ={index}> {comments.username}{comments.text}{comments.likes}{comments.dislikes}  </li>)}
            
        </ul>)
 
    
}
 
export default CommentMapper;