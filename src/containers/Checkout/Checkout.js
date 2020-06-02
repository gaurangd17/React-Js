import React, {Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import CheckoutSUmmary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    // state = {
    //     ingredients : null,
    //     totalPrice : 0
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    
    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;

    //     for(let param of query.entries()){
    //         // ['salad', '1']
    //         if(param[0]==='price'){
    //             price = param[1]
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }               
    //     }
    //     this.setState({
    //         ingredients : ingredients,
    //         totalPrice : price
    //     })
    // }

    render(){
        let summary = <Redirect to='/'></Redirect>
        if(this.props.ingredients){
            const purchasedRedirect= this.props.purchased ? <Redirect to='/'/> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSUmmary 
                        ingredients={this.props.ingredients}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}></CheckoutSUmmary>
                    <Route path={this.props.match.path + '/contact-data'} 
                        // render={(props) => (<ContactData 
                        //                     ingredients={this.props.ingredients}
                        //                     price={this.state.totalPrice}
                        //                     {...props}></ContactData>)}
                        component={ContactData}/>
                </div>
            )
        }
        return summary
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);