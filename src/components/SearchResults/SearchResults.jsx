import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResults, fetchSearchResults } from '../../utils/fetchResults';

export default function SearchResults() {
    const { searchText } = useParams();
    const [searchResults, setSearchResults] = useState({})

    useEffect(() => {
        fetchSearchResults();
    }, [])

    const fetchSearchResults = async (page = 1) => {
        const searchResponse = await fetchResults(page, searchText);
        setSearchResults(searchResponse);
    }

    return (
        <div>
            {searchText}
        </div>
    )
}