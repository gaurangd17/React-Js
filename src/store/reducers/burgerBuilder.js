import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utitlity'

const initialState = {
    ingredients: null,
    totalPrice: 50,
    // loading : false,
    error : false,
    building: false
}

const INGREDIENT_PRICES = {
    salad : 50,
    cheese : 30,
    bacon : 150,
    meat : 200
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredients(state,action)
            // {...state, ingredients : {...state.ingredients,[action.ingredientName] : state.ingredients[action.ingredientName] + 1},totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ingredientName]   }
        case actionTypes.REMOVE_INGREDIENT: return removeIngredients(state, action)
            // {...state, ingredients : {...state.ingredients,[action.ingredientName] : state.ingredients[action.ingredientName] - 1},totalPrice : state.totalPrice - INGREDIENT_PRICES[action.ingredientName]}
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action)
        // {...state,ingredients: {salad: action.ingredients.salad,meat: action.ingredients.meat,cheese: action.ingredients.cheese,bacon: action.ingredients.bacon},totalPrice: 50,  error: false}
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state,{error: true}) 
        // {...state,error: true}
        default: return state 
    }
}

const addIngredients = (state,action) => {
    const updateIngredient = {[action.ingredientName] : state.ingredients[action.ingredientName] + 1}
    const updateIngredients = updateObject(state.ingredients, updateIngredient)
    const updatedState = {
        ingredients: updateIngredients,
        totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState) 
}

const removeIngredients = (state, action) => {
    const updatedIngredient = {[action.ingredientName] : state.ingredients[action.ingredientName] - 1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedStates = {
        ingredients: updatedIngredients,
        totalPrice : state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true   
    }
    return updateObject(state, updatedStates) 
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            meat: action.ingredients.meat,
            cheese: action.ingredients.cheese,
            bacon: action.ingredients.bacon},
        totalPrice: 50,  
        error: false,
        building: false
})}

export default reducer