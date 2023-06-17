import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import { CartWidgetContext } from '../../Context/CartWidgetContext';
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [addQua, setAddQua] = useState(0);

    const {addproduct} = useContext(CartWidgetContext);

    const handlerqua = (cant) => {
        setAddQua(cant);

        const item = {id, nombre, precio};
        addproduct(item, cant)
    }

    
  
    return (
        <div className='detail'>
            <div className='col-5 imgdetail'>
                <img src= {img} alt={nombre} />
            </div>
            <div className='col-7 textdetail'>
                <h2>{id} - {nombre} </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
                <h3>$ {precio} </h3>
            </div>
            {
                addQua > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount initial={1} stock={stock} add={handlerqua} />)
            }
        </div>
    )
  
}

export default ItemDetail