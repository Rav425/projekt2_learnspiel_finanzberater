import {PayloadAction, createSlice} from '@reduxjs/toolkit';

// export interface UserState {
//       currentUser: any;
//       loading: boolean;
//       error: string | null;
    
//   }

interface User {
    id: string;
    username: string;
    email: string;

}


const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        }
    },
});



export const {
    signInStart, 
    signInSuccess, 
    signInFailure,
    signOut} = userSlice.actions;

export default userSlice.reducer;