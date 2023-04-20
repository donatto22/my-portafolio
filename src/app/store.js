import { configureStore } from "@reduxjs/toolkit"
import backgroundReducer from "../features/background/backgroundSlice"

const store = configureStore({
    reducer: {
        background: backgroundReducer
    }
})

export default store