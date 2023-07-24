import { UserListActionTypes, UserListState, UserListAction } from '../types';

const initialState: UserListState = {
    allUsers: [],
    loading: false,
    error: null
}

export const userListReducer = (state = initialState, action: UserListAction): UserListState => {
    switch (action.type) {
        case UserListActionTypes.SET_USERS:
            return {
                allUsers: [],
                loading: true,
                error: null
            };
        case UserListActionTypes.SET_USERS_SUCCESS:
            return {
                allUsers: action.payload,
                loading: false,
                error: null
            };
        case UserListActionTypes.SET_USERS_ERROR:
            return {
                allUsers: [],
                loading: false,
                error: action.payload
            };
        case UserListActionTypes.DELETE_USER:
            const userId = action.payload
            const updatedUsers = state.allUsers?.filter(user => user.id !== userId) || []

            return {
                ...state,
                allUsers: updatedUsers
            };
        default:
            return state;
    }
};