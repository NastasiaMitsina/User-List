import React from 'react';
import './ErrorMessage.scss';

type ErrorMessageProps = {
    error: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({error}) => {
    return (
        <div className="error">
            <h3 className="error_header">Error Loading Users</h3>
            <p className="error_body">{error}</p>
        </div>
    )
}