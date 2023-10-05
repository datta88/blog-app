import React from "react";
import blogData from './../../confing/confing.json';
import PreviewPostCard from "../../componant/PreviewPostCard/PreviewPostCard";

function Posts() {
    return (
        <>
            <div>
                <h1>Posts</h1>

                {
                    blogData.map((post, i)=>{
                        return <PreviewPostCard key={i} id={post.id} title={post.title} discription={post.discription} />
                    })
                }
            </div>

        </>

    )
}
export default Posts