import React from 'react';
import './Highlight.scss';

type HighlightProps = {
    value: string,
    searchValue: string
}

export const Highlight: React.FC<HighlightProps> = ({value, searchValue}) => {
    const highlightValue = (value: string, searchValue: string) => {
        if (!searchValue || searchValue.trim() === '') {
            return value
        }

        const regex = new RegExp(`(${searchValue})`, 'gi')
        const parts = value.split(regex)

        return (
            <>
                {parts.map((part, i) => regex.test(part)
                    ? (
                        <span key={i} className="highlight">{part}</span>
                    )
                    : (
                        part
                    ))}
            </>
        )
    }

    return <>{highlightValue(value, searchValue)}</>
}