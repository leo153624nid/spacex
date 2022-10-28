/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useNavigate } from 'react-router-dom'
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
            NEW TRIP
            <StartButton mode="home" onClick={goHome}>
                Вернуться на главную
            </StartButton>
        </div>
    ) : (
        <div className={s.homePage}>
            <div className={s.loading}>
                <span>LOADING...</span>
            </div>
        </div>
    )
}

export default NewTrip
