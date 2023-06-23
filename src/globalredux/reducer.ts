"use client";

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    name: string
}
const initialState: CounterState = {
    name: "quan",
}

const counterSlice = createSlice({
    name: 'caunter',
    initialState,
    reducers: {
    }
})

export const { } = counterSlice.actions

export default counterSlice.reducer;