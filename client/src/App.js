import { useState, useEffect } from "react";
import {deleteGuest as apiDeleteGuest} from './components/GuestService';
import {putGuest} from './components/GuestService';

import './App.css';

import GuestList from './components/GuestList';
import GuestForm from './components/GuestForm';

function App() {

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests();
  }, [])

  const getGuests = function(){
    fetch('http://localhost:9000/api/hotel')
    .then(res => res.json())
    .then(guests => setGuests(guests))
}

const addGuest = (guest) => {
  let temp = guests.map(g => g);
  temp.push(guest);
  setGuests(temp);
}

const deleteGuest = (id) => {
  apiDeleteGuest(id).then(()=>{
    let temp = guests.map(g=>g);
    const toDel = guests.map(g =>g._id).indexOf(id);
    temp.splice(toDel, 1);
    setGuests(temp);
  })
}

const checkInGuest = (id) => {
  const updatedGuest = guests.map((guest) => {
    return guest._id === id
    ?{...guest, checked_in: !guest.checked_in} : guest;
  })
  setGuests(updatedGuest);
  const filteredGuest = updatedGuest.filter((guest)=>{return guest._id===id})
  putGuest(filteredGuest)
}

  return (
    <>
      <GuestForm addGuest={addGuest}/>
      <GuestList guests={guests} deleteGuest={deleteGuest} checkInGuest={checkInGuest}/>
    </>
  );
}

export default App;
