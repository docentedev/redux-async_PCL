import { combineReducers } from 'redux'
import getAllReducer from './getAllReducer'
import createReducer from './createReducer'

const initialStateGet = {
    data: {},
}

const getReducer = (prevState = initialStateGet) => {
    return prevState
}

const rootReducer = combineReducers({
    getall: getAllReducer,
    get: getReducer,
    create: createReducer,
})

export default rootReducer