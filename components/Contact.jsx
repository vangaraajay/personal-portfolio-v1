import React from 'react'

const Contact = () => {
  return (
    <>
        <h2>Contact Me</h2>
        <p>I’m always open to internships, collaborations, or chatting about AI and software development. Reach out!</p>

        <form 
            action="https://formspree.io/f/mjgvryqa" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '10px' }}
        >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required rows="5"></textarea>
            <button type="submit">Send</button>
        </form>

        <ul>
            <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
            <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
        </ul>
    </>
  )
}

export default Contact