import { combineReducers } from 'redux';
import { userListReducer } from './userListReducer';

export const reducers = combineReducers({
    users: userListReducer,
});

export type RootState = ReturnType<typeof reducers>