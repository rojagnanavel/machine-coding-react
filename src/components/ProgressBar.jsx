import "../App.css";
import { useState, useEffect } from "react";
const Progressbar =({progress})=>{
    const [applyAnimation, updateApplyAnimation] = useState(0);
    useEffect(() =>{
        setTimeout(() =>{
            updateApplyAnimation(progress)
        },100)
    },[progress])
    
    return (
        <div className="outer">
            <div className="inner" 
            style={{width: `${applyAnimation}%`, transform: `translateX(${applyAnimation-100}%)`}}
            role="progressbar"
            aria-valuenow={applyAnimation}
            aria-valuemin="0"
            aria-valuemax="100"
            >{applyAnimation}%</div>
        </div>
        )
}

export default Progressbar;