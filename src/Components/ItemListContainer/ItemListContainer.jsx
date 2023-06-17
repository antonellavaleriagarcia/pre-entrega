import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
//import { getAll, getCategory } from '../Asyncmock/Asyncmock';
import { useParams } from 'react-router-dom'
import './ItemListContainer.css';
import {collections, getDocs, where, query, collection} from 'firebase/firestore';
import {db} from '../../Services/config';

const ItemListContainer = () => {
 
    const [items, setItems] = useState([]);

    const { idCat } = useParams();

    useEffect( () => {
        const misproductos = idCat ? query(collection(db, "productos"), where("idCat", "==", idCat)) : collection(db, "productos")
        getDocs(misproductos)
        .then(res => {
          const nuevosproductos = res.docs.map(doc =>{
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setItems(nuevosproductos);
        })
        .catch(error => console.log(error))
    }, [idCat])
  
    return (
        <>
          <div className='todo'>
            <ItemList productos={items} />
          </div>
        </>
      )

}

export default ItemListContainer