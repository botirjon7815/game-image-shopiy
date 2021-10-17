import BaskeItem from './BaskeItem'

import { useContext } from 'react'
import { ShopContext } from '../context'

export default function BasketList() {


    const {order = [] , handleBasketShow = Function.prototype} = useContext(ShopContext)

    const orderItem = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return(

        <div className="bsk">
        <ul className="collection basket-list">
                    <li className="collection-item active">
                    Basket
                    </li>
                    {order.length ? order.map(item => {
                        return (
                            <BaskeItem key={item.id} {...item} />
                        )
                    }) : <li className="collection-item">Basket is empty</li>  }
                    <li className="collection-item active">
                        Total Price: {orderItem} <b>$</b>
                    </li>
                    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
                </ul>
        </div>

    )
}