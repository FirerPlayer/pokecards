import { configureStore } from "@reduxjs/toolkit"
import { slice } from "./userSlice"
import { pageSlice } from "./pageSlice"

export default configureStore({
    reducer: {
        user: slice.reducer,
        page: pageSlice.reducer
    }
})

