import { createSlice } from "@reduxjs/toolkit"

export const backgroundSlice = createSlice({
    name: 'background',
    initialState: 'bg-one',
    reducers: {
        changeBackground: (state, action) => {
            // console.log(state, action)
            return action.payload
        }
    }
})

export const { changeBackground } = backgroundSlice.actions
export default backgroundSlice.reducer