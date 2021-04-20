import fetch from 'superagent';
const serverUrl = process.env.REACT_SERVER_URL;

export async function fetchVotes(netflixid) {
    const response = await fetch
        .get(`${serverUrl}vote/${netflixid}`)

    return response.body;
}

export async function upVote(netflixid) {
    const response = await fetch
        .post(`${serverUrl}vote/up/${netflixid}`)

    return response.body;
}

export async function downVote(netflixid) {
    const response = await fetch
        .post(`${serverUrl}vote/down/${netflixid}`)

    return response.body;
}