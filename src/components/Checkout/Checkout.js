import React from 'react'
import './Checkout.css'
import CheckOutProduct from '../Checkout/CheckoutProduct/CheckoutProduct'
import Subtotal from '../Checkout/Subtotal/Subtotal'
import { useSelector } from 'react-redux'



function Checkout() {
    const{basket}=useSelector((state)=>state.basket)
    const {user}=useSelector((state)=>state.user)
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className='checkout__add' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                <div>
                    <h3>
                        hola {user?.email}
                    </h3>
                <h2 className="checkout__title">
                    your shopping basket
                </h2>
                {basket.map(item=>(
                    <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    />
                ))}
            </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout
