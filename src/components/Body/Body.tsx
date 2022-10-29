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
        <div className={s.body_container}>
            <section className={s.sideLeft}>
                <StartButton mode="newTrip" onClick={startTrip}>
                    Начать путешествие
                </StartButton>
            </section>

            <section className={s.sideRight}>
                <div className={s.cards_container}>
                    <div className={s.card}>
                        <Card mode="order" data={order} />
                    </div>

                    <div className={s.card}>
                        <Card mode="garant" data={garant} />
                    </div>

                    <div className={s.card}>
                        <Card mode="year" data={year} />
                    </div>

                    <div className={s.card}>
                        <Card mode="duration" data={duration} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Body
