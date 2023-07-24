export enum UserListActionTypes {
    SET_USERS = "SET_USERS",
    SET_USERS_SUCCESS = "SET_USERS_SUCCESS",
    SET_USERS_ERROR = "SET_USERS_ERROR",
    DELETE_USER = "DELETE_USER"
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface UserListState {
    allUsers: User[] | null;
    loading: boolean;
    error: null | string;
}

interface SetUserListAction {
    type: UserListActionTypes.SET_USERS
}

interface SetUserListSuccessAction {
    type: UserListActionTypes.SET_USERS_SUCCESS,
    payload: User[]
}

interface SetUserListErrorAction {
    type: UserListActionTypes.SET_USERS_ERROR,
    payload: string
}

interface DeleteUserAction {
    type: UserListActionTypes.DELETE_USER,
    payload: number
}

export type UserListAction = SetUserListAction | SetUserListSuccessAction | SetUserListErrorAction | DeleteUserAction