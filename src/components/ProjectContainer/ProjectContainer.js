import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import AppleIcon from '@material-ui/icons/Apple'
import AndroidIcon from '@material-ui/icons/Android'

import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}

    {project.IOSLink && (
      <a
        href={project.IOSLink}
        aria-label='ios link'
        className='link link--icon'
      >
        <AppleIcon />
      </a>
    )
    }

    {project.androidLink && (
      <a
        href={project.androidLink}
        aria-label='android link'
        className='link link--icon'
      >
        <AndroidIcon />
      </a>
    )
    }
  </div>
)

export default ProjectContainer
