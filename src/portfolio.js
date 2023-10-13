const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mhamzaasif.github.io',
  title: 'Muhammad Hamza.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muhammad Hamza',
  role: 'Full Stack Engineer',
  description:
    `As a full stack developer with ${new Date().getFullYear() - new Date('01/01/2020').getFullYear()} years of experience, I have worked extensively on the MERN stack, which includes React.js, MongoDB, Express and Node. I am also well-versed in various Javascript frameworks such as Next.js and Nest.js, as well as database technologies like Sequelize. Throughout my career, I have gained expertise in designing and building complex web applications, creating scalable and efficient back-end solutions, and implementing interactive and responsive front-end interfaces. My portfolio website showcases my passion for web development and my proficiency in the latest tools and technologies. It highlights my projects, skills, and achievements, and reflects my dedication to delivering high-quality software solutions to clients.`,
  resume: 'https://jobee.pk/resume/mhamzaasif',
  social: {
    linkedin: 'https://linkedin.com/in/muhammad-hamza-asif-javed',
    github: 'https://github.com/mhamzaasif',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Leagues.GG',
    description:
      'Leagues.GG offers a user-friendly interface with advanced features, including  online tournaments and matches, and team creation and management. Gamers of all skill levels can join and compete in fair play, while the platform ensures a seamless and immersive gaming experience with advanced security features.',
    stack: ['React', 'SASS', 'NodeJs', 'Express', 'AWS', 'MongoDB'],
    livePreview: 'https://leagues.gg',
  },
  {
    name: 'Aftercart',
    description:
      'Aftercart is a revolutionary product that provides insurance services to Shopify orders. With Aftercart, Shopify merchants can ensure that their customers are protected in case of any unexpected events, such as lost, stolen, or damaged products during shipping.',
    stack: ['React', 'Typescript', 'NodeJs', 'Express', 'Postgresql', 'Shopify'],
    livePreview: 'https://aftercart.com',
  },
  {
    name: 'Cureforu',
    description:
      'CureForU is a service that allows practicing doctors to share information about rare medical cases and discuss them with doctors who have previously dealt with similar cases.',
    stack: ['React Native', 'TypeScript'],
    livePreview: 'https://cureforu.com',
    androidLink: 'https://play.google.com/store/apps/details?id=com.cureforu',
    IOSLink: 'https://apps.apple.com/us/app/cureforu/id6446494290'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Sass',
  'Material UI',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'React',
  'Next JS',
  'Redux',
  'NodeJs',
  'Nest JS',
  'Code Igniter',
  'Postgres',
  'MongoDB',
  'Git',
  'CI/CD',
  'Jest',
  'Selenium',
  'Firebase',
  'Heroku',
  'AWS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'm.hamzaasifjaved@gmail.com',
}

export { header, about, projects, skills, contact }
