export const state = () => ({
    title: ["感想を入力", "確認画面", "送信完了"]
})

export const getters = {
    getTitle (state, getters, rootState) {
        return state.title[rootState.stepCount]
    }
}