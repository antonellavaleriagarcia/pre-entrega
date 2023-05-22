import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='divcard col-4'>
      <Card style={{ width: '22rem' }} className='col-12 tamaño-card'>
        <Card.Img className="img-card" variant="top" src={img} alt={nombre} />
        <Card.Body className='infocard'>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            ${precio}
          </Card.Text>
          <Link to={`/item/${id}`}><Button className='boton' variant="outline-secondary"> Ver</Button> </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item