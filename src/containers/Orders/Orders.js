import React, { Component } from "react"
import {connect} from 'react-redux'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component{

    // state = {
    //     orders : [],
    //     loading : true
    // }

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId)
        // axios.get('/orders.json')
        //     .then(res => {
        //         const fetchOrders =[];
        //         for(let key in res.data) {
        //             fetchOrders.push({
        //                 ...res.data[key],
        //                 id: key
        //             })
        //         }
        //         this.setState({
        //             loading:false,
        //             orders:fetchOrders
        //         })
        //     })
        //     .catch(err => {
        //         this.setState({
        //             loading:false
        //         })
        //     })
    }

    render() {
        let orderLoading = <Spinner></Spinner>

        if(!this.props.loading){
            orderLoading = (
                this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}>
                    </Order>
                ))
            )
        }
        return(
            <div>
                {orderLoading}
            </div>
        )
    }
}

const stateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(stateToProps,mapDispatchToProps) (withErrorHandler(Orders, axios));