import React from 'react'
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = ({productos}) => {
  return (
    <div className='col-12 items'>
        {productos.map( prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList