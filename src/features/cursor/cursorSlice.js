import { createSlice } from "@reduxjs/toolkit"

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState: true,
    reducers: {
        enableCursor: (state, action) => {
            // console.log(state, action)
            return action.payload
        },

        disabledCursor: (state, action) => {
            // console.log(state, action)
            return action.payload
        }
    }
})

export const { toggleCursor } = cursorSlice.actions
export default cursorSlice.reducer