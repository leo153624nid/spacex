/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './StartButton.module.scss'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    mode: 'newTrip' | 'home'
}

function StartButton({ children, mode, onClick, ...props }: ButtonProps) {
    const className = `${s.button} ${s[`button_${mode}`]}`

    return (
        <button
            className={className}
            type="button"
            onClick={onClick}
            // Возможно будут еще пропсы
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    )
}

export default StartButton
