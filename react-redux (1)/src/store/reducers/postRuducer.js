import { postActionTypes } from "../actionsType/postActionTypes";

const initialState = {
    posts: [],
    loading: false,
    isError: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case postActionTypes.FETCH_POST_START: {
            return {
                ...state,
                loading: true
            }
        }

        case postActionTypes.FETCH_POST_ERROR: {
            return {
                ...state,
                isError: true,
                loading: false,
            }
        }

        case postActionTypes.FETCH_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default postReducer;