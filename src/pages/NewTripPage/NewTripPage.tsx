/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './NewTrip.module.scss'

function NewTrip() {
    const { data } = useAppSelector((state) => state.data)

    return data ? (
        <div className={s.homePage}>11111</div>
    ) : (
        <div className={s.homePage}>
            <div className={s.loading}>
                <span>LOADING...</span>
            </div>
        </div>
    )
}

export default NewTrip
