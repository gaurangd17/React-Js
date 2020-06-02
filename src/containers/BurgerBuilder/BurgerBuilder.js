import React, {Component} from 'react'
import {connect} from 'react-redux'

import Aux from '../../hoc/Auxx/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
// import * as actionTypes from '../../store/actions/actionTypes'

export class BurgerBuilder extends Component {

    state = {
        // ingredients : null,
        // totalPrice : 100,
        // purchasable: false,
        purchasing : false,
        // loading : false,
        // error : false
    }

    componentDidMount() {
        this.props.onInitIngredients()
        // axios.get('https://react-burger-app-49b14.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({
        //             ingredients : response.data
        //         })
        //     })
        //     .catch(error => {
        //         this.setState({
        //             error :true
        //         })
        //     })
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            }, 0);

        // this.setState({purchasable: sum > 0});
        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice =  this.state.totalPrice;
    //     const newPrice = priceAddition + oldPrice;
    //     this.setState({
    //         totalPrice:newPrice,
    //         ingredients:updatedIngredients
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount - 1;
    //     if(oldCount <= 0){
    //         return
    //     }

    //     const updatedIngredients = {
    //         ...this.props.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice =  this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({
    //         totalPrice:newPrice,
    //         ingredients:updatedIngredients
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // }

    purchaseHandler = () => {
        if(this.props.isAUthenticated){
            this.setState({
                purchasing : true
            })
        } else {
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing : false
        })
    }

    purchaseContinueHandler = () => {
    //    const queryParams = [];
    //     for(let i in this.props.ingredients){
    //         queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
    //     }
    //     queryParams.push('price='+ this.props.totalPrice);
    //     const queryString = queryParams.join('&');

    //     this.props.history.push({
    //         pathname : '/checkout',
    //         search : '?' + queryString
    //     })
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }

    render(){
        const disabledInfo = {
            ...this.props.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        // if(this.state.loading){
        //     orderSummary = <Spinner/>
        // }

        let burger = this.props.error ? <p style={{textAlign:"center"}}> Ingredients can't be loaded!!!</p> : <Spinner/>

        if(this.props.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls
                        ingredientAdded = {this.props.onIngredientAdded}
                        ingredientRemoved = {this.props.onIngredientRemoved}
                        disabled = {disabledInfo}
                        // purchasable={this.state.purchasable}
                        purchasable = {this.updatePurchaseState(this.props.ingredients)}
                        order={this.purchaseHandler}
                        price={this.props.totalPrice}
                        authenticated={this.props.isAUthenticated}/>
                </Aux>
            )
            orderSummary = <OrderSummary 
            ingredients={this.props.ingredients}
            price={this.props.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}/>;
        }

        // if(this.state.loading){
        //     orderSummary = <Spinner/>
        // }

        return(
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAUthenticated: state.auth.token!==null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(actions.addIngredients(ingredientName)),
            // {type: actionTypes.ADD_INGREDIENT,ingredientName: ingredientName}),
        onIngredientRemoved: (ingredientName) => dispatch(actions.removeIngredients(ingredientName)),
            // {type: actionTypes.REMOVE_INGREDIENT,/ingredientName: ingredientName})
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axios));