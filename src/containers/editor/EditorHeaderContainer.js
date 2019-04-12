import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditorHeader from '../../components/editor/EditorHeader'
import * as editorActions from '../../store/modules/editor'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'C:/Users/parkoon/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';


class EditorHeaderContainer extends Component {


    handleSubmit = () => {
        const { title, markdown, tags, history, writePost } = this.props
        console.log('this.props,', this.props)
        const post = {
            title,
            body: markdown,
            tags: tags === '' ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
        }
        console.log(typeof writePost)
        // writePost()
        writePost(post)

        console.log('')

    }

    handleGoBack = () => {
        const { history } = this.props
        history.goBack();
    }

    componentWillUpdate(nextProps, nextState) {

        if (nextProps.id !== this.props.id) {
            this.props.history.push(`/posts/${nextProps.id}`)
        }

    }

    render() {
        return (
            <EditorHeader
                onSubmit={this.handleSubmit}
                onGoBack={this.handleGoBack}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags'),
        id: state.editor.get('id'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        writePost: ({ title, body, tags }) => {
            dispatch(editorActions.writePostAsync({ title, body, tags }))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditorHeaderContainer))

