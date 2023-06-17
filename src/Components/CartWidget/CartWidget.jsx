import React from "react";
import '../CartWidget/CartWidget.css';
import { CartWidgetContext } from '../../Context/CartWidgetContext';
import { useContext } from "react";
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {quaTotal} = useContext(CartWidgetContext);
    return (
        <>
            <Link to='cart'>
                🛒 {quaTotal > 0 && <span> {quaTotal} </span> }
            </Link>
        </>
    )
}

export default CartWidget