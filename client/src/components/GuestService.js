const baseURL = 'http://localhost:9000/api/hotel/'

export const postGuest = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteGuest = (id) =>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
