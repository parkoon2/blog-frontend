import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import Button from '../Button'

import { Link } from 'react-router-dom'
console.log('styles', styles)
const cx = classNames.bind(styles)

const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to="/">reactblog</Link>
                </div>
                <div className={cx('right')}>
                    {/* 조건에 따른 버튼 렌더링 */}
                    <Button theme="outline" to={'/'}>새 포스트</Button>
             </div>
            </div>
        </header>
    )
}

export default Header