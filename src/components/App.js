
import React, {useState} from "react";


const App = () => {
    const [input , setInput] = useState(' ')
    const oninput = (e) =>{
        const{value} = e.target;
        setInput(value);
    }
    const onClear = () => {
        setInput(' ')
    }

  return (
    <div>
     <input value ={input} onChange={oninput} />
     {!!input.length&&<p>Hello{input}!</p>}
     <button onClick={onClear}></button>
    </div>
  )
}

export default App
