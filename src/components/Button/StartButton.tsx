/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './StartButton.module.css'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red' | 'green'
}

function StartButton({ children, color, onClick, ...props }: ButtonProps) {
    const className = `${s.button} ${s[`button_${color}`]}`

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
