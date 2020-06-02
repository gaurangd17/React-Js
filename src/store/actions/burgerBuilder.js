import * as actionTypes from './actionTypes'
// import axios from '../../axios-orders'

export const addIngredients = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT, 
        ingredientName: ingredientName
    }
}

export const removeIngredients = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT, 
        ingredientName: ingredientName
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return{
        type: actionTypes.INIT_INGREDIENTS
    }
    // return dispatch => {
    //     axios.get('https://react-burger-app-49b14.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             dispatch(setIngredients(response.data))
    //         })
    //         .catch(error => {
    //             dispatch(fetchIngredientsFailed())
    //         })
    // }
}