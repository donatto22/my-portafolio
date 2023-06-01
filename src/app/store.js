import { configureStore } from "@reduxjs/toolkit"
import backgroundReducer from "../features/background/backgroundSlice"
import cursorReducer from "../features/cursor/cursorSlice"
import glassmorphismReducer from "../features/glassmorphism/glassmorphismSlice"

const store = configureStore({
    reducer: {
        background: backgroundReducer,
        cursor: cursorReducer,
        glassmorphism: glassmorphismReducer
    }
})

export default store