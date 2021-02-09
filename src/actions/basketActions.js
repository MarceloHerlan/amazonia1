
const addBasket=()=>async (dispatch,getState)=>{
    dispatch({
        type:'ADD_TO_BASKET',
        payload:{
            id,
            title,
            img,
            price
        }
    })
}

export default  addBasket