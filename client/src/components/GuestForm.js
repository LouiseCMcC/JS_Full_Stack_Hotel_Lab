import {useState} from "react";

import {postGuest} from "./GuestService";


const GuestForm = ({addGuest}) =>{
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData={}
        newFormData["guest_name"]=formData.guest_name;
        newFormData["guest_email"]=formData.guest_email;
        newFormData["checked_in"]=formData.checked_in;
        postGuest(newFormData).then((data) => {
            addGuest(data);
        });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="guest_name">Guest Name:</label>
            <input  onChange={onChange}type="text" id="guest_name" v-model="guest_name" required/>

            <label htmlFor="guest_email">Guest Email:</label>
            <input  onChange={onChange}type="text" id="guest_email"  required/>

            <label htmlFor="checked_in">Checked In?</label>
            <input  onChange={onChange}type="text" id="checked_in" required/>

            <input type="submit" value="Save" id="save"/>

        </form>
    )
}
export default GuestForm;
