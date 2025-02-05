import { POSTS_ACTIONS } from "./actions"

const intialState = {
    data: [],
    loading: false,
    error: null
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case POSTS_ACTIONS.ALL_POSTS_PENDING:
            return { ...state, loading: true, data: [], error: null }
        case POSTS_ACTIONS.ALL_POSTS_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null }
        case POSTS_ACTIONS.ALL_POSTS_ERROR:
            return { ...state, loading: false, data: [], error: action.payload }
        default:
            return state
    }
}

export default reducer