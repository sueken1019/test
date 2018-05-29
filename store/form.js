export const state = () => ({
    button: ["確認", "送信", "戻る"],
    component: ["TextareaComp", "StringComp"]
})

export const actions = {
    buttonAction({ commit, state, rootState }) {
        if (rootState.errorFlag) {
            commit('setStepCount', null, {root: true})
        }
    }
}

export const getters = {
    getButton(state, getters, rootState) {
        return state.button[rootState.stepCount]
    },
    getComponent (state, getters, rootState) {
        return state.component[rootState.stepCount]
    },
    getStepCount (state, getters, rootState) {
        return rootState.stepCount
    }
}

