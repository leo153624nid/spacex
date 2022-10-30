/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './Header.module.scss'
import logo from '../../img/spacex-logo.png'
import burger from '../../img/burger.png'
import Ref from '../Ref/Ref'

function Header() {
    const navigate = useNavigate()
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={s.content}>
                    <Ref onClick={() => navigate('/', { replace: true })}>
                        Главная
                    </Ref>

                    <Ref onClick={() => navigate('/', { replace: true })}>
                        Технология
                    </Ref>

                    <Ref onClick={() => navigate('/', { replace: true })}>
                        График полетов
                    </Ref>

                    <Ref onClick={() => navigate('/', { replace: true })}>
                        Гарантии
                    </Ref>

                    <Ref onClick={() => navigate('/', { replace: true })}>
                        О компании
                    </Ref>

                    <Ref onClick={() => navigate('/', { replace: true })}>
                        Контакты
                    </Ref>
                </div>

                <div className={s.header_burger}>
                    <img src={burger} alt="burger" />
                </div>
            </div>
        </header>
    )
}

export default Header
