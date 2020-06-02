import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orederData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orederData: orederData
    }
}

export const purchaseBurgerFail = (err) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: err
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return{
        type: actionTypes.PURCHASE_BURGER,
        orderData: orderData,
        token: token
    }
    // console.log('token', token)
    // const url = '/orders.json?auth=' + token;
    // return dipatch => {
    //     dipatch(purchaseBurgerStart())
    //     axios.post(url, orderData)
    //         .then(response => {
    //             dipatch(purchaseBurgerSuccess(response.data.name, orderData))
    //         })
    //         .catch(error => {
    //             dipatch(purchaseBurgerFail(error))
    //         });
    // }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFailed = (err) => {
    return{
         type: actionTypes.FETCH_ORDERS_FAILED,
         error: err
    }
}

export const fetchOrdersStart = () => {
    return{
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return{
        type: actionTypes.FETCH_ORDERS,
        token: token,
        userId: userId
    }
    // return dispatch => {
    //     dispatch(fetchOrdersStart())
    //     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    //     axios.get('/orders.json' + queryParams)
    //         .then(res => {
    //             const fetchOrders =[];
    //             for(let key in res.data) {
    //                 fetchOrders.push({
    //                     ...res.data[key],
    //                     id: key
    //                 })
    //             }
    //             dispatch(fetchOrdersSuccess(fetchOrders))
    //         })
    //         .catch(err => {
    //             dispatch(fetchOrdersFailed(err))
    //         })
    // }
}