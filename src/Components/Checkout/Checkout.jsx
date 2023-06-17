import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { db } from '../../Services/config'
import { collection, addDoc } from 'firebase/firestore'
import { CartWidgetContext } from '../../Context/CartWidgetContext';


const Checkout = () => {
    
    const {cart, clearCart} = useContext(CartWidgetContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar todos los campos");
            return;
        }
        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }
        const orden ={
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cant
            })),
            total: cart.reduce((total, producto) => total + producto.item.precio * producto.cant, 0),
            nombre,
            apellido,
            telefono, 
            email,
        };
        addDoc(collection(db, "ordenes"), orden)
        .then(docRef => {
            setOrdenId(docRef.id);
            clearCart();
            setError("");
        })
        .catch((error) => {
            setError("Se produjo un error al crear la orden");
        })
    }

  return (
    <>
        <h2>Checkout</h2>
        <Form onSubmit={ manejadorFormulario }>
            {cart.map(producto => (
                <div key={producto.item.id}>
                    <p>{producto.item.nombre} - {producto.cant}: Precio: ${producto.item.precio}</p>
                </div>
            ))}
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} requiered/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} requiered/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)} requiered/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} requiered/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Repetir Email</Form.Label>
                <Form.Control type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} requiered/>
            </Form.Group>
            {error && <p style={{color: "red"}}> {error} </p> }
            <button type='submit'> Finalizar compra </button>
        </Form>
        {
            ordenId && (
                <strong> Gracias por tu compra. Tu numero de irden es {ordenId} </strong>
            )
        }
    </>
  )
}

export default Checkout