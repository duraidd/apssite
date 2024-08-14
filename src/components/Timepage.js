import React from 'react'
import { Chrono } from 'react-chrono';
import '../Cont.css';

function Timepage() {



    return (
        <div style={{ width: '100%' }} >

            <div class="container">
                <div class="form-container">
                    <h2>Get In touch</h2>
                    <form style={{display: 'flex' ,flexDirection: 'column', gap: '16px', width: '100%',  margin: 'auto', padding: '16px'}}>
                        <input type="text" style={{width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc'}} placeholder="Your Name" />

                        <div style={{position: 'relative', width: '100%'}}>
                            <input type="email" style={{width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc'}} placeholder="Enter your Email Address" />
                            <span style={{position: 'absolute', top: '3px', right: '12px', color: '#9e9e9e', fontSize: '24px'}}>&#9993;</span>
                        </div>

                        <input type="text" style={{width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc'}} placeholder="Enter Your Subject" />

                        <textarea style={{width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc'}} placeholder="Enter Your Message" rows="5"></textarea>

                        <button style={{backgroundColor: '#007bff', color: 'white', padding: '12px', border: '4px', border: 'none', cursor: 'pointer', marginTop: '16px', width: '100%'}}>Contact us</button>
                    </form>

                </div>
                <div class="image-container">
                    <img class="img-style"  src="https://tools-api.webcrumbs.org/image-placeholder/300/400/people/1" alt="Group of people" />
                    <div class="overlay">
                        <span>%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Timepage