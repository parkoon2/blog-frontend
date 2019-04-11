import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme='default'}) => {
    console.log('disabled', disabled, theme)
    const Element = to ? Link : Div

    return (
        <Element
            to={to}
            onClick={onClick}
            className={cx('button', theme, {disabled})}
        >
            {children}
        </Element>
    )
}


export default Button