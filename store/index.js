export const state = () => ({
    stepCount: 0,
    impression: "",
    errorFlag: false,
    isLogin: false
})

export const actions = {
    login({ commit, state }) {
        if (!state.isLogin) {
            commit('logIn')
        } else {
            commit('logOut')
        }
    }
}

export const mutations = {
    logIn (state) {
        state.isLogin = true
    },
    logOut (state) {
        state.isLogin = false
    },
    setStepCount (state) {
        state.stepCount++
        if (state.stepCount > 2) {
            state.stepCount = 0
        }
    },
    updateImpression (state, value) {
        state.impression = value
        if (state.impression) {
            state.errorFlag = true
        } else {
            state.errorFlag = false
        }
    }
}

export const getters = {
    getIsLogin(state, getters) {
        return state.isLogin
    }
}
