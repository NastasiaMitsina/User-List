import React, { useEffect, useMemo, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUserList } from '../../redux/action-creators/users';
import { UserInfo } from '../UserInfo/UserInfo';
import { useActions } from '../../hooks/useActions';
import { UserDetailsModal } from '../UserDetailsModal/UserDetailsModal';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './UsersList.scss';

export const UsersList: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [currentUserId, setCurrentUserId] = useState<number | null>(null)
    const {allUsers, loading, error} = useTypedSelector(state => state.users)
    const {getUserList} = useActions()

    const currentUserInfo = useMemo(() => {
        return allUsers?.find(user => user.id === currentUserId)
    }, [currentUserId])

    const showCurrentUser = (id: number): void => {
        setModalOpen(true)
        setCurrentUserId(id)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const filteredUsers = useMemo(() => (
        allUsers?.filter(user => {
            const value = searchValue.toLocaleLowerCase();
            let {name, username, email} = user;

            return name.toLocaleLowerCase().includes(value)
                || username.toLocaleLowerCase().includes(value)
                || email.toLocaleLowerCase().includes(value);
        })
    ), [allUsers, searchValue])

    const handleReset = () => {
        setSearchValue('')
        getUserList()
    }

    useEffect(() => {
        getUserList()
    }, [])

    if (loading) {
        return <span className="loader"></span>
    }

    if (error) {
        return <ErrorMessage error={error} />
    }

    return (
        <div className="content-wrapper">
            <div className="search">
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Tap to find a user"
                />
                <button className="btn-reset" onClick={handleReset}>Reset</button>
            </div>
            <ul>
                {filteredUsers && filteredUsers.map(user => (
                    <UserInfo
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        searchValue={searchValue}
                        showCurrentUser={showCurrentUser}
                    />
                ))}
            </ul>
            {currentUserInfo && isModalOpen &&
                <UserDetailsModal
                    name={currentUserInfo.name}
                    company={currentUserInfo.company}
                    address={currentUserInfo.address}
                    closeModal={closeModal}
                />}
        </div>
    )
}