import React from 'react'
import '../Styles/SignUp.css'

const SignUp = () => {
  return (
    <section id="signup">
      <form className='form'>
        <h2>SignUp</h2>
        <div className='input-box'>
        <input type="text"  placeholder='Enter your email'/><br/>
        <input type="text"  placeholder='Create a password'/><br/>
        <input type="text"  placeholder='Confirm your password'/>
        </div>
        <button className='submit'>Signup</button>

      </form>

    </section>
  )
}

export default SignUp