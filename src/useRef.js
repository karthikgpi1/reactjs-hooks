

import { React, useState, useRef, useEffect} from 'react';

function UseRef() {

    // 1.Dom reference
    // 2. useRef for storing the previous state
    // 3. hold mutable value prevent re-render of component

  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputEl = useRef("");
  const previousCounterRef = useRef("");
  console.log(inputEl);
 
  const resetInput = () => {
    setName("")
    inputEl.current.focus();
    console.log(inputEl.current.value);
    inputEl.current.value = "karthik";
  };

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);

  return (
    <div className="UseRef">
        <div>
          <input ref={inputEl} name="name" type="text" value={name} autoComplete="off"
           onChange={(e) => setName(e.target.value)}/>
          <button onClick={resetInput}>reset</button>
          
        </div>
        <div>my name is {name}</div>
        <div>
        <h1>random counter : {counter}</h1>
        {typeof previousCounterRef.current !== "undifined" && (
            <h2>previous Counter : {previousCounterRef.current}</h2>
        )}
        <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>generate number</button>
        </div>
    </div>
   
  );
}

export default UseRef;
