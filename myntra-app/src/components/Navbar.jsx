import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const router = useNavigate();
    return (
        <>
            <div className="navbar">
                <div className="navbar1">
                    <div class="navbar2">
                        <img style={{width: "70%", height: "90%"}} src="https://th.bing.com/th/id/OIP.te86PFl36qpw7_6NH44ecwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='' />
                    </div>
                    <div className="navbar3">
                        <p>MEN</p>
                        <p>WOMEN</p>
                        <p>KIDS</p>
                        <p>HOME&LIVING</p>
                        <p>BEAUTY</p>
                        <div className="new">
                            <p>STUDIO</p>
                            <p>NEW</p>
                        </div>
                    </div>
                    <div className="navbar4">
                        <div>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div>
                            <input placeholder="Search for products, brands and more" />
                        </div>
                    </div>
                    <div className="navbar5">
                        <div onClick={() => router("/register")}>
                            <i class="fa-regular fa-user"></i>
                            <p>Profile</p>
                        </div>
                        <div>
                            <i class="fa-regular fa-heart"></i>
                            <p>Whistlist</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <p>Bag</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
