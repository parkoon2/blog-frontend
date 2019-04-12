import React from 'react'
import styles from './PreviewPane.module.scss'
import classNames from 'classnames/bind'
import MarkdownRender from '../../common/MarkDownRender'

const cx = classNames.bind(styles)

const PreviewPane = ({ markdown, title }) => {

    return (
        <div className={cx('preview-pane')}>
            <h1 className={cx('title')}>
                {title}
            </h1>
            <div>
                <MarkdownRender markdown={markdown} />
            </div>
        </div>
    )
}

export default PreviewPane