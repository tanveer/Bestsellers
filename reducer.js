
import {
    FETCH_STARTED, 
    BEST_SELLERS_SUCCESS, 
    BEST_SELLERS_FAILURE,} from './actions'

import {combineReducers} from 'redux'

    const intialState = {
        lists: [],
        isFetching: false,
        error: false,
    }

const bestsellerReducer = (state = intialState, action) => {
    switch(action.type) {
        case FETCH_STARTED:
        console.log('inside ferch Started reducer')
            return {
                ...state,
                lists: [],
                isFetching: true,
            }
        case BEST_SELLERS_SUCCESS: 
            console.log('inside bestseller reducer')
            return {
                ...state, 
                isFetching: false,
                lists: action.payload
            }
        case BEST_SELLERS_FAILURE:
            console.log('in Failure')
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    lists: bestsellerReducer
})

export default reducer



