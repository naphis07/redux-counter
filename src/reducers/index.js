export default (state = 10, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "INCREMENT":
            return state - 1
        default:
            return state
    }
}