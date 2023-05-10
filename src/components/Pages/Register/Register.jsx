import React from 'react';
import {  useState } from 'react';
import'./register.css';
import axios from "axios";


export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    function handleSubmit(e) {
        e.preventDefault(); // prevent page from refreshing

        const newUser = {
            name,
            email,
            password,
            password2
        }

        setName('');
        setEmail('');
        setPassword('');
        setPassword2('');


        axios.post("http://localhost:5000/api/users/register", newUser).then(()=>{
            alert("User registration successful...")
        }).catch((err)=>{
            alert(err)
        })
    };

  return (
      <form className='r' onSubmit={handleSubmit}>
          <h3>Register Here</h3>

          <label for="username">Username</label>
          <input type="text" placeholder="Name" id="username" value={name} onChange={(e) => {
              setName(e.target.value)
          }} />

          <label for="username">Email</label>
          <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => {
              setEmail(e.target.value)
          }} />

          <label for="username">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => {
              setPassword(e.target.value)
          }} />

          <label for="password">Confirm Password</label>
          <input type="password" placeholder="Password" id="password2" value={password2} onChange={(e) => {
              setPassword2(e.target.value)
          }} />

          <button type='submit'>Register</button>
      </form>
  )
}
