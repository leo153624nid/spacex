/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './Ref.module.scss'

interface RefProps {
    children: string
    onClick: () => void
}

function Ref({ children, onClick, ...props }: RefProps) {
    return (
        <div
            className={s.ref}
            onClick={onClick}
            // Возможно будут еще пропсы
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            <span className={s.text}>{children}</span>
        </div>
    )
}

export default Ref
