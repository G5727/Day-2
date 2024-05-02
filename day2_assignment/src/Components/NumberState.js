import { useState } from "react";
function NumberState()
{

    //useState defines the current state of the component
    //Currently it is set to 0 and function that updates values is provided (setCount)
    //function incrementCnt will increase the number
    //function decrementCnt will decrese the number
    //function reset will reset number to 0

    let [count, setCount] = useState(0);

    //Function defined to increment the NUMBER
    function incrementCnt() {
        //count++;
        setCount(count+1);
        console.log(count);
    }
    //Function defined to decrement the NUMBER
    function decrementCnt() {
        //count++;
        setCount(count-1);
        console.log(count);
    }
    //Function defined to reset the NUMBER to 0
    function reset()
    {
        setCount(0);
    }

    return(
        <div>
            <h1>The current state of Number is {count}</h1>
            <button onClick={incrementCnt}>Increment</button>
            <button onClick={decrementCnt}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default NumberState;