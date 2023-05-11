import { configureStore } from "@reduxjs/toolkit"
import backgroundReducer from "../features/background/backgroundSlice"
import cursorReducer from "../features/cursor/cursorSlice"

const store = configureStore({
    reducer: {
        background: backgroundReducer,
        cursor: cursorReducer
    }
})

export default store