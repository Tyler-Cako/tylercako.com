import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../CSS/Contact.css'

const Contact = () => {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ success, setSuccess ] = useState(false)
    const [ failure, setFailure ] = useState(false)
    const form = useRef()

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

    const submitEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setSuccess(true)
                setName("")
                setEmail("")
                setMessage("")
            }, (error) => {
                setFailure(true)
                setName("")
                setEmail("")
                setMessage("")
            })
    }

    return(
        <div className="contact" name="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="form-container">
                    <form ref={form} action="index.js" onSubmit={submitEmail}>
                        <h3>Contact Form</h3>
                        <div className="contact-form">
                            <label htmlfor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                            <label htmlfor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlfor="message">Message</label>
                            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                        <button type="submit" className="contact-btn">Submit</button>
                        {success==true &&
                            <h3>Success! I'll get back to you shortly!</h3>
                        }
                        {failure==true &&
                            <h3>An error has occurred</h3>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact