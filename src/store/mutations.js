export const SET_PRODUCTS = (state,products) => {
    state.products = products;
}

export const SET_PRODUCT = (state,product) => {
    state.product = product;
}

export const ADD_TO_CART = (state,{product,qty}) => {
    let product_in_cart = state.cart.find((item) => {
        return item.product.id === product.id
    })

    if(product_in_cart){
        product_in_cart.qty += qty;
        return;
    }
    state.cart.push({product,qty})
}

export const SET_CART = (state, cartItems) => {
    state.cart = cartItems;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter( item => {
        return item.product.id !== product.id
    })
}