import { UserListActionTypes, UserListAction } from '../types';
import { Dispatch } from 'redux';
import axios from 'axios';


export const getUserList = () => {
    return async (dispatch: Dispatch<UserListAction>) => {
        try {
            dispatch({type: UserListActionTypes.SET_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserListActionTypes.SET_USERS_SUCCESS, payload: response.data})
            }, 1000)
        } catch (e) {
            dispatch({
                type: UserListActionTypes.SET_USERS_ERROR,
                payload: 'There was an error while loading users.'
            })
        }
    }
}