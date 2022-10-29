/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './Card.module.scss'
import cardData from '../../common/cardData'

interface CardProps {
    mode: 'order' | 'garant' | 'year' | 'duration'
    data: number | string | null
}

function Card({ mode, data }: CardProps) {
    // Определяем стили в зависимости от режима
    const className = `${s.card} ${s[`card_${mode}`]}`
    // Определяем контекст каточки в зависимости от режима
    const cardContex = cardData.find((item) => item.mode === mode)

    return (
        <div className={className}>
            <p className={s.lowText}>{cardContex?.textOver}</p>
            <p className={s.highText}>{data}</p>
            <p className={s.lowText}>{cardContex?.textUnder}</p>
        </div>
    )
}

export default Card
