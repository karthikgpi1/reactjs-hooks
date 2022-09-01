import React, { useState, useMemo } from "react";

function UseMemo () {
    // 1. opimize expensive operation
    // 2. Referential equality

    const [counter, setCounter] = useState(1);
    // const result = factorial(counter);   // normal use but its get some extra time
    const result = useMemo(() => {
        return factorial(counter);
    }, [counter]);
    const [name, setName] = useState("");

    return (
        <div className="UseMemo">
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
                <DisplayName name={name}></DisplayName>
                {/* <p>{`my name is ${name}`}</p> */}

            </div>
        </div>
    );
}

const DisplayName = React.memo (({ name }) => {          //useMemo cannot be called at the top level
    console.log("rendered");                             // so we use React.usememo
    return <p>{`my name is ${name}`}</p>
});

// const DisplayName = ( {name} ) => {               //suppose we can use like this
//     console.log("rendered");                      //its name and counter re render so we use UseMwmo
//     return <p>{`my name is ${name}`}</p>
// }

function factorial (n) {
    let i = 0;
    while (i < 200000000) i++;
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


export default UseMemo;