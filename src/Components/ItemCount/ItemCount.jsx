import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({initial, stock, add}) => {


    const [count, setCount] = useState(initial);


    const increment= () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={ decrement }> - </button>
                <p> {count} </p>
                <button onClick={ increment }> + </button>
            </div>
            {stock > 0 && <button onClick={()=> add(count)}> Agregar al Carrito </button>}
            <Link to="/" > Seguir Comprando</Link>
        </>
      )
}

export default ItemCount