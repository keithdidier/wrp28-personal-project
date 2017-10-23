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
            console.log(res)
            return res.data.id
        })
    }
}

export function addToCart(product, user_id) {
    console.log(product)
    let productsAdded = axios.post(`/api/cart/${product.product_id}/${user_id}`).then(res => {
        console.log(res.data)
    })
    return {  
        type: ADD_TO_CART,
        payload: product 
    };
}

export function getItemsInCart(product) {
    let ItemsInCart = axios.get('/api/cart/items/:user_id').then(res => {
        return res.data
    })
    return {
        type: GET_ITEMS_IN_CART,
        payload: product
    }
}

export function removeFromCart() {

}

export function checkout() {
    return { type: CHECKOUT };
}
