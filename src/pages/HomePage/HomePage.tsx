/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import Body from '../../components/Body/Body'
import Header from '../../components/Header/Header'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './HomePage.module.scss'

function HomePage() {
    const { order, garant, year, duration } = useAppSelector(
        (state) => state.data
    )

    return order ? (
        <div className={s.homePage}>
            <Header />
            <Body
                order={order}
                garant={garant}
                year={year}
                duration={duration}
            />
        </div>
    ) : (
        <div className={s.homePage}>
            <Header />
            <div className={s.loading}>
                <span>LOADING DATA...</span>
            </div>
        </div>
    )
}

export default HomePage
