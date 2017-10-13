const initialState = {
    // products, productsInCart: []
};

// Constants
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT"


// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
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
export function addToCart( productId) {
    return {productId, type: ADD_TO_CART};
}

export function checkout() {
    return {type: CHECKOUT};
}
