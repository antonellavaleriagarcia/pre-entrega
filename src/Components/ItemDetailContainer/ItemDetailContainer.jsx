import React from 'react'
//import { getOne } from '../Asyncmock/Asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import {getDoc, doc} from "firebase/firestore";
import {db} from '../../Services/config';

const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState(null);

    const { idItem } = useParams();


    useEffect( () => {
        const nuevoDoc = doc(db, "productos", idItem);
        
        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const newProduct = {id: res.id, ...data}
            setProduct(newProduct);
            })
            .catch(error =>console.log(error))

    }, [idItem]) 

   
    return (
    <div>
        {product ? <ItemDetail {...product} />: <p>cargando</p>}
    </div>
  )
}

export default ItemDetailContainer