import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

const Order = ({order}) => {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                hideButton
                />
            ))}
            <CurrencyFormat
            renderText={(value)=>(
                <h3 className='order__total'>Order Total: <strong>{value}</strong></h3>                                        
            
            )}
            decimalScale={2}
            value={order.data.amount/100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}                                    
            />
   

        </div>
    )
}

export default Order
