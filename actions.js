export const FETCH_STARTED = 'FETCH_STARTED'
export const BEST_SELLERS_SUCCESS = 'BEST_SELLERS_SUCCESS'
export const BEST_SELLERS_FAILURE = 'BEST_SELLERS_FAILURE'
export const LIST_NAME = 'LIST_NAME'
export const LIST_NAME_SUCCESS = 'LIST_NAME_SUCCESS'
export const LIST_NAME_FAILURE = 'LIST_NAME_FAILURE'

import API from './Network/Api'

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

export const fetchBestsellerListName = () => {
    console.log('from fetch besellers')
    return (dispatch) => {
        dispatch(fetchList())
        fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=e23d8891dde4b093681f4f541d5e24ac:17:73864633')
        .then(data => data.json())
        .then(res => res.results)
        .then(results => dispatch(fetchListNameSuccess(results)))
        .catch(err => dispatch(fetchListNameFailure(err)))
    }
}

const fetchList = () => {
    return {
        type: LIST_NAME,
    }
}

const fetchListNameSuccess = (data) => {
    return {
        type: LIST_NAME_SUCCESS, 
        payload: data
    }
}

const fetchListNameFailure = () => {
    return {
        type: LIST_NAME_FAILURE
    }
}