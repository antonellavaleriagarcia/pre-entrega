import React from 'react'
import { CartWidgetContext } from '../../Context/CartWidgetContext';
import { useContext } from 'react';
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
   
    const {cart, clearCart, total, QuaTotal} = useContext(CartWidgetContext);

    if(QuaTotal === 0 ) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Ver productos</Link>
            </>
        )
    }

    return (
        <>
            {cart.map(prod => <CartItem key = {prod.id} {...prod} />)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad total: {QuaTotal}</h3>
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
        </>
    )
}

export default Cart