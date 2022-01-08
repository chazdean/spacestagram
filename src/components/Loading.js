import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import "./Loading.css"

export default function Loading(props) {
    return (
        <div className="loading__icon">
            <ClipLoader 
                size={40} 
                color={"000000"} 
                loading={props.loading} 
                speedMultiplier={1.5} 
            />
            <p>Loading</p>
        </div>
    ) 
} 