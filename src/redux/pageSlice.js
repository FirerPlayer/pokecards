import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        pokes: [],
        pageNum: 1
    },
    reducers: {
        setPokes: (state, action) => {
            state.pokes = action.payload
        },
        setPageNum: (state, action) => {
            state.pageNum = action.payload
        }
    }
})

export const { setPokes, setPageNum } = pageSlice.actions

export const selectPage = state => state.pageNum

export default pageSlice.reducer