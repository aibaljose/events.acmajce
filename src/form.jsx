import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import ticket from "./assets/ticket.png"

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
const form = () => {

  const [submit, setSubmit] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    sem: '',
    div: '',
    id: ''

  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document to Firestore
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        sem: formData.sem,
        div: formData.div,
        id: formData.id,
        timestamp: new Date(),
      });
      setSubmit(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });


      // alert('Message sent successfully!');
      // Clear the form
      setFormData({
        name: '',
        email: '',
        number: '',
        sem: '',
        div: '',
        id: ''
      });
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };




  const handleButtonClick = () => {
    // Trigger the confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (

    <div className='formpage'>
      {submit ? (
        <div className="box">
          <img src="https://ajce.acm.org/assets/LOGO23-2Riq8ZYW.png" alt="" />
          <h3>Game Development Workshop Registration Form</h3>
          <form onSubmit={handleSubmit}>

            <input type="text" name="name"
              value={formData.name}
              onChange={handleChange} placeholder='Name' required />

            <input type="email" name="email"
              value={formData.email}
              onChange={handleChange} placeholder='Gmail' required />

            <input type="Number" name="number"
              value={formData.number}
              onChange={handleChange} placeholder='WhatsApp Number' required />
            <input type="text" name="id"
              value={formData.id}
              onChange={handleChange} placeholder='ACM ID' required />


            <select className='sem' name="sem"
              value={formData.sem}
              onChange={handleChange} placeholder='Semester' id="sem" required>
              <option value="" disabled selected>Semester</option>
              <option value="S1" >S1</option>
              <option value="S1">S3</option>
              <option value="S1">S5</option>
              <option value="S1">S7</option>
              <option value="S1">S9</option>
            </select>
            <input type="text" name="div"
              value={formData.div}
              onChange={handleChange} placeholder='Class & Division' />

            <input type="submit" className='btn' required />



          </form>
        </div>
      ) : (
        <div className="img">
          <img src={ticket} alt="" />
        </div>
      
  )}
    </div>
  )
}

export default form
