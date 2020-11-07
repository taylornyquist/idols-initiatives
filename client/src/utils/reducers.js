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

const defaultState = {
    categories: [
        {
            name: 'All Idols',
            id: 0
        },
        {
            name: 'Athletes',
            id: 1
        },
        {
            name: 'Musicians',
            id: 2
        },
        {
            name: 'Entrepreneurs',
            id: 3
        }
    ],
    currentCategory: '0'
};

export const reducers = (state = defaultState, action) => {
    switch (action.type) {

        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
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