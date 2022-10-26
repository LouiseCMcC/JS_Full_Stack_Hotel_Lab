use hotel;
db.dropDatabase();

db.guests.insertMany([ 
  {
    guest_name: 'Mike',
    guest_email: 'mike@email.com',
    checked_in: true
  },
  {
    guest_name: 'Mary',
    guest_email: 'mary@email.com',
    checked_in: true
  },
]);