import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default getStore = () => {
    const store = createStore(reducer, applyMiddleware(thunk))
    console.log(store)
    return store
}
