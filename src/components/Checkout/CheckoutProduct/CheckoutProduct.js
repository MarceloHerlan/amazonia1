import React from 'react'
import { useDispatch } from 'react-redux'
import './CheckoutProduct.css'


const CheckoutProduct = ({id,img,title,price,hideButton}) => {
    const dispatch=useDispatch()

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    }

    return (
        <div className='checkoutProduct'>
            <img src={img} className='checkout__img'/>
            <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                {!hideButton && 
                <button onClick={removeFromBasket}>remove</button>
                }
                </div>
            
        </div>
    )
}

export default CheckoutProduct
