import fetch from 'superagent';
const serverUrl = "http://localhost:7890/";

export async function fetchVotes(netflixid) {
    const response = await fetch
        .get(`${serverUrl}vote/${netflixid}`)

    return response.body;
}

export async function upVote(newflixid) {
    const response = await fetch
        .post(`${serverUrl}vote/up/${netflixid}`)

    return response.body;
}

export async function downVote(netflixid) {
    const response = await fetchVotes
        .post(`${serverUrl}vote/down/${netflixid}`)

    return response.body;
}