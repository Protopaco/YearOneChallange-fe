import React from 'react'
import { useParams } from 'react-router-dom'

export default function SearchResults() {
    const { searchText } = useParams();
    return (
        <div>
            {searchText}
        </div>
    )
}