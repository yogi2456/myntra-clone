import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
// import Footer from './Footer';
import './Register.css'

const Register = () => {

    const router = useNavigate();

    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmpassword: "" })
    // userData.name
    // userData[name]
    //console.log(userData, "userData")

    const handleChange = (event) => {
        //console.log(event.name.value, event.target.name)
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmpassword) {
            // await calling backend one server to another server request, backend validation, data to store mongodb
            try {
                const response = { data: { success: true, message: "Registration Successfull" } }
                if (response.data.success) {
                    toast.success(response.data.message)
                    setUserData({ name: "", email: "", password: "", confirmpassword: "" })
                    router('/login')
                }
            } catch (error) {
                toast.error(error)
            }
        } else {
            alert("All fields are required")
        }
    }

    return (
        <div>
            <Navbar />
            <div className='register'>
                <div className='register1'>
                    <div className='register2'>
                        <div>
                            <img style={{ width: "100%", height: "30%" }} src='https://assets.myntassets.com/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg' alt='' />
                        </div>
                        <div className='register3'>
                            <div className='register4'>
                                <form onSubmit={handleSubmit}>
                                    <h2>Sign Up</h2>
                                    <input type='text' name='name' onChange={handleChange} required placeholder='NAME*' /> <br />
                                    <input type='email' name='email' onChange={handleChange} required placeholder="EMAIL ADDRESS *" /> <br />
                                    <input type='password' name='password' onChange={handleChange} required placeholder="PASSWORD *" /> <br />
                                    <input type='confirmpassword' name='confirmpassword' onChange={handleChange} required placeholder='CONFIRMPASSWORD' /> <br />
                                    <p className='para'>By continuing, I agree to the <span>Terms of Use</span> & <span>Privacy Policy</span></p>
                                    <input className='value1' type='submit' value="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

