import React from 'react';
import './UserDetailsModal.scss';

type UserDetailsModalProps = {
    name: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    },
    address: {
        street: string;
        city: string;
        zipcode: string;
    },
    closeModal: () => void;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({name, company, address , closeModal}) => {
    const companyAddress = `${address.city}, ${address.street}, ${address.zipcode}`

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="info">
                    <h2>{name}</h2>
                    <p>Company: {company.name}</p>
                    <p>Address: {companyAddress}</p>
                </div>
            </div>
        </div>
    );
}