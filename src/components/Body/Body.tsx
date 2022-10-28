/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import StartButton from '../StartButton/StartButton'
import Card from '../Card/Card'
import s from './Body.module.scss'

interface BodyProps {
    order: number | null
    garant: string | null
    year: number | null
    duration: number | null
}

function Body({ order, garant, year, duration }: BodyProps) {
    const navigate = useNavigate()
    const startTrip = () => {
        navigate('/newtrip', { replace: true })
    }
    return (
        <div className={s.body}>
            <div className={s.sideLeft}>
                sideLeft
                <StartButton mode="newTrip" onClick={startTrip}>
                    Начать путешествие
                </StartButton>
            </div>

            <div className={s.sideRight}>
                <Card mode="order" data={order} />
                <Card mode="garant" data={garant} />
                <Card mode="year" data={year} />
                <Card mode="duration" data={duration} />
            </div>
        </div>
    )
}

export default Body
