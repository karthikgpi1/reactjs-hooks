

  // use state types


import { React, useState } from 'react';

function App() {
  const [name, setName] = useState("karthik");
  const [Flag, setFlag] = useState("false");
  const [steps, setSteps] = useState(0);
  const [names, setNames] = useState([]);

  function changeName (){
    console.log("clicked");       //name change type1
    return setName("white");
  
  }

  function changeName (){
    console.log("clicked");        //name change type2
    return setFlag(!Flag);
  }
   //----------------------------------
  function increment (){
    console.log("clicked");            
    return setSteps(steps + 1);
  }

  function decrement (){
    console.log("clicked");
    return setSteps(steps - 1);
  }

  //----------------------

  function addnames(e){
    e.preventDefault();
     setNames([...names,{id: names.length, name}]);
     setName("");
  }
  return (
    <div className="App">
         <div> hello,{name}</div>
         <button onClick={changeName}>Click me</button>
         <hr></hr>
         
         <div> hello,{Flag ? "" : name}</div>
         <button onClick={changeName}>Click me</button>
         <hr></hr>

         
         <button onClick={increment}>+</button>
         <div>{steps}</div>
         <button onClick={decrement}>-</button>
         
         <hr></hr>
         <form onSubmit={addnames}>
          <input type="text" value={name} placeholder="add names"
           onChange={(e) => setName(e.target.value)}/>
          <button>submit</button>
         </form>
         <hr></hr>
         <ul>
          {names.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
         </ul>
    </div>
  );
}

export default App;
