import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'

import * as api from '../../lib/api'

// action types
const INITIALIZE = 'editor/INITIALIZE'


const CHANGE_INPUT = 'editor/CHANGE_INPUT'



const WRTIE_POST_PENDING = 'editor/WRTIE_POST_PENDING'
const WRTIE_POST_FAILURE = 'editor/WRTIE_POST_FAILURE'
const WRTIE_POST_SUCCESS = 'editor/WRTIE_POST_SUCCESS'

// action creators
export const initialize = () => {
    return {
        type: INITIALIZE
    }
}
export const changeInput = (payload) => {
    return {
        type: CHANGE_INPUT,
        payload
    }
}

const writePostSuccess = payload => ({
    type: WRTIE_POST_SUCCESS,
    payload
})
const writePostPending = () => ({
    type: WRTIE_POST_PENDING,
})
const writePostFailure = payload => ({
    type: WRTIE_POST_FAILURE,
    payload
})


export const writePostAsync = payload => {
    return async (dispatch) => {
        dispatch(writePostPending())

        try {
            const { title, body, tags } = payload
            // console.log(typeof api.writePost)
            let result = await api.writePost({ title, body, tags })
            dispatch(writePostSuccess({ id: result.data.post.id }))

        } catch (err) {
            console.error(err)
            dispatch(writePostFailure({ error: err }))
        }
    }
}


// export const initialize = createAction(INITIALIZE)
// export const changeInput = createAction(CHANGE_INPUT)

// initial state
const initialState = Map({
    id: '',
    title: '',
    markdown: '',
    tags: '',
    error: ''
})


// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE: {
            return initialState
        }

        case CHANGE_INPUT: {
            const { name, value } = action.payload
            return state.set(name, value)
        }

        case WRTIE_POST_SUCCESS: {
            const { id } = action.payload
            alert(id)
            return state.set('id', id)
        }
        case WRTIE_POST_PENDING: {
            return state
        }
        case WRTIE_POST_FAILURE: {
            const { error } = action.payload
            return state.set(error)
        }

        default: {
            return state
        }
    }
}
// export default handleActions({
//     [INITIALIZE]: (state, action) => initialState,
//     [CHANGE_INPUT]: (state, action) => {
//         console.log('action.payload, action.payload', action)
//         // const { name, value } = action.payload
//         // return state.set(name, value)
//     }
// }, initialState)