import React, { useState, useEffect } from 'react'
import "./Post.css";

export default function Post(props) {

    const [liked, setLike] = useState(()=>{
        const localData = localStorage.getItem(props.id);
        return localData ? JSON.parse(localData) : false;
    })

    useEffect(() => {
        localStorage.setItem(props.id, JSON.stringify(liked))
    }, [liked])
 
    function toggleLike() {
        liked ? setLike(false) : setLike(true)
    }

    return (
        <section className="post">
            <img className="post__image" src={props.img} alt=""></img>
            <h1 className="post__text">{props.roverName} - {props.cameraName}</h1>
            <div className="post__footer">
                <p>{props.date}</p>
                <i className={`fas fa-heart ${liked ? 'fa-heart__selected':''}`} onClick={toggleLike}></i>
            </div>
        </section>
    )
} 