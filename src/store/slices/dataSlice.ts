/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InitState {
    order: number | null
    garant: string | null
    year: string | null
    duration: number | null
}

const initialState: InitState = {
    order: null,
    garant: null,
    year: null,
    duration: null,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<InitState>) {
            state.order = action.payload.order
            state.garant = action.payload.garant
            state.year = action.payload.year
            state.duration = action.payload.duration
        },
        removeData(state) {
            state.order = null
            state.garant = null
            state.year = null
            state.duration = null
        },
    },
})

export const { setData, removeData } = dataSlice.actions

export default dataSlice.reducer
