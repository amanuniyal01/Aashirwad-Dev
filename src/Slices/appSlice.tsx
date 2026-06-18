import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        isOpen: false

    },
    reducers: {
        toggleOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})
export const { toggleOpen } = appSlice.actions
export default appSlice.reducer