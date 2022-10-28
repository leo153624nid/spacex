import React from 'react'
import s from './Body.module.scss'

interface BodyProps {
    order: number | null
    garant: string | null
    year: number | null
    duration: number | null
}

function Body({ order, garant, year, duration }: BodyProps) {
    return (
        <header className={s.header}>
            <div className={s.banner}>
                <img src={banner} alt="banner" />
            </div>

            <div className={s.content}>
                <div className={s.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>

                <div className={s.userData}>
                    <div className={s.userName}>
                        <span>{userName}</span>
                    </div>

                    <div className={s.userButtons}>
                        <div className={s.btn}>
                            <div className={s.icon}>
                                <img
                                    src={email}
                                    alt="email"
                                    className={s.email}
                                />
                            </div>

                            <span className={s.text}>Message</span>
                        </div>

                        <div className={s.btn}>
                            <div className={s.icon}>
                                <img
                                    src={phone}
                                    alt="phone"
                                    className={s.phone}
                                />
                            </div>

                            <span className={s.text}>Call</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Body
