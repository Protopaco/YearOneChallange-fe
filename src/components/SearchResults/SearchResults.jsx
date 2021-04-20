import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResults } from '../../utils/fetchResults';
import { GridList, Backdrop, CircularProgress } from "@material-ui/core"
import MovieCard from "../MovieCard/MovieCard"
import MovieDetails from "../MovieDetails/MovieDetails";

export default function SearchResults() {
    const { searchText } = useParams();
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(true);
    const [openDetails, setOpenDetails] = useState(false)
    const [currentDetails, setCurrentDetails] = useState({})

    useEffect(() => {
        fetchSearchResults();
    }, [])

    const fetchSearchResults = async (page = 1) => {
        const searchResponse = await fetchResults(page, searchText);
        console.log(searchResponse.ITEMS)
        setSearchResults(searchResponse.ITEMS);
        setOpen(false)
    }

    const handleCardClick = (movieObj) => {
        setOpen(true);
        setCurrentDetails(movieObj);
        setLoading(false);
    }

    const handleCloseDetails = () => {
        setOpen(false);
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
                            handleCardClick={handleCardClick}
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
                    :
                    <MovieDetails
                        movieObj={currentDetails}
                        handleCloseDetails={handleCloseDetails}
                    />
                }
            </Backdrop>
        </div>
    )
}