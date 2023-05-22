import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getAll, getCategory } from '../Asyncmock/Asyncmock';
import { useParams } from 'react-router-dom'
import './ItemListContainer.css';

const ItemListContainer = () => {
 
    const [productos, setProductos] = useState([]);

    const { idCat } = useParams();
  
    useEffect(() => {
  
      const funcionProductos = idCat ? getCategory : getAll;
  
      funcionProductos(idCat)
        .then(res => setProductos(res))
        .catch(error => console.error(error))
    }, [idCat])
    
    
    return (
        <>
          <div className='todo'>
            <ItemList productos={productos} />
          </div>
        </>
      )

}

export default ItemListContainer