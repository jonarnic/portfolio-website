'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'AI Engineering Workflow Optimizer',
    year: '2023 - 2024',
    description:
      'Designed and implemented internal automation tools to integrate AI coding assistants (Cursor, Tabnine, Codium) into engineering workflows. Built data synchronization services connecting Google Sheets, Jira, and internal systems to ensure consistent project tracking. Improved developer productivity by standardizing tooling and reducing manual reporting overhead.',
    tags: ['Automation', 'AI Tooling', 'Cursor', 'Python', 'Jira'],
    gradient: 'from-indigo-500 to-purple-500',
    image: '/projects/ragflow.png',
    demoLink: null,
    githubLink: null,
  },
  {
    title: 'Containerized Execution Platform',
    year: '2024',
    description:
      'Developed automation tooling supporting authentication and secrets management systems in a cloud-native environment. Enhanced deployment workflows and improved service rollout reliability across multiple engineering teams. Strengthened observability and failure detection to reduce operational risk.',
    tags: ['Cloud Native', 'Docker', 'Kubernetes', 'Observability', 'CI/CD'],
    gradient: 'from-emerald-500 to-teal-500',
    image: '/projects/agentgpt.png',
    demoLink: null,
    githubLink: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  )}
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Play size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-slate-500 font-mono ml-2">{project.year}</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links at bottom */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 font-medium"
                      >
                        <Github size={14} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


