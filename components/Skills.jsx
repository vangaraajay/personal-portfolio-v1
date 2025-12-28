import React from 'react'

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

  return (
    <section className="w-full px-6 py-12 skills-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 navbar-font text-center md:text-left">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="about-card pop-up p-8 rounded-lg text-left"
            >
              <div className="text-lg md:text-xl font-semibold mb-3 navbar-font">{b.title}</div>
              <div className="text-base md:text-lg text-gray-800 leading-relaxed skill-body-font">{b.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills