import axios from 'axios';

const initialState = {
    // products, productsInCart: [], product_id
};

// Action types
const DETAILS = "DETAILS";
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";


// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case DETAILS: 
            return state.product_id
        case ADD_TO_CART:
            return state.productsInCart.includes(action.productId)
                ?
                    state
                :
                    {
                        products: state.products,
                        productsInCart: [...state.productsInCart, action.productId]
                    };
        case CHECKOUT:
            return initialState;
        default: return state;
    }
}

// Action creators

export function productDetails() {
    let getDetails = axios.get('/api/product:id').then(res => {
        return res.data    
    })
}

export function addToCart( productId) {
    return {productId, type: ADD_TO_CART};
}

export function checkout() {
    return {type: CHECKOUT};
}
