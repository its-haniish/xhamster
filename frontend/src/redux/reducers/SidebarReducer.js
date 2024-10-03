import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false
}

const sidebarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("open_sidebar", (state) => {
            state.isSidebarOpen = true;

        })
        .addCase("close_sidebar", (state) => {
            state.isSidebarOpen = false;
        });
});

export default sidebarReducer;
