import axios from 'axios';

export default {
    state: () => ({
        applicants: null,
        adminDetails: null,
        adminAuth: null,
        dashboardDetails: null,
        assessments: null,
        isLoading: false
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
        },
        UPDATE_ASSESSMENTS: (state, assessments) => {
            state.assessments = assessments
        },
        SET_LOADING: (state, isLoading) => {
            state.isLoading = isLoading
        }

    },
    actions: {
        async adminDetails({ commit, state }) {
            try {
                commit('SET_LOADING', true)
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/admin-details`, { email: state.adminAuth.email })
                commit('UPDATE_ADMIN', response.data.data[0])
            } catch (error) {
                console.log(error)
            } finally {
                commit('SET_LOADING', false)
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
                commit('SET_LOADING', true)
                const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/application-entries`)
                await commit('UPDATE_APPLICANTS', response.data.data)
            } catch (error) {
                console.log(error)
                return error
            } finally {
                commit('SET_LOADING', false)
            }
        },
        async getDetails({ commit }) {
            try {
                commit('SET_LOADING', true)
                const response = await axios.get(
                    `${process.env.VUE_APP_SERVER_URL}/admin/dashboard`
                );
                console.log('Response', response.data.allDetails.currentBatch)
                await commit('UPDATE_DASHBOARD', response.data.allDetails)

            } catch (error) {
                console.log(error)
            } finally {
                commit('SET_LOADING', false)

            }
        },
        async getAssessments({ commit }) {
            try {
                commit('SET_LOADING', true)
                const response = await axios.get(
                    `${process.env.VUE_APP_SERVER_URL}/admin/get-assessments`
                );
                await commit('UPDATE_ASSESSMENTS', response.data.assessments)

            } catch (error) {
                console.log(error)
            } finally {
                commit('SET_LOADING', false)
            }
        },

    }
};
