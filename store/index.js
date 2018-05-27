export const state = () => ({
    stepCount: 0,
    impression: "",
    errorFlag: false
})

export const mutations = {
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