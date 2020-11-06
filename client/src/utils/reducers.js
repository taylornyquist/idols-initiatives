import {
    // UPDATE_PRODUCTS,
    // ADD_TO_CART,
    // UPDATE_CART_QUANTITY,
    // REMOVE_FROM_CART,
    // ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    // CLEAR_CART,
    // TOGGLE_CART
} from "./actions";

const initialState = {

    categories: [],
    currentCategory: ''
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }

        default:
            return state;
    }
};

export default reducers;