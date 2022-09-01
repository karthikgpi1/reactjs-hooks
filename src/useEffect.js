import { React, useState } from 'react';
import CComponent from "./CComponent";
import FComponent from "./FComponent";


function UseEffect(){
    const [Flag, setFlag] = useState("true");

    return (
        <div className="useEffect">
           {/* <button onClick={()=> setFlag(!Flag)}>Toggle class component</button> */}
           <button onClick={()=> setFlag(!Flag)}>Toggle Function component</button>
        {Flag ? <FComponent /> : ""}
        </div>
    )
}

export default UseEffect;