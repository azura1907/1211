const initialState = {
    products: [1, 2, 3, 4, 5, 6]
}

export function productReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}