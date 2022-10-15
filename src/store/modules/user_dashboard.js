import router from "@/router";
import axios from "axios";

export default {
    state: () => ({
        firstName: '',
        lastName: '',
        currentUser: [],
        accessToken: null,
        message: ''
    }),
    mutations: {
        UPDATE_TOKEN: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        UPDATE_MESSAGE: (state, message) => {
            state.message = message;
        },
        UPDATE_USER: (state, user) => {
            state.currentUser = user
        }
    },
    actions: {
        fetchUser({ commit }) {
            const currentUser = localStorage.getItem('user')
            if (currentUser) {
                const user = JSON.parse(currentUser)
                console.log(user)
                commit('UPDATE_USER', user);
            }
        },
        fetchAccessToken({ commit }) {
            const currentUser = localStorage.getItem('user')
            if (currentUser) {
                const user = JSON.parse(currentUser)
                commit('UPDATE_TOKEN', user.accessToken);
            }
        },
        removeAccessToken({ commit }) {
            localStorage.removeItem("user");
            commit('UPDATE_TOKEN', null);
        },
        async userLogin({ commit }, user) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/login`, user)
                let firstName = response.data.data.applicant[0].firstname
                let lastName = response.data.data.applicant[0].lastname
                let email = response.data.data.applicant[0].email
                const currentUser = {
                    "accessToken": response.data.data.token,
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email
                }
                localStorage.setItem('user', JSON.stringify(currentUser));
                router.push('/dashboard')

            } catch (error) {
                localStorage.removeItem("user");
                commit('UPDATE_MESSAGE', error.response.data.message)

            }
        },
    },
    getters: {
        isAuthenticated: state => !!state.accessToken,
        authStatus: state => state.status,
    }
}