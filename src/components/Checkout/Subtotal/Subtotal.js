import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
    const history=useHistory()
    const {basket}=useSelector((state)=>state.basket)
    
    const getBasketTotal=(basket)=>(basket?.reduce((amount,item)=>item.price+amount,0))
        
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>Subtotal ( {basket?.length}items): <strong>{value}</strong></p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>this order contain
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={(e)=>history.push('/payment')}>Proceed to Chekout</button>
        </div>
    )
}

export default Subtotal
