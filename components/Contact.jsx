import React from 'react'

const Contact = () => {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 navbar-font">Contact Me</h2>

        <p className="mb-6 skill-body-font text-gray-800">I’m always open to internships, collaborations, or chatting about AI and software development. Reach out!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form
            action="https://formspree.io/f/mjgvryqa"
            method="POST"
            className="about-card p-6 rounded-lg flex flex-col gap-4"
          >
            <label className="sr-only">Name</label>
            <input name="name" type="text" placeholder="Your name" required className="p-3 border border-black/10 rounded focus:outline-none focus:ring-2 focus:ring-black/10" />

            <label className="sr-only">Email</label>
            <input name="email" type="email" placeholder="Your email" required className="p-3 border border-black/10 rounded focus:outline-none focus:ring-2 focus:ring-black/10" />

            <label className="sr-only">Message</label>
            <textarea name="message" placeholder="Your message" required rows="5" className="p-3 border border-black/10 rounded resize-y focus:outline-none focus:ring-2 focus:ring-black/10 skill-body-font" />

            <button
              type="submit"
              className="mt-2 self-start navbar-font px-4 py-2 border border-black rounded hover:bg-black hover:text-white transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
            >
              Send
            </button>
          </form>

          <aside className="about-card p-6 rounded-lg">
            <div className="mb-4">
              <div className="text-base font-semibold mb-2 navbar-font">Contact Info</div>
              <div className="skill-body-font text-gray-800">I’m available for internships, freelance work, and collaborations.</div>
            </div>

            <div className="space-y-3">
              <div className="skill-body-font"><strong className="navbar-font">Email:</strong> <a href="mailto:vangaraajay@gmail.com" className="text-black">vangaraajay@gmail.com</a></div>
              <div className="skill-body-font"><strong className="navbar-font">LinkedIn:</strong> <a href="https://www.linkedin.com/in/vangaraajay/" target="_blank" rel="noopener noreferrer" className="text-black">linkedin.com/in/vangaraajay</a></div>
              <div className="skill-body-font"><strong className="navbar-font">GitHub:</strong> <a href="https://github.com/vangaraajay" target="_blank" rel="noopener noreferrer" className="text-black">github.com/vangaraajay</a></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact