import React from 'react';


const GuestItem = ({guest, deleteGuest, checkInGuest}) => {



  return (
    <>
  <h2>Guest Name: {guest.guest_name}</h2>
  <h2>Guest Email: {guest.guest_email}</h2>
  <h2>Checked In? {guest.checked_in ? "true" : "false"}</h2>
  <button onClick={()=>deleteGuest(guest._id)}> 🗑 </button>
  <button onClick={()=>checkInGuest(guest._id)}>Check In</button>
  </>
  )
}

export default GuestItem;