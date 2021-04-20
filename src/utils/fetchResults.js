import fetch from 'superagent'
// const serverUrl = process.env.REACT_SERVER_URL;
const serverUrl = "http://localhost:7890/";
export async function fetchResults(page, searchText) {
    const response = await fetch
        .get(`${serverUrl}search/?page=${page}&searchText=${searchText}`)

    return response.body;
}