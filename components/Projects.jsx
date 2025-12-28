import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            desc: 'A full‑stack web application built with React and Node.js that demonstrates authentication, CRUD operations, and responsive UI.',
            github: 'https://github.com/yourusername/project1',
            live: 'https://your-live-site1.com',
        },
        {
            title: 'Project 2',
            desc: 'Mobile app built with React Native that integrates device APIs and a real‑time backend for collaboration features.',
            github: 'https://github.com/yourusername/project2',
            live: 'https://your-live-site2.com',
        },
        {
            title: 'Project 3',
            desc: 'Cloud-native service deployed to AWS with serverless functions, event-driven processing, and observability.',
            github: 'https://github.com/yourusername/project3',
            live: 'https://your-live-site3.com',
        },
        {
            title: 'Project 4',
            desc: 'Computer vision project using OpenCV and custom models to analyze and label images in near real-time.',
            github: 'https://github.com/yourusername/project4',
            live: 'https://your-live-site4.com',
        },
    ]

    return (
        <section className="w-full px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 navbar-font">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <article key={p.title} className="about-card pop-up card-strong-border p-6 md:p-8 rounded-lg flex flex-col">
                            {/* image placeholder - replace with <img src={p.image} .../> when available */}
                            <div className="w-full h-40 md:h-44 bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                                <span className="text-gray-400">Image</span>
                            </div>

                            <header>
                                <h3 className="navbar-font text-lg md:text-xl font-semibold mb-2">{p.title}</h3>
                            </header>

                            <p className="skill-body-font text-base md:text-lg text-gray-800 mb-4 flex-1">{p.desc}</p>

                            <footer className="mt-4 flex gap-4">
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="navbar-font text-sm md:text-base px-3 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                                    GitHub
                                </a>
                                <a href={p.live} target="_blank" rel="noopener noreferrer" className="navbar-font text-sm md:text-base px-3 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                                    Live
                                </a>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects