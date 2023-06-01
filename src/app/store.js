import { configureStore } from "@reduxjs/toolkit"
import backgroundReducer from "../features/background/backgroundSlice"
import cursorReducer from "../features/cursor/cursorSlice"
import glassmorphismReducer from "../features/glassmorphism/glassmorphismSlice"
import textReducer from "../features/text/textSlice"

const store = configureStore({
    reducer: {
        background: backgroundReducer,
        cursor: cursorReducer,
        glassmorphism: glassmorphismReducer,
        text: textReducer
    }
})

export default store