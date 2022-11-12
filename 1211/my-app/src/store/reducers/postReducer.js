import { useEffect, useState } from 'react';
import { API_URL } from ''
import axios from 'axios'

const initialState = {
    posts: []
}

// const [postList, setPostList] = useState([])

// const handleGetPostData = async () => {
//     try {
//         const postData = await axios.get(`${API_URL}/posts`)
//         setPostList(postData.data)
//         console.log(postList)
//     } catch (error) {
//         console.log('fetch post data', error)
//     }
// }

// useEffect(() => {
//     handleGetPostData()
// }, [])

function postReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default postReducer