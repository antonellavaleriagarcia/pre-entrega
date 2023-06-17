import { useContext } from "react"
import { CartWidgetContext } from "../../Context/CartWidgetContext"

const CartItem = ({item, cant}) => {
    const {deletedProd} = useContext(CartWidgetContext);
  return (
    <div>
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cant} </p>
        <p>Precio: {item.precio} </p>
        <button  onClick={()=> deletedProd(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem