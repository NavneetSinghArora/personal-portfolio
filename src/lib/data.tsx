import { Github, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

import LogoGit from '/public/images/logos/icon-git.svg';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoPytorch from '/public/images/logos/icon-pytorch.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoGithub from '/public/images/logos/icon-github.svg';
import LogoGithubDark from '/public/images/logos/icon-github-dark.svg';
import LogoNumpy from '/public/images/logos/icon-numpy.svg';
import LogoPandas from '/public/images/logos/icon-pandas.svg';
import LogoLinux from '/public/images/logos/icon-linux.svg';
import LogoHasura from '/public/images/logos/icon-hasura.svg';
import LogoTableau from '/public/images/logos/icon-tableau.svg';
import LogoAtlassian from '/public/images/logos/icon-atlassian.svg';
import LogoSlack from '/public/images/logos/icon-slack.svg';
import LogoNotion from '/public/images/logos/icon-notion.svg';
import LogoNotionDark from '/public/images/logos/icon-notion-dark.svg';
import LogoMiro from '/public/images/logos/icon-miro.svg';

import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoNice from '/public/images/logos/logo-nice.svg';
import LogoNiceDark from '/public/images/logos/logo-nice-dark.svg';
import LogoRepath from '/public/images/logos/logo-repath.png';
import LogoCognizant from '/public/images/logos/icon-cognizant.svg';
import LogoUniHamburg from '/public/images/logos/logo-unihamburg.svg';
import LogoUniHamburgDark from '/public/images/logos/logo-unihamburg-dark.svg';
import LogoCognizantDark from '/public/images/logos/icon-cognizant-dark-mode.svg';
import LogoOmdena from '/public/images/logos/logo-omdena.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';
import ProjectWingie from '/public/images/project-wingie.png';

import AvatarAnupam from '/public/images/avatar-anupam.png';
import AvatarSameer from '/public/images/avatar-sameer.png';
import AvatarShilpa from '/public/images/avatar-shilpa.png';
import AvatarRoger from '/public/images/avatar-roger.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/NavneetSinghArora',
  GITHUB_REPO: 'https://github.com/NavneetSinghArora',
  TWITTER: 'https://twitter.com/shahsagarm',
  LINKEDIN: 'https://www.linkedin.com/in/navneet-singh-arora',
};

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experiences',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const NAV_LINKS_PAGES = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/complete/#about',
  },
  {
    label: 'Experience',
    href: '/complete/#experiences',
  },
  {
    label: 'Skills',
    href: '/complete/#skills',
  },
  {
    label: 'Testimonials',
    href: '/complete/#testimonials',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const CONTACT_LINKS = [
  {
    icon: Mail,
    type: 'email',
    url: 'aroranavneetsingh.de@gmail.com',
  },
  {
    icon: Phone,
    type: 'phone',
    url: '+4917668056076',
  },
  {
    icon: Linkedin,
    type: 'link',
    url: 'https://www.linkedin.com/in/navneet-singh-arora',
  },
  {
    icon: Github,
    type: 'link',
    url: 'https://github.com/NavneetSinghArora',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org',
  },
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/en/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'PyTorch',
    logo: LogoPytorch,
    url: 'https://pytorch.org',
  },
  {
    label: 'Numpy',
    logo: LogoNumpy,
    url: 'https://numpy.org',
  },
  {
    label: 'Pandas',
    logo: LogoPandas,
    url: 'https://numpy.org',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Hasura',
    logo: LogoHasura,
    url: 'https://hasura.io',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'GitHub',
    logo: LogoGithub,
    darkModeLogo: LogoGithubDark,
    url: 'https://github.com',
  },
  {
    label: 'Linux',
    logo: LogoLinux,
    url: 'https://www.linux.org',
  },
  {
    label: 'Tableau',
    logo: LogoTableau,
    url: 'https://www.tableau.com',
  },
  {
    label: 'Atlassian',
    logo: LogoAtlassian,
    url: 'https://www.atlassian.com',
  },
  {
    label: 'Slack',
    logo: LogoSlack,
    url: 'https://slack.com/intl/en-gb/',
  },
  {
    label: 'Notion',
    logo: LogoNotion,
    darkModeLogo: LogoNotionDark,
    url: 'https://www.notion.so',
  },
  {
    label: 'Miro',
    logo: LogoMiro,
    url: 'https://miro.com',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoRepath,
    logoAlt: 'Repath logo',
    position: 'Machine Learning Engineer',
    startDate: new Date(2023, 4),
    currentlyWorkHere: true,
    summary: [],
  },
  {
    logo: LogoRepath,
    logoAlt: 'Repath logo',
    position: 'Full Stack Engineer - Working Student',
    startDate: new Date(2021, 11),
    endDate: new Date(2023, 3),
    currentlyWorkHere: false,
    summary: [],
  },
  {
    logo: LogoOmdena,
    logoAlt: 'Omdena logo',
    position: 'Chapter Lead',
    startDate: new Date(2021, 5),
    endDate: new Date(2022, 4),
    currentlyWorkHere: false,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logo: LogoUniHamburg,
    darkModeLogo: LogoUniHamburgDark,
    logoAlt: 'Universität Hamburg logo',
    position: 'Student Assistant',
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 2),
    currentlyWorkHere: false,
    summary: [
      'Tutored Computer Vision in the Informatics Department at the Universität Hamburg.',
      'Led Q&A sessions alongside the professor and served as a session presenter.',
      'Prepared assignments, quizzes, and worksheets for students.'
    ],
  },
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Full Stack Engineer - Freelancer',
    startDate: new Date(2020, 4),
    endDate: new Date(2021, 1),
    currentlyWorkHere: false,
    summary: [
      'Worked as a Freelancer alongside my role as a Software Developer.',
      'Collaborated with AllOffice.Space on Upwork as a Python Developer.',
      'Developed a Web Scraping solution that automated manual work, reducing hours of effort to a single button click.',
      "Helped improve the company's business reach through automation."
    ],
  },
  {
    logo: LogoNice,
    darkModeLogo: LogoNiceDark,
    logoAlt: 'Nice logo',
    position: 'Tech Lead',
    startDate: new Date(2019, 9),
    endDate: new Date(2020, 9),
    currentlyWorkHere: false,
    summary: [
      'Promoted to Technical Lead while also working as a Full Stack Developer.',
      'Worked extensively on Client-Side (AngularJS, HTML5, JavaScript, CSS) and Server-Side (Java, Spring, Maven, Shell Script, Batch Script).',
      'Part of the team that built a new feature and integrated legacy code with the new functionality.',
      'Took on QA responsibilities across various aspects.',
      'Motivated the team to achieve project goals.'
    ],
  },
  {
    logo: LogoNice,
    darkModeLogo: LogoNiceDark,
    logoAlt: 'Nice logo',
    position: 'Software Engineer', 
    startDate: new Date(2018, 0),
    endDate: new Date(2019, 9),
    currentlyWorkHere: false,
    summary: [
      'Starting as a Tableau Developer, developed Tableau Dashboards and Data Sources.',
      'Created Batch Scripts to meet specific customer requirements.',
      'Joined a team to upgrade the product platform and develop new features from scratch.',
      'Collaborated with the onsite team in London and third-party consultancy (Liferay).',
      'Served as Scrum Master for the team.'
    ],
  },
  {
    logo: LogoCognizant,
    darkModeLogo: LogoCognizantDark,
    logoAlt: 'Cognizant logo',
    position: 'Program Analyst',
    startDate: new Date(2015, 11),
    endDate: new Date(2018, 0),
    summary: [
      'Joined Credit Suisse as a Software Developer during my tenure as an analyst.',
      'Contributed to four projects, specializing in Java and Shell Script.',
      'Sole developer on one project, responsible for: architecture design, development, testing, production deployment and client support.',
      'Named Innovation Lead for the team, playing a key role in reducing project costs',
      'Awarded the Kudos Award for significant contributions across all projects.'
    ],
  },
  {
    logo: LogoCognizant,
    darkModeLogo: LogoCognizantDark,
    logoAlt: 'Cognizant logo',
    position: 'Program Analyst Trainee',
    startDate: new Date(2015, 6),
    endDate: new Date(2015, 10),
    summary: [
      'Began my IT career as a Trainee.',
      'Received training in: Java, SQL and Foundational Modules (communication and soft skills).',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wingie',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Fiskil',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Roger Halloway',
    personAvatar: AvatarRoger,
    title: 'Founder - Tejon TechLabs',
    testimonial:
      'We have worked with Navneet for several projects in the past and he had always been proactive and responsive. He is skilled in his work and you will see from our previous reviews it had been a pleasure to work with him. Navneet has proven himself to be both a valued member of our team and a skilled coder. In his time working with us he has worked on a few different projects, primarily in Python. He has also remained dedicated to ensuring his builds are delivered accurately and error free.',
  },
  {
    personName: 'Sameer Makadia',
    personAvatar: AvatarSameer,
    title: 'Tech Manager (R&D) - Nice',
    testimonial:
      'Navneet is a full stack developer. Works on multiple Technologies and Completes Tasks with full Ownership and Responsibility. He is one of the quickest learner and excels from rookie to specialist very quickly. Navneet is a great thinker and develops Out of the Box Solutions. Navneet is a Great Team Player, goes out of the way in helping team as well. Happiest to work with Navneet',
  },
  {
    personName: 'Anupam Awal',
    personAvatar: AvatarAnupam,
    title: 'Engineering Team Lead - Numerator',
    testimonial:
      'Navneet works as a Full Stack Developer and leads most of the development activities in the team. Navneet is really good at his work and takes on the new challenges and roles positively. Navneet is a quick learner and brilliant at managing tasks at hand. Navneet assumed the role of Scrum Master as well for the team. Navneet also proactively work with other teams as well when required. It is a pleasant experience to work with Navneet.',
  },
  // {
  //   personName: 'Shilpa Banchor',
  //   personAvatar: AvatarShilpa,
  //   title: 'Tech Lead - Fiserv',
  //   testimonial:
  //     'Navneet worked as a full stack developer and really impressed team the way he took responsibilities. In this short span of time he managed to work as a scrum master as well. He helped us a lot. Thank you Navneet for your great support.',
  // },
];
