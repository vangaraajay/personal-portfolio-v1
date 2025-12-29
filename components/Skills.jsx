import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const blocks = [
    {
      title: 'Languages & Frameworks',
      body:
        'Java, Python, C++, C#, JavaScript, TypeScript, React (Vite, React Router), React Native, Node.js, Express.js, Tailwind CSS, .NET, OpenCV, LangChain',
    },
    {
      title: 'Databases & Cloud',
      body:
        'PostgreSQL, MongoDB, DynamoDB, pgvector, AWS (S3, Lambda, EC2, API Gateway, Cognito, AI Agents), Terraform, Kubernetes',
    },
    {
      title: 'Tools & Practices',
      body: 'Git/GitHub, GitHub Actions, Jenkins, Docker, Linux CLI, RESTful APIs',
    },
    {
      title: 'Certifications',
      body: 'AWS Cloud Practitioner, Java Fundamentals',
    },
  ]

  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      { threshold: 0.18 }
    )
    obs.observe(el)

    // Ensure the reveal still triggers if the section is already
    // visible (for example, after the splash unmounts).
    const checkNow = () => {
      const r = el.getBoundingClientRect()
      const isVisible = r.top < window.innerHeight && r.bottom > 0
      if (isVisible) setInView(true)
    }
    const t = setTimeout(checkNow, 50)

    return () => { clearTimeout(t); obs.disconnect() }
  }, [])

  return (
    <section ref={sectionRef} className="w-full px-6 py-12 skills-section">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-semibold mb-6 navbar-font text-center md:text-left ${inView ? 'slide-left delay-100' : 'opacity-0'}`}>
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((b, idx) => {
            const delays = ['delay-100', 'delay-200', 'delay-300']
            const delayClass = delays[idx % delays.length]
            return (
              <div
                key={b.title}
                className={`about-card pop-up p-7 rounded-lg text-left ${inView ? `slide-left ${delayClass}` : 'opacity-0'}`}
              >
                <div className="text-base md:text-lg font-semibold mb-3 navbar-font">{b.title}</div>
                <div className="text-base md:text-lg text-gray-800 leading-relaxed skill-body-font">{b.body}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills