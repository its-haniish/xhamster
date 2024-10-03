import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import sidebarReducer from './reducers/SidebarReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer
    }
})

export default store;