
const initialState = {
    products: [1, 2, 3, 4, 5, 6]
}

function productsReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default productsReducer;