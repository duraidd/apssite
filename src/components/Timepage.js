import React, { useState } from 'react'
import '../Cont.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Timepage() {

    const [first, setfirst] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSend = async (e) => {
        e.preventDefault();

        console.log("FFFF", first);

      const response =  await axios.post("https://apsback.vercel.app/aps/send",first);

      toast.success(response.data.message,{autoClose: 3000})

      setTimeout(()=>{
        setfirst({ name: "", email: "", subject: "", message: "" })
      },1000)


    }

    return (
        <div style={{ width: '100%' }} >
            <ToastContainer />
            <div class="container">
                <div class="form-container">
                    <h2>Get In touch</h2>
                    <form onSubmit={(e)=>handleSend(e)} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', margin: 'auto', padding: '16px' }}>
                        <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc' }} placeholder="Your Name" required value={first.name} onChange={(e) => setfirst({ ...first, name: e.target.value })} />

                        <div style={{ position: 'relative', width: '100%' }}>
                            <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc' }} placeholder="Enter your Email Address" required value={first.email} onChange={(e) => setfirst({ ...first, email: e.target.value })} />
                            <span style={{ position: 'absolute', top: '3px', right: '12px', color: '#9e9e9e', fontSize: '24px' }}>&#9993;</span>
                        </div>

                        <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc' }} placeholder="Enter Your Subject" required value={first.subject} onChange={(e) => setfirst({ ...first, subject: e.target.value })} />

                        <textarea style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #dcdcdc' }} placeholder="Enter Your Message" rows="5" required value={first.message} onChange={(e) => setfirst({ ...first, message: e.target.value })} ></textarea>

                        <button  style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', border: '4px', border: 'none', cursor: 'pointer', marginTop: '16px', width: '100%' }}>Contact us</button>
                    </form>

                </div>
                <div class="image-container">
                    <img class="img-style" src="https://tools-api.webcrumbs.org/image-placeholder/300/400/people/1" alt="Group of people" />
                    <div class="overlay">
                        <span>%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Timepage