export const FETCH_STARTED = 'FETCH_STARTED'
export const BEST_SELLERS_SUCCESS = 'BEST_SELLERS_SUCCESS'
export const BEST_SELLERS_FAILURE = 'BEST_SELLERS_FAILURE'
export const LIST_NAME = 'LIST_NAME'
export const BOOKS = 'BOOKS'
export const BOOK = 'BOOK'
import axios from 'axios'


export const fetchFromBestsellerAPI = () => {
    return (dispatch) => {
        dispatch(fetchStarted())
        fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=e23d8891dde4b093681f4f541d5e24ac:17:73864633")
        .then(data => data.json())
        .then(res => res.results)
        .then(results => dispatch(fetchBestsellersSuccess(results.lists)))
        .catch(err => dispatch(fetchBestsellersFailure(err)))
    }
}


const fetchStarted = () => {
    return {
        type: FETCH_STARTED
    }
}

const fetchBestsellersSuccess = (data) => {
    return {
        type: BEST_SELLERS_SUCCESS,
        payload: data
    }
}

const fetchBestsellersFailure = () => {
    return {
        type: BEST_SELLERS_FAILURE
    }
}