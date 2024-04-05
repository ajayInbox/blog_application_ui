import { createSlice } from "@reduxjs/toolkit"

type AuthType = {
    authToken: string,
    authenticated: boolean
}
const initialState: AuthType = {
    authToken: "",
    authenticated: false
}

export type RootState = {
    auth: AuthType
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticate: (state, actions) => {
            state.authToken = actions.payload,
            state.authenticated = true
        },

        logout: (state) => {
            state.authToken = "",
            state.authenticated = false
        }
    }
})

export const { authenticate, logout } = authSlice.actions
export default authSlice.reducer
export const selectAuthenticated = (state: RootState) => state.auth.authenticated
export const selectAuthToken = (state: RootState) => state.auth.authToken