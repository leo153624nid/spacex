/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from './Header.module.scss'
import logo from '../../img/spacex-logo.png'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.banner}>
                <img src={logo} alt="banner" />
            </div>

            <div className={s.content}>
                <div className={s.text}>
                    <span>Главная</span>
                </div>

                <div className={s.text}>
                    <span>Технология</span>
                </div>

                <div className={s.text}>
                    <span>График полетов</span>
                </div>

                <div className={s.text}>
                    <span>Гарантии</span>
                </div>

                <div className={s.text}>
                    <span>О компании</span>
                </div>

                <div className={s.text}>
                    <span>Контакты</span>
                </div>
            </div>
        </header>
    )
}

export default Header
