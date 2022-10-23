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
        taken_assessment: null
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
        removeAccessToken({ commit }) {
            localStorage.removeItem("user");
            commit('UPDATE_TOKEN', null);
        },
        async userLogin({ commit }, user) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/login`, user)
                let token = response.data.data.token
                let firstName = response.data.data.applicant[0].firstname
                let lastName = response.data.data.applicant[0].lastname
                let email = response.data.data.applicant[0].email
                console.log('Response', response)
                const currentUser = {
                    "accessToken": token,
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email
                }
                localStorage.setItem('user', JSON.stringify(currentUser));
                console.log('Resonse', response.data.message)
                if (response.data.message === 'Logged In Successfully') {
                    router.push('/dashboard')
                } else {
                    router.push('/applicationform')
                }
                commit('AUTH', true)

            } catch (error) {
                localStorage.removeItem("user");
                commit('UPDATE_MESSAGE', error.response.data.message)

            }
        },
        async dashboardPic({ state, commit }) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/dashboard`, { email: state.currentUser.email })
                commit('UPDATE_PROFILE', response.data.data[0]);
                commit('UPDATE_STATUS', response.data.applicantStatus[0].status)
                commit('UPDATE_ASSESSMENT_STATUS', response.data.data[0].taken_assessment)
                // console.log('St', response.data.data[0].taken_assessment)
                // console.log('State: ', state.profile)
            } catch (error) {
                console.log(error)
            }
        },
        async changeAssessmentStatus({ state, commit }) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/applicant/assessment-status`, { email: state.currentUser.email })
                commit('UPDATE_ASSESSMENT_STATUS', response.data.taken_assessment[0].taken_assessment)
            } catch (err) {
                console.log(err)
            }
        }
    }
}