export default {
    state: () => ({
        userData: []
        // firstName: '',
        // lastname: '',
        // phone: '',
        // email: '',
        // password: '',
        // confirmPassword: ''
    }),
    mutations: {
        UPDATE_CART(state, product) {
            state.cart.push(product)
        },
        REMOVE_FROM_CART(state, newCart) {
            state.cart = newCart
        }
    },
    actions: {
        addToCart(context, item) {
            if (context.state.cart.indexOf(item) === -1) {
                const cart = [...context.state.cart]
                cart.push(item)
                context.commit('REMOVE_FROM_CART', cart)
            }
        },
        removeFromCart(context, item) {
            const cart = [...context.state.cart]
            let check = cart.includes(item)
            if (check) {
                let index = cart.indexOf(item)
                cart.splice(index, 1)
                context.commit('REMOVE_FROM_CART', cart)
            }
        }
    },
    getters: {
        updateCartLength(state) {
            return state.cart.length;
        }
    }
}