import React, { useEffect, useRef, useState } from 'react'
// To add images to projects, you have two options:
// Option 1: Put images in the 'public' folder and reference them: image: '/images/project1.jpg'
// Option 2: Put images in 'src/assets' folder and import them:
//           import project1Image from '../src/assets/project1.jpg'
//           Then use: image: project1Image

const Projects = () => {
    const projects = [
        {
            title: 'Gym Calorie Tracker App',
            desc: 'Mobile app that assists in tracking calories through an AI agent. Built with React Native frontend, AWS Bedrock agents, Supabase, and Supabase auth.',
            github: 'https://github.com/vangaraajay/CalTrackerApp',
            live: 'https://your-live-site2.com',
            image: '/Gym calorie tracker app screenshot.png',
        },
        {
            title: 'Personal Planner Web App',
            desc: 'A AI-Powered Personal Planner app that allows you to interact with a planner app with natural language. Built with React, Langchain, and hosted and deployed on AWS.',
            github: 'https://github.com/vangaraajay/AI-Personal-Planner',
            live: 'https://your-live-site1.com',
            image: '/Ai Persnal Planner screenshot.png',
        },
        {
            title: 'PCB Test Plan Generator',
            desc: 'AI Powered PCB test plan generator that creates test plans through AI. Built for the UF Ignite Hackathon by Aeronix.',
            github: 'https://github.com/vangaraajay/IGNITE-Hackathon',
            live: 'https://your-live-site3.com',
            image: '/PCB Test maker screenshot.png',
        },
        {
            title: 'Portfolio Website',
            desc: 'Version 1 of my personal portfolio website! It was built with React, Javascript, and TailwindCSS.',
            github: 'https://github.com/vangaraajay/personal-portfolio-v1',
            live: 'https://your-live-site4.com',
            image: '/Portfolio screenshot.png',
        },
    ]

    const sectionRef = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => setInView(entry.isIntersecting))
            },
            { threshold: 0.15 }
        )
        obs.observe(el)

        // Run a small delayed check in case the section is already
        // visible when the splash unmounts so the reveal still occurs.
        const checkNow = () => {
            const r = el.getBoundingClientRect()
            const isVisible = r.top < window.innerHeight && r.bottom > 0
            if (isVisible) setInView(true)
        }
        const t = setTimeout(checkNow, 50)

        return () => { clearTimeout(t); obs.disconnect() }
    }, [])

    return (
        <section ref={sectionRef} className="w-full px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-8 navbar-font ${inView ? 'slide-up delay-100' : 'opacity-0'}`}>
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, idx) => {
                        const delays = ['delay-100', 'delay-200', 'delay-300']
                        const delayClass = delays[idx % delays.length]
                        return (
                            <article key={p.title} className={`about-card pop-up card-strong-border p-6 md:p-8 rounded-lg flex flex-col ${inView ? `slide-up ${delayClass}` : 'opacity-0'}`}>
                                {p.image ? (
                                    <img 
                                        src={p.image} 
                                        alt={p.title} 
                                        className="w-full h-40 md:h-44 object-cover rounded-md mb-4"
                                    />
                                ) : (
                                    <div className="w-full h-40 md:h-44 bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                                        <span className="text-gray-400">Image</span>
                                    </div>
                                )}

                                <header>
                                    <h3 className="navbar-font text-lg md:text-xl font-semibold mb-2">{p.title}</h3>
                                </header>

                                <p className="skill-body-font text-base md:text-lg text-gray-800 mb-4 flex-1">{p.desc}</p>

                                <footer className="mt-4 flex gap-4">
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="navbar-font text-sm md:text-base px-3 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                                        GitHub
                                    </a>
                                    {/*<a href={p.live} target="_blank" rel="noopener noreferrer" className="navbar-font text-sm md:text-base px-3 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                                        Demo
                                    </a>*/}
                                </footer>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects