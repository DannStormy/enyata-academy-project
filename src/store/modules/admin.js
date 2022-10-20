import axios from 'axios';

export default {
    state: () => ({
        applicants: null,
        adminDetails: null,
        adminAuth: null,
        dashboardDetails: null
    }),
    mutations: {
        UPDATE_APPLICANTS: (state, applicants) => {
            state.applicants = applicants
        },
        UPDATE_ADMIN: (state, admin) => {
            state.adminDetails = admin
        },
        UPDATE_ADMINAUTH: (state, adminAuth) => {
            state.adminAuth = adminAuth
        },
        UPDATE_DASHBOARD: (state, details) => {
            state.dashboardDetails = details
        }

    },
    actions: {
        async adminDetails({ commit, state }) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/admin-details`, { email: state.adminAuth.email })
                commit('UPDATE_ADMIN', response.data.data[0])
            } catch (error) {
                console.log(error)
            }
        },
        async adminAuth({ commit }) {
            const currentAdmin = localStorage.getItem('admin')
            if (currentAdmin) {
                const admin = JSON.parse(currentAdmin)
                commit('UPDATE_ADMINAUTH', admin);
            }
        },
        async getEntries({ commit }) {
            try {
                const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/application-entries`)
                await commit('UPDATE_APPLICANTS', response.data.data)
            } catch (error) {
                console.log(error)
                return error
            }
        },
        async getDetails({ commit }) {
            try {
                const response = await axios.get(
                    `${process.env.VUE_APP_SERVER_URL}/admin/dashboard`
                );
                console.log('Response', response.data.allDetails.currentBatch)
                await commit('UPDATE_DASHBOARD', response.data.allDetails)

            } catch (error) {
                console.log(error)
            }
        },

    }
};
