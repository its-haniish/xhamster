import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        // Handle the login action
        .addCase("login", (state) => {
            state.isAuth = true; // Set isAuthenticated to true

        })
        // Handle the logout action
        .addCase("logout", (state) => {
            state.isAuth = false; // Set isAuthenticated to false
        });
});

// Export the Auth reducer
export default authReducer;
