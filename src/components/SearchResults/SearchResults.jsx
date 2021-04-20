import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResults } from '../../utils/fetchResults';
import { GridList, Backdrop, CircularProgress } from "@material-ui/core"
import MovieCard from "../MovieCard/MovieCard"

export default function SearchResults() {
    const { searchText } = useParams();
    const [searchResults, setSearchResults] = useState([])
    const [movieDetails, setmovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(true)

    useEffect(() => {
        fetchSearchResults();
    }, [])

    const fetchSearchResults = async (page = 1) => {
        const searchResponse = await fetchResults(page, searchText);
        console.log(searchResponse.ITEMS)
        setSearchResults(searchResponse.ITEMS);
        setOpen(false)
    }

    return (
        <div>
            <GridList
                cellHeight={250}
                cols={4}>
                {searchResults
                    ?
                    searchResults.map(movieObj => (
                        <MovieCard
                            key={movieObj.netflixid}
                            movieObj={movieObj}
                        />
                    ))
                    : null
                }
            </GridList>
            <Backdrop
                open={open}
                style={{ zIndex: 150 }}>
                {loading ?
                    <CircularProgress
                        style={{ zIndex: 151 }}
                    />
                    : null}
            </Backdrop>
        </div>
    )
}