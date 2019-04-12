import React from 'react'
import EditorTemplate from '../components/editor/EditorTemplate'
import EditorHeader from '../components/editor/EditorHeader'
import PreviewPane from '../components/editor/PreviewPane'
import EditorPane from '../components/editor/EditorPane'
import EditorPaneContainer from '../containers/editor/EditorPaneContainer'
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer'
import EditorHeaderContainer from '../containers/editor/EditorHeaderContainer'
const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeaderContainer />}
            editor={<EditorPaneContainer />}
            preview={<PreviewPaneContainer />}
        >

        </EditorTemplate>
    )
}

export default EditorPage