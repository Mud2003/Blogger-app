import React from 'react';
import "./login.css";
import axios from "axios";
import {  useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   // Send a POST request to the backend endpoint with the email and password input values
    try {
      await axios.post('http://localhost:5000/api/users/login', { email, password });
      alert('Login successful'); // Output: 'Login successful',
    } catch (error) {
      alert("Error in occured"); // Output: 'Invalid email or password'
    }
  };

  return (
      <form onSubmit={handleSubmit}>
          <h3>Login Here</h3>

          <label for="username">Email</label>
          <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type='submit'>Log In</button>
      </form>      
  )
}
