import fetch from 'superagent'

c
export async function fetchResults(page, searchText) {
    const response = await fetch
        .get(`${serverUrl}search/?page=${page}&searchText=${searchText}`)

    return response.body;
}