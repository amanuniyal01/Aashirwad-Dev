import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        isOpen: false

    },
    reducers: {
        openSidebar: (state) => {
            state.isOpen = true
        },
        closeSidebar: (state) => {
            state.isOpen = false

        }
    }
})
export const { openSidebar, closeSidebar } = appSlice.actions
export default appSlice.reducer