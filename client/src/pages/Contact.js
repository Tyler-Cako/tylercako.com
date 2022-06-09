import '../CSS/Contact.css'

const Contact = () => {
    return(
        <div className="contact">
            <div className="container">
                <h2>Contact</h2>
                <form action="index.js" method="POST">
                    <label htmlfor="name">Name</label>
                    <input type="text" name="name" />
                    <label htmlfor="email">Email</label>
                    <input type="email" name="email" />
                    <label htmlfor="message">Message</label>
                    <textarea name="message" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact