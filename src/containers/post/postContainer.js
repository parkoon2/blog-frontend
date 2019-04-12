import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostBody from '../../components/post/PostBody'
import PostInfo from '../../components/post/PostInfo'

export default class postContainer {


    render() {
        return (
            <div>
                <PostBody />
                <PostInfo />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(postContainer)