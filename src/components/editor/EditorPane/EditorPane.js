import React from 'react'
import styles from './EditorPane.module.scss'
import classNames from 'classnames/bind'

import CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/css/css'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'


const cx = classNames.bind(styles)

class EditorPane extends React.Component {

    editor = null // 에디터 ref
    codeMirror = null
    cursor = null


    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true
        })

        this.codeMirror.on('change', this.handleChangeMarkdown)
    }

    handleChange = e => {
        const { onInputChange } = this.props
        const { value, name } = e.target
        onInputChange({ name, value })
    }

    handleChangeMarkdown = doc => {
        const { onInputChange } = this.props
        this.cursor = doc.getCursor()
        onInputChange({
            name: 'markdown',
            value: doc.getValue()
        })
    }

    componentDidMount() {
        this.initializeEditor()
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.markdown !== this.props.markdown) {
            if (!this.codeMirror) return
            this.codeMirror.setValue(this.props.markdown)

            if (!this.cursor) return
            this.codeMirror.setCursor(this.cursor)
        }
    }

    render() {

        const { tags, title } = this.props

        return (
            <div className={cx('editor-pane')}>
                <input
                    className={cx('title')}
                    placeholder="제목을 입력하세요"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />
                <div className={cx('code-editor')} ref={ref => this.editor = ref}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>태그</div>
                    <input
                        name="tags"
                        placeholder="태그를 입력하세요 (쉼표로 구분)"
                        value={tags}
                        onChange={this.handleChange}
                    />
                </div>

            </div>
        )
    }
}

export default EditorPane