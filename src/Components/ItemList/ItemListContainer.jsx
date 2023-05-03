import React from 'react'
import '../ItemList/ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <h2 className='bienvenida'>{props.greeting}</h2>
  )
}

export default ItemListContainer