import React from 'react';
import GuestItem from './GuestItem';
import { deleteGuest } from './GuestService';

const GuestList = ({guests, deleteGuest}) => {

    const guestsItems = guests.map((guest) => {
      return <GuestItem guest={guest} deleteGuest={deleteGuest} key={guest._id} />
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