import { createAction, handleActions } from 'redux-actions'

import { Map, fromJS } from 'immutable'

// action types
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'post/GET_POST_FAILURE'
const GET_POST_PENDING = 'post/GET_POST_PENDING'

// action creators
export const getPost = id => dispatch => {
    dispatch()
}

export const getPostSuccess = (post) => ({
    type: GET_POST_SUCCESS,
    data: post
})

export const getPostFailure = (err) => ({
    type: GET_POST_FAILURE,
    error: err
})

// initial state
const initialState = Map({
    error: '',
    post: Map({

    })
})


// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_SUCCESS: {
            const { post } = action.payload.data
            return state.set('post', fromJS(post))
        }
        case GET_POST_FAILURE: {
            const { error } = action.payload
            return state.set('error', error)
        }
        case GET_POST_PENDING: {
            return state
        }

        default: {
            return state
        }
    }
}