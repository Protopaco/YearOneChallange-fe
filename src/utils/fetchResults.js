import fetch from 'superagent'

const serverUrl = "https://year-one-movie-search.herokuapp.com/"

export async function fetchResults(page, searchText) {
    const response = await fetch
        .get(`${serverUrl}search/?page=${page}&searchText=${searchText}`)

    return response.body;
}