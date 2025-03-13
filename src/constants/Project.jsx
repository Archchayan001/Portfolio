import React from 'react'
import { PROJECTS } from './index'

const Project = () => {
  return (
    <div className='border-neutral-900 bd-1' id='projects'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>

            {/* Project image with hover effect */}
            <div className='relative w-full h-60 lg:w-1/4 lg:h-60 group overflow-hidden rounded'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-[180px]  px-8  object-cover'
              />
              <a
                href={project.projectlink} // Assuming project.link contains the project URL
                target='_blank'
                rel='noopener noreferrer'
                className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition duration-300'
              >
                <button className='px-4 py-2 bg-purple-500 text-white rounded'>
                  View Project
                </button>
              </a>
            </div>

            {/* Project details */}
            <div className='w-full max-w-xl lg:w-3/4 mt-4 lg:mt-0'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>

              {/* Technologies */}
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
