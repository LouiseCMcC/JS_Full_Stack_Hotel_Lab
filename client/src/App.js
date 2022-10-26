import { useState, useEffect } from "react";
import {deleteGuest as apiDeleteGuest} from './components/GuestService';

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

  return (
    <>
      <GuestForm addGuest={addGuest}/>
      <GuestList guests={guests} deleteGuest={deleteGuest}/>
    </>
  );
}

export default App;
