import axios from 'axios';

export default {
    state: () => ({
        applicants: [],
        adminDetails: null,
        adminAuth: null,
        dashboardDetails: null,
        assessments: null,
        isLoading: false,
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
    getters: {
        sortCgpaUp: (state) => {
            return state.applicants.sort((a, b) => a.cgpa - b.cgpa)
        },
        sortCgpaDown: (state) => {
            return state.applicants.sort((a, b) => b.cgpa - a.cgpa)
        },
        sortAgeUp: (state) => {
            return state.applicants.sort((a, b) => parseInt(b.dob) - parseInt(a.dob))
        },
        sortAgeDown: (state) => {
            return state.applicants.sort((a, b) => parseInt(a.dob) - parseInt(b.dob))
        },
        sortScoresUp: (state) => {
            return state.applicants.sort((a, b) => a.test_score - b.test_score)
        },
        sortScoresDown: (state) => {
            return state.applicants.sort((a, b) => b.test_score - a.test_score)
        },
    },
    actions: {
        async adminDetails({ commit, state }) {
            const admin = JSON.parse(localStorage.getItem("admin"));
            const customConfig = {
                headers: {
                    Authorization: `Basic ${admin.accessToken}`,
                },
            };
            try {
                commit('SET_LOADING', true)
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/admin-details`, { email: state.adminAuth.email }, customConfig)
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
                const admin = JSON.parse(localStorage.getItem("admin"));
                const customConfig = {
                    headers: {
                        Authorization: `Basic ${admin.accessToken}`,
                    },
                };
                const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/application-entries`, customConfig)
                commit('UPDATE_APPLICANTS', response.data.data)
            } catch (error) {
                console.log(error)
                return error
            } finally {
                commit('SET_LOADING', false)
            }
        },
        async getEntriesByBatch({ commit }, batch) {
            try {
                commit('SET_LOADING', true)
                const admin = JSON.parse(localStorage.getItem("admin"));
                const customConfig = {
                    headers: {
                        Authorization: `Basic ${admin.accessToken}`,
                    },
                };
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/application-by-batch`, { batch: batch }, customConfig)
                commit('UPDATE_APPLICANTS', response.data.data)
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
                const admin = JSON.parse(localStorage.getItem('admin'))
                const customConfig = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Basic ${admin.accessToken}`,
                    },
                };
                const response = await axios.get(
                    `${process.env.VUE_APP_SERVER_URL}/admin/dashboard`, customConfig
                );
                await commit('UPDATE_DASHBOARD', response.data.allDetails)
            } catch (error) {
                console.log(error)
            } finally {
                commit('SET_LOADING', false)

            }
        },
        async getAssessments({ commit }) {
            const admin = JSON.parse(localStorage.getItem("admin"));
            const customConfig = {
                headers: {
                    Authorization: `Basic ${admin.accessToken}`,
                },
            };
            try {
                commit('SET_LOADING', true)
                const response = await axios.get(
                    `${process.env.VUE_APP_SERVER_URL}/admin/get-assessments`, customConfig
                );
                await commit('UPDATE_ASSESSMENTS', response.data.assessments)

            } catch (error) {
                console.log(error)
            } finally {
                commit('SET_LOADING', false)
            }
        }

    }
};
