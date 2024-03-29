import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'username',
    initialState:{
        user: null,
        isLoggedIn: false,
        isSignup: false,
    },
    reducers:
    {
        setUser: (state, action) =>
        {
            state.user = action.payload
        },
        setIsLoggedIn: (state, action) =>
        {
            state.isLoggedIn = action.payload
        },
        setIsSignup: (state, action) =>
        {
            state.isSignup = action.payload
        }
    }

})
export const {setUser, setIsLoggedIn, setIsSignup} = userSlice.actions
export default userSlice.reducer;