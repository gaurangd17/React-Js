import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utitlity'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
            // {...action.orderData,id: action.orderId}
            // {...state,purchased: true,loading: false,orders: state.orders.concat(newOrderData)}
        case actionTypes.PURCHASE_BURGER_FAIL: return updateObject(state,{loading: false})
            // {...state,loading: false}
        case actionTypes.PURCHASE_BURGER_START: return updateObject(state,{loading: true})
            // {...state,loading: true}
        case actionTypes.PURCHASE_INIT: return updateObject(state, {purchased: false})
        // {...state,purchased: false}
        case actionTypes.FETCH_ORDERS_START: return updateObject(state,{loading:true})
        // {...state,loading: true}
        case actionTypes.FETCH_ORDERS_SUCCESS: return updateObject(state, {orders: action.orders,
                                                                            loading: false})
        // {...state,orders: action.orders,loading: false}
        case actionTypes.FETCH_ORDERS_FAILED: return updateObject(state,{loading:false})
            // {...state,loading: false}
        default: return state;
    }
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrderData = updateObject(action.orderData, {id: action.orderId})
    return updateObject(state,{ purchased: true,
                                loading: false,
                                orders: state.orders.concat(newOrderData)
                                }
                        )
}

export default reducer;