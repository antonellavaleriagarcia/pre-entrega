import { useState, createContext } from "react";

export const CartWidgetContext = createContext({cart: [], total: 0, QuaTotal: 0});

export const CartWidget = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [quaTotal, setQuaTotal] = useState(0);

    const addproduct = (item, cant) => {
        const incart = cart.find(prod => prod.item.id === item.id)

        if(!incart){
            setCart(prev =>[...prev, {item, cant}]);
            setQuaTotal(prev => prev + cant);
            setTotal(prev=> prev + (item.precio * cant));
        }else{
            const newcart = cart.map(prod =>{
                if(prod.item.id === item.id) {
                    return {...prod, cant: prod.cant + cant}
                }else{
                    return prod; 
                }
            });
            setCart(newcart);
            setQuaTotal(prev => prev + cant);
            setTotal(prev=> prev + (item.precio * cant));
        }
    }

    const deletedProd = (id) => {
        const prodDeleted = cart.find(prod => prod.item.id === id) 
        const newCart = cart.filter(prod => prod.item.id !== id);
        setCart(newCart);
        setQuaTotal(prev => prev - prodDeleted.cant);
        setTotal(prev=> prev - (prodDeleted.item.precio + prodDeleted.cant));
    }
     
    const clearCart = () => {
        setCart([]);
        setQuaTotal(0);
        setTotal(0);
    }

    return(
        <CartWidgetContext.Provider value={{cart, addproduct, deletedProd, clearCart, total, quaTotal}}>
         {children}
        </CartWidgetContext.Provider>
    )
}
