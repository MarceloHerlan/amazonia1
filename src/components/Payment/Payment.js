import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct'
import './Payment.css'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import axios from '../../axios'
import {useHistory} from 'react-router-dom'
import { db } from '../../firebase'

const Payment = () => {
    const {basket}=useSelector((state)=>state.basket)
    const {user}=useSelector((state)=>state.user)
    const history=useHistory()
    const dispatch=useDispatch()
   
    const getBasketTotal=(basket)=>(basket?.reduce((amount,item)=>item.price+amount,0))

    const stripe=useStripe()
    const elements=useElements()

    const[error,setError]=useState(null)
    const[disabled,setDisabled]=useState(true)
    const[succeded,setSucceded]=useState(false)
    const[processing,setProcessing]=useState("")
    const [clientSecret,setClientSecret]=useState(true)

    useEffect(()=>{
        const getClientSecret=async()=>{
            const response=await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    },[basket])

    console.log('the secret is',clientSecret)

    const handleSubmit= async(e)=>{
        e.preventDefault()
        setProcessing(true)

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 basket:basket,
                 amount:paymentIntent.amount,
                 created:paymentIntent.created                
             })

            setSucceded(true)
            setError(false)
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange=(event)=>{
        setDisabled(event.empty)
        setError(event.error ? event.error.message:'')
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 av siempre viva</p>
                        <p>buenos aires</p>
                    </div>
                </div>
                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            img={item.img}
                            price={item.price}
                            title={item.title}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3> Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                    renderText={(value)=>(
                                         <h3>Order Total: <strong>{value}</strong></h3>                                        
                                        
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    />
                                    <button disabled={processing || disabled || succeded }>
                                    <span>{processing ? <p>Processing</p>: "Buy now"}</span>
                                    </button>

                                    {error && <div>{error}</div>}
                                </div>
                            </form>
                    </div>
                    
                    </div>
                
            </div>
        </div>
    )
}

export default Payment
