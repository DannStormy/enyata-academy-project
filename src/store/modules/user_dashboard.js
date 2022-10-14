export default {
    state: () => ({
        firstName: '',
        lastName: '',
        accessToken: null,
    }),
    mutations: {
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
        },
    },
    actions: {
        fetchAccessToken({ commit }) {
            commit('updateAccessToken', localStorage.getItem('accessToken'));
        },

    },
    getters: {
        updateCartLength(state) {
            return state.cart.length;
        }
    }
}