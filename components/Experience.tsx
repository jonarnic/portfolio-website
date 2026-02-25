'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'New Relic',
    location: 'Remote',
    period: 'Jan 2024 — Present',
    description: [
      "Engineer secure, reliable systems within New Relic's authentication and secrets management ecosystem.",
      'Improve service reliability by enhancing observability, reducing operational overhead, and mitigating failure modes across distributed systems.',
      'Delivered automation and tooling that improved development and service rollout workflows for multiple internal engineering groups.',
      'Tech: JavaScript, React, Node.js, Python, React Native',
    ],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'NVIDIA',
    location: 'Santa Clara, CA (Hybrid)',
    period: 'Jul 2023 — Dec 2023',
    description: [
      'Led infrastructure automation and improved CI/CD pipeline reliability across multiple engineering teams, reducing deployment failures and increasing release stability.',
      'Enhanced system observability and monitoring to proactively detect issues and reduce mean time to recovery (MTTR) in distributed environments.',
      'Collaborated with backend and platform teams to optimize containerized deployments, improving scalability, security, and operational efficiency.',
      'Tech: Python, Docker, Automation, CI/CD',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'NVIDIA',
    location: 'Santa Clara, CA (Hybrid)',
    period: 'Jul 2020 — Jun 2023',
    description: [
      'Evaluated and integrated multiple AI coding assistants (Tabnine, Codium, Cursor) into engineering workflows, helping improve development efficiency and tooling adoption.',
      'Built integration programs to synchronize and transform data between Google Sheets, Jira, Nautobot, and internal systems, ensuring consistent data pipelines across engineering teams.',
      'Developed Python-backed web applications for inspection management, inventory tracking, and parts catalog operations.',
      'Tech: JavaScript, React, Node.js, Python',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'MojoTech',
    location: 'Houston, TX',
    period: 'Dec 2018 — Jul 2020',
    description: [
      'Designed backend services for analytics, experimentation, and feature validation, enabling data-driven decisions and faster iteration cycles.',
      'Collaborated with platform teams to redesign a core business domain, decomposing a monolithic system into modular React microservices, reducing deployment risk and improving scalability.',
    ],
  },
  {
    title: 'Web Application Developer',
    company: 'Crema',
    location: 'Houston, TX',
    period: 'Jan 2016 — Nov 2018',
    description: [
      'Developed front-end features using React, improving UI performance, flow, and usability across several major applications.',
      'Built and maintained Node.js/Express APIs, including integrations with authentication providers, reporting systems, and third-party APIs.',
      'Wrote Python automation scripts to support data processing, reporting pipelines, and operational tooling for internal teams.',
      'Refactored legacy JavaScript code and migrated older UI components into modern React patterns, increasing maintainability and development velocity.',
    ],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-slate-200 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full border-2 border-white"></div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <span className="font-semibold text-slate-900">{exp.company}</span>
                    <span className="flex items-center gap-1 text-sm">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4 ml-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


