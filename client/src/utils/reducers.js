import {
    UPDATE_IDOLS,
    // ADD_TO_HUB,
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
        // {
        //     name: 'All Idols',
        //     id: 0
        // },
        // {
        //     name: 'Athletes',
        //     id: 1
        // },
        // {
        //     name: 'Musicians',
        //     id: 2
        // },
        // {
        //     name: 'Entrepreneurs',
        //     id: 3
        // }
    ],
    currentCategory: ''
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
            };

        // not sure if this is right, particularly the action.idols
        case UPDATE_IDOLS:
            return {
                ...state,
                products: [...action.idols],
            };

        // not sure we need this.  are we storing in state/redux or in graphql???
        // case ADD_TO_HUB:
        //     return {
        //         ...state,
        //         hub: [...state.hub, action.idol]
        //     };

        default:
            return state;
    }
};

export default reducers;