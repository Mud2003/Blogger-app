import React from 'react';
import'./register.css';

export default function Register() {
  return (
      <form className='r'>
          <h3>Register Here</h3>

          <label for="username">Username</label>
          <input type="text" placeholder="Email" id="username" />

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button>Register</button>
      </form>
  )
}
