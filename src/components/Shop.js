import { useEffect, useContext } from 'react'
import {API_URL, API_KEY } from '../config'
import { ShopContext } from '../context'
import Loader from './Loader'
import GoodList from './GoodList'
import Card from './Card'
import BasketList from './BasketList'

export default function Shop() {

    const { setGoods, loading, order, isBasketShow} = useContext(ShopContext)

    useEffect(() => {
    fetch(API_URL, {
        headers: {
            'Authorization': API_KEY,
        } ,
    })
    .then(response => response.json()) 
    .then(data => {
        setGoods(data.featured)
        
    })
    }, [])

    return (
        <div className="container content">
            <Card quantity={order.length} />
            {loading ? <Loader/> : <GoodList/> }
        {isBasketShow && <BasketList />}
        </div>
    )
}
