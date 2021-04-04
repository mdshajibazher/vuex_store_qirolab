export const CartItemCount = (state) => {
    return state.cart.length;
}

export const CartTotalPrice = (state) => {
    let total = 0;
    state.cart.forEach((item) => {
        total += parseFloat(item.product.price) * parseFloat(item.qty);
    });
    return total;
}