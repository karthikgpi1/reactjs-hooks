import React, { useState, useMemo, useEffect, useCallback } from "react";

function UseCallback () {
    // 1. Memoize the function (useCallback) vs Memoize the value (useMemo)
    // 2. referential equality for functions

    const [counter, setCounter] = useState(1);
    // const result = factorial(counter);   // normal use but its get some extra time
    const result = useMemo(() => {
        return factorial(counter);
    }, [counter]);

    console.log("useMemo :", result);

    const [name, setName] = useState("");



    const displayName = useCallback(() => {
        return name;
    }, [name]);

    console.log("useCallback :", displayName);

    return (
        <div className="UseCallback">
            <h1>
                Factorial of {counter} is 
                <span>{result}</span>
            </h1>
            <div>
                <button onClick={() => setCounter(counter + 1)}>increment</button>
                <button onClick={() => setCounter(counter - 1)}>decrement</button>
            </div>
            <hr></hr>
            <div>
                <div>
                  <label>Enter name</label>
                </div>
                <input
                    type="text"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <hr></hr>
                <DisplayName displayName={displayName}></DisplayName>
                {/* <p>{`my name is ${name}`}</p> */}

            </div>
        </div>
    );
}

const DisplayName = ({ displayName }) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        
         setValue(displayName());
         console.log("component rendered");
        
    }, [displayName]);

    return <p>{`my name is ${value}`}</p>;
};

// const DisplayName = React.memo (({ name }) => {          //useMemo cannot be called at the top level
//     console.log("rendered");                             // so we use React.usememo
//     return <p>{`my name is ${name}`}</p>
// });

// const DisplayName = ( {name} ) => {               //suppose we can use like this
//     console.log("rendered");                      //its name and counter re render so we use UseMwmo
//     return <p>{`my name is ${name}`}</p>
// }

function factorial (n) {
    let i = 0;
    while (i < 20000000) i++;
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


export default UseCallback;