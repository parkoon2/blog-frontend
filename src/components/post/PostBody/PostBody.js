import React from 'react'
import classNames from 'classnames/bind'
import styles from './PostBody.module.scss'

const cx = classNames.bind(styles)

const PostBody = props => {

    return (
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
                내용
            </div>
        </div>
    )
}

export default PostBody