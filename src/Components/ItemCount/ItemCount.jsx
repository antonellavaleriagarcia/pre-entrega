import React from "react";
import { useState } from "react";

const ItemCount = () => {

    let maxStock = 10;

    const [count, setCount] = useState(1);

    const increment = () => {
        if(count<maxStock){
            setCount(count+1);
        }
        
    }
    const decrement = () => {
        if(count>1){
            setCount(count-1);
        }
        
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount