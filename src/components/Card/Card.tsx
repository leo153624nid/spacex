/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './Card.module.scss'

interface CardProps {
    mode: 'order' | 'garant' | 'year' | 'duration'
    data: number | string | null
}

function Card({ mode, data }: CardProps) {
    const className = `${s.card} ${s[`card_${mode}`]}`

    return (
        <div className={className}>
            <span>{data}</span>
        </div>
    )
}

export default Card
