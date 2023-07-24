import React from 'react';
import { useDispatch } from 'react-redux';
import { Highlight } from '../Highlight/Highlight';
import { UserListActionTypes } from '../../redux/types';
import './UserInfo.scss';

type UserInfoProps = {
    id: number,
    name: string,
    username: string,
    email: string,
    searchValue: string,
    showCurrentUser: (id: number) => void
}

export const UserInfo: React.FC<UserInfoProps> = (
    {   id,
        name,
        username,
        email,
        searchValue,
        showCurrentUser
    }) => {
    const dispatch = useDispatch()

    const handleDeleteUser = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation()
        dispatch({type: UserListActionTypes.DELETE_USER, payload: id})
    }

    return (
        <li onClick={() => showCurrentUser(id)}>
            <div className="user">
                <div className="user-info">
                    <div className="user-info_name">
                        <Highlight value={name} searchValue={searchValue} />
                    </div>
                    <div className="user-info_details">
                        <p><Highlight value={username} searchValue={searchValue} /></p>
                        <p><Highlight value={email} searchValue={searchValue} /></p>
                    </div>
                </div>
            </div>
            <button className="btn" onClick={(e) => handleDeleteUser(e, id)}>Delete</button>
        </li>
    )
}