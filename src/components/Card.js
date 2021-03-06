import { useContext } from "react"
import { ShopContext } from "../context"

export default function Card(props){
    const { order, handleBasketShow = Function.prototype} = useContext(ShopContext)
    const quantity = order.length 
    return (
        <div className="cart blue darken-4 white-text " onClick={handleBasketShow} >
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className="card-quantity">{quantity}</span> : null }
        </div>
    )
}                      