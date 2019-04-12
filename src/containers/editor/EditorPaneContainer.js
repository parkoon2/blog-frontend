import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditorPane from '../../components/editor/EditorPane'
import * as editorActions from '../../store/modules/editor'
import { bindActionCreators } from 'C:/Users/parkoon/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

class EditorPaneContainer extends Component {

    handleChangeInput = ({ name, value }) => {
        // const { EditorActions } = this.props
        const { changeInput } = this.props
        changeInput({ name, value })
    }

    render() {
        const { title, tags, markdown } = this.props
        return (
            <EditorPane
                onInputChange={this.handleChangeInput}
                title={title}
                markdown={markdown}
                tags={tags}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeInput: ({ name, value }) => dispatch(editorActions.changeInput({ name, value }))
    }
    // return {
    //     EditorActions: bindActionCreators(editorActions, dispatch)
    // }
    // return {
    //     changeInput: () => dispatch(editorActions.changeInput())
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPaneContainer)

