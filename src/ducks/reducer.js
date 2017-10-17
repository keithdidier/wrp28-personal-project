import axios from 'axios';

const initialState = {
    products: [],
    productsInCart: [],
    details: {}
};

// Action types
const DETAILS = "DETAILS";
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";


// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DETAILS + "_FULFILLED":
            return Object.assign({}, state, {details: action.payload})
        case ADD_TO_CART:
            let productsAdded = state.productsInCart.slice();
            productsAdded.push(action.payload);
                return Object.assign({}, state, {productsInCart: productsAdded}) 
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

export function addToCart(product) {
    return {  
        type: ADD_TO_CART,
        payload: product 
    };
}

export function checkout() {
    return { type: CHECKOUT };
}
