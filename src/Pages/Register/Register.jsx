import React from 'react';
import "./Register.css";

const Register = () => {
    const handleSubmit=()=>{
        alert("Thank you for registration!")
        alert("See you soon !")
    }
  return (
    <>
    <div className="main-container">
    <div className="poster"><img src="pyro_logo.png" alt="Pyro logo" /></div>
    <div className="register-container">
       

      <div className="register-form">
        <h2 className='head'>Registration form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>

          <div className="form-group">
            <label htmlFor="college">College/University(Optional):</label>
            <input type="text" id="college" name="college" required />
          </div>

          <div className="form-group">
            <label htmlFor="events">Select days:</label>
            <select id="events" name="events" multiple>
              <option value="event1">Day 1</option>
              <option value="event2">Day 2</option>
              <option value="event3">Day 3</option>
              <option value="event4">Day 4</option>
            </select>
          </div>
          
          <button className='reg-button' type="submit">Register</button>
        </form>
      </div>
      <br />
    
    </div>
   
    </div>
    <div className='pyro-field-location'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14326.735962735496!2d91.6582761!3d26.1418447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a44bda4e670c7%3A0xd31b3644428e1487!2sPyrokinesis%20Field!5e0!3m2!1sen!2sin!4v1704274791996!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </>
  );
}

export default Register;

