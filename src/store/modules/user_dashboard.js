import router from "@/router";
import axios from "axios";

export default {
    state: () => ({
        firstName: '',
        lastName: '',
        currentUser: [],
        accessToken: null,
        message: '',
        status: null,
        profile: [],
        taken_assessment: null,
        isLoading: false,
        applicationOpen: false,
        newUserEmail: '',
        newUserDetails: null
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
        },
        UPDATE_STATUS: (state, status) => {
            state.status = status
        },
        UPDATE_PROFILE: (state, profile) => {
            state.profile = profile
        },
        UPDATE_ASSESSMENT_STATUS: (state, taken_assessment) => {
            state.taken_assessment = taken_assessment
        },
        UPDATE_APPLICATION_STATE: (state, applicationOpen) => {
            state.applicationOpen = applicationOpen
        },
        SET_LOADING: (state, isLoading) => {
            state.isLoading = isLoading
        },
        UPDATE_NEW_USER_EMAIL: (state, newUserEmail) => {
            state.newUserEmail = newUserEmail
        },
        UPDATE_NEW_USER_DETAILS: (state, newUserDetails) => {
            state.newUserDetails = newUserDetails
        }
    },
    actions: {
        fetchUser({ commit }) {
            const currentUser = localStorage.getItem('user')
            if (currentUser) {
                const user = JSON.parse(currentUser)
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
        getNewUserEmail({ commit }, email) {
            commit('UPDATE_NEW_USER_EMAIL', email)
        },
        async fetchNewUserDetails({ state, commit }) {
            let email = state.newUserEmail
            const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/applicant/apply/${email}`)
            commit('UPDATE_NEW_USER_DETAILS', response.data.details[0])
        },
        removeAccessToken({ commit }) {
            localStorage.removeItem("user");
            commit('UPDATE_TOKEN', null);
        },
        async userLogin({ commit }, user) {
            try {
                commit('SET_LOADING', true)
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/login`, user)
                let token = response.data.data.token
                let firstName = response.data.data.applicant[0].firstname
                let lastName = response.data.data.applicant[0].lastname
                let email = response.data.data.applicant[0].email
                // console.log('Response', response)
                const currentUser = {
                    "accessToken": token,
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email
                }
                localStorage.setItem('user', JSON.stringify(currentUser));
                // console.log('Resonse', response.data.message)
                if (response.data.message === 'Logged In Successfully') {
                    router.push('/dashboard')
                } else {
                    router.push('/applicationform')
                }
            } catch (error) {
                localStorage.removeItem("user");
                alert(error.response.data.message)
                commit('UPDATE_MESSAGE', error.response.data.message)

            } finally {
                commit('SET_LOADING', false)
            }
        },
        async dashboardPic({ state, commit }) {
            try {
                commit('SET_LOADING', true)
                const customConfig = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Basic ${state.currentUser.accessToken}`,
                    },
                };
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/dashboard`, { email: state.currentUser.email }, customConfig)
                commit('UPDATE_PROFILE', response.data.data[0]);
                commit('UPDATE_STATUS', response.data.applicantStatus[0].status)
                commit('UPDATE_ASSESSMENT_STATUS', response.data.data[0].taken_assessment)
            } catch (error) {
                console.log(error)
            } finally {
                commit('SET_LOADING', false)
            }
        },
        async changeAssessmentStatus({ state, commit }) {
            try {
                commit('SET_LOADING', true)
                const customConfig = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Basic ${state.currentUser.accessToken}`,
                    },
                };
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/assessment-status`, { email: state.currentUser.email }, customConfig)
                commit('UPDATE_ASSESSMENT_STATUS', response.data.taken_assessment[0].taken_assessment)
            } catch (err) {
                console.log(err)
            } finally {
                commit('SET_LOADING', false)
            }
        },
        async checkApplicationClosure({ commit }) {
            const response = await axios.get(
                `${process.env.VUE_APP_SERVER_URL}/admin/application-closure`
            );
            var q = new Date();
            var m = q.getMonth();
            var d = q.getDay() - 1;
            var y = q.getFullYear();

            var date = new Date(y, m, d);
            var closure = new Date(response.data.closure[0].date);
            if (closure >= date) {
                commit('UPDATE_APPLICATION_STATE', true)
            }
        }
    }
}