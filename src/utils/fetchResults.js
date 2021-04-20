import fetch from 'superagent'

const serverUrl = process.env.REACT_SERVER_URL;

export async function fetchResults(page, searchText) {
    const response = await fetch
        .get(`${serverUrl}search/?page=${page}&searchText=${searchText}`)

    return response.body;
}