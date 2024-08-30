import React, { useState } from 'react'
import '../Cont.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img1 from '../asset/Girl2.png'

function Timepage() {

    const [first, setfirst] = useState({ name: "", email: "", subject: "", message: "" });

    const [loader, setLoader] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();


        setLoader(true)

        const response = await axios.post("https://apsback.vercel.app/aps/send", first);

        toast.success(response.data.message, { autoClose: 3000 })

        setTimeout(() => {
            setfirst({ name: "", email: "", subject: "", message: "" })
        }, 1000)

        if (response) {
            setLoader(false)
        }


    }

    return (
        <div style={{  backgroundImage: `linear-gradient(90deg, rgba(255,219,219,1) 0%, rgba(240,126,126,1) 93%)`,overflow:'hidden' }} >
            <ToastContainer />
            <div class="container">
                <div class="form-container">
                    <h2 style={{color:'black'}} >Get In touch</h2>
                    <form onSubmit={(e) => handleSend(e)} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', margin: 'auto', padding: '16px' }}>
                        <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc' ,outline:'none'}} placeholder="Your Name" required value={first.name} onChange={(e) => setfirst({ ...first, name: e.target.value })} />

                        <div style={{ position: 'relative', width: '100%' }}>
                            <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc',outline:'none' }} placeholder="Enter your Email Address" required value={first.email} onChange={(e) => setfirst({ ...first, email: e.target.value })} />
                            <span style={{ position: 'absolute', top: '3px', right: '12px', color: '#9e9e9e', fontSize: '24px' }}>&#9993;</span>
                        </div>

                        <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc',outline:'none' }} placeholder="Enter Your Subject" required value={first.subject} onChange={(e) => setfirst({ ...first, subject: e.target.value })} />

                        <textarea style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '0px solid #dcdcdc',outline:'none' }} placeholder="Enter Your Message" rows="5" required value={first.message} onChange={(e) => setfirst({ ...first, message: e.target.value })} ></textarea>

                        <button disabled={loader} style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', border: '4px', border: 'none', cursor: 'pointer', marginTop: '16px', width: '100%' }}>{ !loader ? "Contact us" : "Loading"}</button>
                    </form>

                </div>
                <div class="image-container">
                    <img class="img-style" src={Img1} alt="Group of people" />                   
                </div>
            </div>

        </div>
    )
}

export default Timepage