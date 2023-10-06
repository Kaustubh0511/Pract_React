import { useEffect, useState } from "react";

const Counter = () =>{
    const [counterState,setCounterState] =  useState(true); 
    const [count,setCount] =  useState(0);

    function handleClick(){
        setCounterState(!counterState);
    }

    useEffect(() =>{
        const timer = setInterval(() =>setCount(count+1),5000);

        return(() =>{
            clearInterval(timer);
        })
    },[])

    return(
        <div>
            <button onClick={handleClick}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center align-middle">
            {counterState ? "Show Counter" : "Hide Counter"}
            </button>
            {counterState ?  "Click the button to see":<div>Counter is : {count}</div>}
        </div>
    )
}

export default Counter;