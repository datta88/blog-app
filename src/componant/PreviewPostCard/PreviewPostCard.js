import React from "react";
import "./PreviewPostCard.css";
import { Link } from "react-router-dom";



function PreviewPostCard({id, title, author, discription,containet }) {
    return (
        <>
        
            <div>PreviewPostCard</div>
            <div className="preview-post-card">
                <h2>{title}</h2>
                <span>By{author}</span>
                <p>{discription}</p>
                <p>{containet}</p>
                <Link to={`/post/read/${id}`}>Read More</Link>
            </div>
        </>
    )
}
export default PreviewPostCard