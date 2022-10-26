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

export const putGuest = (payload) => {
    const id = payload[0]._id;
    const newPayload = {};
        newPayload['checked_in'] = payload[0].checked_in;
        newPayload['guest_name'] = payload[0].guest_name;
        newPayload['guest_email'] = payload[0].guest_email;

    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(newPayload),
        headers: {'Content-Type': 'application/json'}

    })

}
