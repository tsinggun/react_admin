import { createSlice } from "@reduxjs/toolkit";


interface UserInfo {
    token: string
}
const initialState: UserInfo = {
    token: ''
}

const userInfoSlice = createSlice({
    name: 'userInfoSlice',
    initialState,
    reducers:{
        saveToken(state, { payload }){
            state.token = payload
        }
    }
})

export const { saveToken } = userInfoSlice.actions
export default userInfoSlice.reducer