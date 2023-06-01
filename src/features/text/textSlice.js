import { createSlice } from "@reduxjs/toolkit"

export const textSlice = createSlice({
    name: 'text',
    initialState: 'text-one',
    reducers: {
        changeTextColor: (state, action) => {
            // console.log(state, action)
            return action.payload
        }
    }
})

export const { changeTextColor } = textSlice.actions
export default textSlice.reducer