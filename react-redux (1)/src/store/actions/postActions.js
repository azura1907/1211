import { postActionTypes } from "../actionsType/postActionTypes"

export const fetchPostAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: postActionTypes.FETCH_POST_START
            })

            const bodyStream = await fetch('https://js-post-api.herokuapp.com/api/posts');

            const data = await bodyStream.json();

            dispatch({
                type: postActionTypes.FETCH_POST_SUCCESS,
                payload: data
            })
        } catch (e) {
            dispatch({
                type: postActionTypes.FETCH_POST_ERROR
            })
        }
    }
}