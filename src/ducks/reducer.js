import axios from 'axios';

const initialState = {
    products: [],
    productsInCart: [],
    details: {},
    userId: null
};

// Action types
const DETAILS = "DETAILS";
const GET_USER = "GET_USER";
const ADD_TO_CART = "ADD_TO_CART";
const GET_ITEMS_IN_CART = "GET_ITEMS_IN_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHECKOUT = "CHECKOUT";


// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DETAILS + "_FULFILLED":
            return Object.assign({}, state, {details: action.payload});
        case GET_USER + "_FULFILLED":
            return Object.assign({}, state, {userId: action.payload});        
        case ADD_TO_CART:
            let productsAdded = state.productsInCart.slice();
            productsAdded.push(action.payload);
                return Object.assign({}, state, {productsInCart: productsAdded});
        case GET_ITEMS_IN_CART + '_FULFILLED':
                return Object.assign({}, state, {productsInCart: action.payload});
        case REMOVE_FROM_CART:

        case CHECKOUT:
            return initialState;
        default: return state;
    }
}

// Action creators

export function getDetails(id) {
    let getDetails = axios.get(`/api/product/${id}`).then(res => {
        return res.data
    })
    return {
        type: DETAILS,
        payload: getDetails
    }
}

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then(res => {
            return res.data.id
        })
    }
}

export function addToCart(product, user_id) { 
    let productsAdded = axios.post(`/api/cart/${product.product_id}/${user_id}`).then(res => {
    })
    return {  
        type: ADD_TO_CART,
        payload: productsAdded 
    };
}

export function getItemsInCart(user_id) {
    let itemsInCart = axios.get(`/api/cart/items/${user_id}`).then(res => {
        return res.data
    })
    return {
        type: GET_ITEMS_IN_CART,
        payload: itemsInCart
    }
}

export function removeFromCart() {

}

export function checkout() {
    return { type: CHECKOUT };
}
