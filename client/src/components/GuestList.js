import React from 'react';
import GuestItem from './GuestItem';
import { deleteGuest } from './GuestService';

const GuestList = ({guests, deleteGuest, checkInGuest}) => {

    const guestsItems = guests.map((guest) => {
      return <GuestItem guest={guest} deleteGuest={deleteGuest} checkInGuest={checkInGuest} key={guest._id} />
    })

  return (
    <div>
    <ul>
        <h1>My Hotel Guests</h1>
      {guestsItems}
    </ul>
  </div>
  )
}

export default GuestList;