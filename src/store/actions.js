import axios from "axios";

export const getProducts = ({commit}) => {
    axios.get('http://ecom-api.test/api/products')
    .then((res) => {
        console.log(res);
        commit('SET_PRODUCTS',res.data);
    })
    .catch((e) => {
        console.log(e.response.data.error)
    })
}

export const getProduct = ({commit},product_id) => {
    axios.get('http://ecom-api.test/api/products/'+product_id)
    .then((res) => {
        commit('SET_PRODUCT',res.data)
    })
    .catch((e) => {
        console.log(e.response.data.error)
    })
}

export const addProductToCart = ({commit}, {product,qty}) => {
    commit('ADD_TO_CART',{product,qty})
    axios.post('http://ecom-api.test/api/cart/',{
        product_id: product.id,
        qty,
    })
}

export const getCartItem = ({commit}) => {
    axios.get('http://ecom-api.test/api/cart/')
    .then((response) => {
        commit('SET_CART',response.data);
    })
}


export const removeProductFromCart = ({commit},product) => {
    commit('REMOVE_PRODUCT_FROM_CART',product)
    axios.delete('http://ecom-api.test/api/cart/'+product.id)
}