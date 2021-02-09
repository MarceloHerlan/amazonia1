import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import basketReducer from '../reducers/basketReducer'
import userReducer from '../reducers/userReducer'


const initialState={}
const reducer=combineReducers({
 basket:basketReducer,
 user:userReducer,
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store=createStore (
  reducer,
  initialState,
  //composeEnhancer(applyMiddleware(thunk))
  )

export default store;
