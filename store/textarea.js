export const state = () => ({
    errorMsg: "入力は必須です"
})

export const getters = {
    getError (state, getters, rootState) {
        if (rootState.errorFlag) {
            return null
        } else {
            return state.errorMsg
        }
    }
}