/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import dataAPI from './api/dataAPI'
import s from './App.module.scss'
import HomePage from './pages/HomePage/HomePage'
import NewTripPage from './pages/NewTripPage/NewTripPage'
import { useAppDispatch } from './store/hooks/hooks'
import { InitState, setData } from './store/slices/dataSlice'

function App() {
    const dispatch = useAppDispatch()

    // Получаем данные при загрузке страницы
    useEffect(() => {
        dataAPI
            .getData()
            .then((data: InitState) => {
                dispatch(
                    setData({
                        order: data?.order,
                        garant: data?.garant,
                        year: data?.year,
                        duration: data?.duration,
                    })
                )
            })
            .catch((error) => {
                console.log(error)
                alert('Данные не получены')
            })
    }, [dispatch])
    return (
        <div className={s.App}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/newtrip" element={<NewTripPage />} />
            </Routes>
        </div>
    )
}

export default App
