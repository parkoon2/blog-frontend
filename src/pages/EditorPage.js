import React from 'react'
import EditorTemplate from '../components/editor/EditorTemplate'
import EditorHeader from '../components/editor/EditorHeader'
import PreviewPane from '../components/editor/PreviewPane'
import EditorPane from '../components/editor/EditorPane'
const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader />}
            editor={<EditorPane />}
            preview={<PreviewPane />}
        >

        </EditorTemplate>
    )
}

export default EditorPage