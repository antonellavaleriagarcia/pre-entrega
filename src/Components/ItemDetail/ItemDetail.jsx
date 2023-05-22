import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  
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
        </div>
    )
  
}

export default ItemDetail