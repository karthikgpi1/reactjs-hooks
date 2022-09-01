import React, {useState, useEffect } from "react";

function FComponent (){
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");
    
    useEffect(() => {
        console.log("Component Mounted or Updated");
        const interval = setInterval(showDate, 1000);

        return () => {
            console.log("cleanup of interval");
            clearInterval(interval);
        };
        
    }, [time]);

    const showDate = () => {
        setTime(new Date().toString());
    }; 

    return (
        <div>
            <div>{time}</div>
            <button onClick={showDate}>show date</button>
            <div>message</div>
            <button onClick={()=> setMessage("changed Functional component")}>
            change message</button>
        </div>
    );
}

export default FComponent;