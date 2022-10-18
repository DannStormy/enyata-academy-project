import axios from 'axios';

export default {
    state: () => ({
        applicants: null
    }),
    mutations: {
        UPDATE_APPLICANTS: (state, applicants) => {
            state.applicants = applicants
        }

    },
    actions: {
        async getEntries({ commit }) {
            try {
                const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/application-entries`)
                console.log('Store', response)
                await commit('UPDATE_APPLICANTS', response.data.data)
            } catch (error) {
                console.log(error)
                return error
            }
        }
    }
};
