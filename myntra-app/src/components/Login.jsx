import React, {  useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
// import { AuthContext } from './Context/AuthContext';
import Navbar from './Navbar';
import './Login.css'
// import Footer from './Footer';

const Login = () => {

    const router = useNavigate();

    // const { LOGIN } =useContext(AuthContext)
    const [userData, setUserData] = useState({email: "", password: ""})
    //console.log(userData)

    const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit (event) {
        event.preventDefault();
        if(userData.email && userData.password) {
            try {
                const response = {data: {success: true, message: "Login Successfull", token: "abdgbhhhhhufejksjk", userData: {name: "yogesh", email: "yogesh@gmail.com"}}}
                if(response.data.success) {
                    localStorage.setItem("token", JSON.stringify(response.data.token))
                    // LOGIN(response.data.userData)
                    toast.success(response.data.message,) 
                    setUserData({email: "", password: ""})
                    router('/')
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
            <Navbar/>
            <div className='login'>
                <div className='login1'>
                    <div className='login2'>
                        <div>
                            <img style={{ width: "100%", height: "30%" }} src='https://assets.myntassets.com/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg' alt='' />
                        </div>
                        <div className='login3'>
                            <div className='login4'>
                                <form onSubmit={handleSubmit}>
                                    <h2>Login</h2>
                                    <input type='email' name='email' onChange={handleChange} required placeholder="EMAIL ADDRESS *" /> <br />
                                    <input type='password' name='password' onChange={handleChange} required placeholder="PASSWORD *" /> <br />
                                    <p className='para'>By continuing, I agree to the <span>Terms of Use</span> & <span>Privacy Policy</span></p>
                                    <input className='value' type='submit' value="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;