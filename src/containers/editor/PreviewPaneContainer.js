import React, { Component } from 'react'
import { connect } from 'react-redux'
import PreviewPane from '../../components/editor/PreviewPane'

class PreviewPaneContainer extends Component {


    render() {
        const { markdown, title } = this.props
        return (
            <PreviewPane
                markdown={markdown}
                title={title}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        markdown: state.editor.get('markdown'),
        title: state.editor.get('title'),
    }
}

const mapDispatchToProps = dispatch => {
    return null
}

export default connect(mapStateToProps, null)(PreviewPaneContainer)