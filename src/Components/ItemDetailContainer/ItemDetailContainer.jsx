import React from 'react'
import { getOne } from '../Asyncmock/Asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        getOne(idItem)
            .then(res => setProduct(res))
    }, [idItem])

   
    return (
    <div>
        {product ? <ItemDetail {...product} />: <p>cargando</p>}
    </div>
  )
}

export default ItemDetailContainer