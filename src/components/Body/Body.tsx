/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import StartButton from '../Button/StartButton'
import Card from '../Card/Card'
import s from './Body.module.scss'

interface BodyProps {
    order: number | null
    garant: string | null
    year: number | null
    duration: number | null
}

function Body({ order, garant, year, duration }: BodyProps) {
    return (
        <div className={s.body}>
            <div className={s.sideLeft}>
                sideLeft
                <StartButton />
            </div>

            <div className={s.sideRight}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Body
