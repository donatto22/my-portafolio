import { createSlice } from "@reduxjs/toolkit"

export const glassmorphismSlice = createSlice({
    name: 'cursor',
    initialState: 'black-g',
    reducers: {
        toggleGlass: (state, action) => {
            // console.log(state, action)
            return action.payload
        }
    }
})

export const { toggleGlass } = glassmorphismSlice.actions
export default glassmorphismSlice.reducer