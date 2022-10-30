/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import StartButton from '../../components/StartButton/StartButton'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './NewTripPage.module.scss'

function NewTrip() {
    const navigate = useNavigate()
    const data = useAppSelector((state) => state.data)

    const goHome = () => {
        navigate('/', { replace: true })
    }

    return data ? (
        <div className={s.homePage}>
            <Header />
            <StartButton mode="home" onClick={goHome}>
                End Trip
            </StartButton>
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

export default NewTrip
