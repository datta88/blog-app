import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from './../../confing/confing.json'


function ReadPost(){
    const {id}= useParams()
    const[post, setPost] = useState({})

   useEffect(()=>{
    blogData.forEach((postObj)=>{
        if(postObj.id === id){
            setPost(postObj)
        }
    })
   },[id]) 
   
    return(
        <div>
           <h1>{post.title}</h1> 
           <span>By{post.author}</span>
           <p>{post.discription}</p>
           <p>{post.containet}</p>
           <p>Published on {post.publishedDate}</p>

        </div>
    )
}
export default ReadPost