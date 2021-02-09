import React from 'react'
import { useDispatch } from 'react-redux'
import './Product.css'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 100) / 100, (x - window.innerWidth / 100) / 100, 1.1]
const trans = (x, y, s) => `perspective(0px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



const Product = ({title,img,price,id}) => {
 const dispatch=useDispatch()
 const [anime,setAnime]=useSpring(()=>({ xys: [0, 0, 0.8], config: { mass: 5, tension: 550, friction: 50 } }))
 
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{ 
                id:id,               
                title:title,
                img:img,
                price:price,               
            }           
        } 
        ) 
    } 
    return (
        <animated.div className="product"
        onMouseMove={({ clientX: x, clientY: y }) => setAnime({ xys: calc(x, y) })}
        onMouseLeave={() => setAnime({ xys: [1, 1, 0.8] })}
        style={{ transform: anime.xys.interpolate(trans) }}>
        <div className="product__info">
            <p>{title} </p>
            <p className="product__price"><small>$<strong>{price}</strong></small></p>
 
        </div>
        <img src={img} alt=""/>
        <button onClick={addToBasket} >Add to basket</button>
        
        </animated.div>
    )
}

export default Product
