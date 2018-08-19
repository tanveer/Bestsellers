
import {
    FETCH_STARTED,
    BEST_SELLERS_SUCCESS,
    BEST_SELLERS_FAILURE,
    LIST_NAME,
    LIST_NAME_SUCCESS,
    LIST_NAME_FAILURE
} from './actions'

import { combineReducers } from 'redux'

const intialState = {
    lists: [],
    list_names: [],
    isFetching: false,
    error: false,
}

const bestsellerReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_STARTED:
            return {
                ...state,
                lists: [],
                isFetching: true,
            }
        case BEST_SELLERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                lists: action.payload
            }
        case BEST_SELLERS_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

const listnameReducer = (state = intialState, action) => {
    switch (action.type) {
        case LIST_NAME:
            return {
                ...state,
                list_names: [],
                isFetching: true
            }
        case LIST_NAME_SUCCESS:
            return {
                ...state,
                list_names: action.payload,
                isFetching: false
            }
        case LIST_NAME_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    lists: bestsellerReducer,
    list_names: listnameReducer
})

export default reducer



