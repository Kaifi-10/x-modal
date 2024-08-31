import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {

    const [isModal, setIsModal] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(formData.phone.length != 10){
            alert("Invalid phone number. Please enter a 10-digit phone number.")
            return
        }
        if(!formData.email.includes("@") || !formData.email.includes(".")){
            alert("Invalid email. Please check your email address.")
            return
        }
        if(new Date(formData.dob) > Date.now()){
            alert("Invalid date of birth. Date of birth cannot be in future.");
            return
        }

        setIsModal(false)
    }
  return (
    <div className='Xmodal' >
        <h1>User Details Modal</h1>
        <button onClick={() => setIsModal(true)} >Open Form</button>
        {isModal ? 
        
            <div className="modal" onClick={() => setIsModal(prev => !prev)}>

                <div className="modal-content" onClick={e=> e.stopPropagation()}>

                    <h2>Fill Details</h2>
                    <form onSubmit={handleSubmit}> 
                        <label>Username:</label>
                        <input type='text' name='username' id='username' value={formData.username} onChange={handleChange} required />
                        <label>Email Address:</label>
                        <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} required />
                        <label>Phone Number:</label>
                        <input type='number' name='phone' id='phone' value={formData.phone} onChange={handleChange} required />
                        <label>Date of Birth:</label>
                        <input type='date' name='dob' id='dob' value={formData.dob} onChange={handleChange} required />
                        <button type='submit' className='submit-button'>Submit</button>
                    </form>
                </div>

            </div>
        : 
        
        null}
    </div>
  )
}

export default Modal