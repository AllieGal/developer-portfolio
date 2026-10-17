export const siteConfig = {
	name: 'Alexandria Slattery',
	shortName: 'A. Slattery',
	role: 'Full Stack Engineer',
	location: 'Philadelphia, PA',
	description:
		'Full stack engineer specializing in scalable e-commerce solutions, passionate about problem-solving, building solutions, and leadership.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Writing',
			href: '/blog',
		},
		{
			title: 'Gallery',
			href: '/gallery',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/AllieGal',
		linkedin: 'https://www.linkedin.com/in/alexandria-s-5766a4175/',
		medium: 'https://medium.com/@cienna.a.slattery',
	},
	email: 'alexandriaslattery@gmail.com',
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
	links?: ProjectLink[];
};

export const experiences: Experience[] = [
	{
		title: 'Full Stack Engineer (Leadership Development Program)',
		company: 'Abercrombie & Fitch Co. · Discovery Services',
		location: 'Remote',
		startDate: 'Jul 2023',
		endDate: 'Present',
		description: [
			'Leading front-end architecture and development of an internal tool consolidating feature-flag management, projected to save ~$250K/year in licensing costs.',
			'Engineered event-driven Spring Boot microservices consuming millions of daily e-commerce events via Kafka, monitored with Splunk dashboards and Dynatrace.',
			'Independently upgraded the legacy Sorting Rules Manager to Java 17 (Spring Boot, Kafka) ahead of its migration to OpenShift.',
			'Led the team\'s early adoption of Org Owned Quality, an org-wide engineering quality initiative, raising its score from 0 to 1.96 of 3; drove 100% team adoption of DORA Metrics; rolled out linting, mutation testing, and CI/CD improvements across repositories.',
			'Led AI-driven development: rolled out GitHub Copilot through trainings, authored Cursor skills, and presented on ensuring AI quality at scale to senior engineers org-wide.',
			'Leading the rollout of an internal AI Harness across team repositories, from cross-functional discovery to build-ready stories with ongoing performance monitoring.',
		],
		technologies: [
			'Java',
			'Spring Boot',
			'Kafka',
			'React',
			'TypeScript',
			'Figma',
			'PrimeReact',
			'Vite',
			'REST APIs',
			'OpenShift (OCP)',
		],
	},
	{
		title: 'Front-End Developer',
		company: 'HealthTech Solutions',
		location: 'Remote',
		startDate: 'Jan 2023',
		endDate: 'Jul 2023',
		description: [
			'Independently migrated the MCO-Tracker UI from Pug to a responsive React interface for a web app holding millions of MCO and state-government records, improving performance and user experience.',
			'Owned front-end architecture and UI/UX, integrating with the Express and MongoDB backend.',
			'Collaborated with international teams to ensure smooth integrations.',
		],
		technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
	},
	{
		title: 'Leadership Development Program Intern',
		company: 'Abercrombie & Fitch Co. · Infrastructure and Operations',
		location: 'Columbus, OH',
		startDate: 'May 2022',
		endDate: 'Aug 2022',
		description: [
			'Designed and built a Python (Tkinter) desktop app that creates ServiceNow asset records via REST API; adopted by the company for IT asset management.',
			'Shaped the app from employee feedback, streamlining asset management, improving security, and cutting acquisition costs.',
			'Designed a homepage wireframe aimed at attracting younger buyers.',
		],
		technologies: ['Python', 'Tkinter', 'REST APIs', 'ServiceNow', 'Wireframing'],
	},
	{
		title: 'Cellular and Molecular Biology Intern',
		company: 'University of Pennsylvania · Summer Undergraduate Internship Program',
		location: 'Remote',
		startDate: 'Jun 2020',
		endDate: 'Aug 2020',
		description: [
			'Researched genes associated with autism and schizophrenia with Dr. Michael Hart.',
			'Designed an experimental project examining the effects of dopamine on neural plasticity in roundworms (C. elegans), written up as the research proposal "The Power of the Worm: Examining the Role of Dopamine and Stress in Morphologic Plasticity."',
		],
		technologies: ['Research Design', 'Data Analysis'],
		links: [
			{
				label: 'Research Proposal',
				href: 'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:80fdc8d1-28ac-3cd5-a9dc-2fbf4ebacacf',
			},
		],
	},
	{
		title: 'Undergraduate Research: Brain Cancer Immunology Intern',
		company: 'Seattle Children\'s Research Institute',
		location: 'Seattle, WA',
		startDate: 'Jun 2019',
		endDate: 'Aug 2019',
		description: [
			'Tested gene expression in macrophages to examine their role in glioblastoma with Dr. Courtney Crane\'s team.',
			'Presented "Identifying the function of protein VSIG4 as seen in the Tumor Microenvironment of Glioblastoma" at the 19th Annual Berea Undergraduate Research Symposium.',
		],
		technologies: ['Gene Expression Analysis', 'Data Analysis', 'Scientific Presentation'],
		links: [
			{ label: 'Presentation', href: 'https://youtu.be/fiDlwpctyDs' },
		],
	},
];

export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	title: string;
	context: string;
	description: string;
	tags: string[];
	links?: ProjectLink[];
};

export const projects: Project[] = [
	{
		title: 'Feature-Flag Management Tool',
		context: 'Abercrombie & Fitch Co. · 2025 – present',
		description:
			'Leading front-end architecture and development of an internal tool consolidating feature-flag management and replacing a third-party vendor; projected to save ~$250K/year in licensing.',
		tags: ['React', 'TypeScript', 'PrimeReact', 'Vite', 'REST APIs', 'Figma'],
	},
	{
		title: 'Team AI Enablement',
		context: 'Abercrombie & Fitch Co. · 2025 – present',
		description:
			'Led AI-driven development on my team: rolled out GitHub Copilot through trainings, authored Cursor skills, orchestrated agentic workflows, and presented on ensuring AI quality at scale to senior engineers org-wide.',
		tags: ['Agentic Workflows', 'GitHub Copilot', 'Cursor', 'Figma AI', 'Technical Training'],
	},
	{
		title: 'Dataload Consumer',
		context: 'Abercrombie & Fitch Co. · 2023 – 2024',
		description:
			'Event-driven Spring Boot microservices consuming millions of daily e-commerce events via Kafka and delivering them to downstream systems, monitored with Splunk dashboards and Dynatrace.',
		tags: ['Java', 'Spring Boot', 'Kafka', 'Splunk', 'Dynatrace'],
	},
	{
		title: 'AI Harness Adoption',
		context: 'Abercrombie & Fitch Co. · 2026',
		description:
			'Leading the rollout of an internal AI Harness across team repositories, owned from cross-functional discovery to build-ready stories with ongoing monitoring defined.',
		tags: ['AI Tooling', 'Cursor', 'Technical Planning'],
	},
	{
		title: 'Org Owned Quality Adoption',
		context: 'Abercrombie & Fitch Co. · 2024 – 2026',
		description:
			'Led the team\'s early adoption of an org-wide engineering quality initiative, raising its score from 0 to 1.96 of 3; drove 100% team adoption of DORA Metrics and rolled out linting, mutation testing, and CI/CD improvements across repositories.',
		tags: ['DORA Metrics', 'CI/CD', 'Mutation Testing', 'Linting'],
	},
	{
		title: 'Sorting Rules Manager Java 17 Upgrade',
		context: 'Abercrombie & Fitch Co. · 2024',
		description:
			'Independently upgraded the legacy Sorting Rules Manager to Java 17 (Spring Boot, Kafka) ahead of its migration to OpenShift.',
		tags: ['Java 17', 'Spring Boot', 'Kafka', 'CI/CD', 'OpenShift'],
	},
	{
		title: 'MCO-Tracker',
		context: 'HealthTech Solutions · 2023',
		description:
			'Independently migrated the UI from Pug to a responsive React interface for a web app holding millions of MCO and state-government records, improving performance and user experience. Integrated the React front end with the Express and MongoDB backend through RESTful APIs.',
		tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
	},
	{
		title: 'Asset Tagger',
		context: 'Abercrombie & Fitch Co. internship · 2022',
		description:
			'A desktop app that creates ServiceNow asset records during laptop setup through the REST API. Sole designer and developer; adopted by the company for IT asset management.',
		tags: ['Python', 'Tkinter', 'REST APIs', 'ServiceNow'],
		links: [
			{ label: 'Video', href: 'https://youtu.be/6DF0tZZo1xA' },
			{ label: 'Blog', href: 'https://ciennablog340661941.wordpress.com/' },
		],
	},
	{
		title: 'MARY: A Food Bank Network',
		context: 'Berea College',
		description:
			'Led 7 student developers to build a Flask and SQL platform connecting food banks, pantries, and distributors; owned UX and database design.',
		tags: ['Python', 'Flask', 'SQL', 'Bootstrap', 'UX Design'],
		links: [
			{ label: 'Demo', href: 'https://youtu.be/2pWRgHneGoQ' },
			{
				label: 'Wireframe',
				href: 'https://alexandriaslattery.wordpress.com/mary-a-food-bank-network-wireframe/',
			},
			{
				label: 'User Journey',
				href: 'https://alexandriaslattery.wordpress.com/mary-a-food-bank-network/',
			},
			{
				label: 'Logical Model',
				href: 'https://alexandriaslattery.wordpress.com/mary-a-food-bank-network-logical-model/',
			},
		],
	},
	{
		title: 'Gratitude Together',
		context: 'HCI Student Design Competition · Berea College',
		description:
			'Led a team of two to design and build a React and Node.js social app for an international HCI competition, aimed at increasing gratitude among college students.',
		tags: ['React', 'Node.js', 'Figma', 'User Research'],
		links: [
			{
				label: 'Write-up',
				href: 'https://medium.com/berea-hcc/gratitude-together-793e123c7fb',
			},
			{
				label: 'Wireframe',
				href: 'https://www.figma.com/file/4JfHQmf2q5e6Wbxnueb9Q8/Gratitude-UX-Wire-Frame?node-id=107%3A4278',
			},
			{
				label: 'Prototype',
				href: 'https://www.figma.com/proto/4JfHQmf2q5e6Wbxnueb9Q8/Gratitude-UX-Wire-Frame?node-id=107%3A4278&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=107%3A4278',
			},
		],
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate?: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Arts',
		field: 'Computer & Information Science',
		institution: 'Berea College',
		location: 'Berea, KY',
		endDate: 'Dec 2022',
		gpa: '3.75',
		achievements: [
			'Summa Cum Laude',
			'Full-tuition scholarship',
			'Relevant coursework: Data Structures, Design & Analysis of Algorithms, Software Design & Implementation, Database Systems, Networking, Computational Intelligence, Discrete Mathematics, Applied Statistics, Team Study in UX Design',
			'Previously a neuroscience student, with 3+ years of experience in research and analysis',
		],
	},
];

export type SkillGroup = {
	title: string;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages & Frameworks',
		skills: [
			'Java',
			'TypeScript',
			'JavaScript',
			'Python',
			'SQL',
			'HTML/CSS',
			'React',
			'Spring Boot',
			'Node.js',
			'Express',
			'Flask',
			'PrimeReact',
			'Vite',
			'Bootstrap',
		],
	},
	{
		title: 'Platforms & Tools',
		skills: [
			'Apache Kafka',
			'MongoDB',
			'RESTful APIs',
			'Microsoft Azure',
			'OpenShift (OCP)',
			'Splunk',
			'Dynatrace',
			'Git (GitHub, GitLab)',
			'CI/CD',
			'JUnit',
			'Jira',
			'IntelliJ',
			'ServiceNow',
		],
	},
	{
		title: 'AI-Driven Development',
		skills: ['Agentic Workflows', 'GitHub Copilot', 'Cursor', 'Claude Code', 'Figma AI'],
	},
	{
		title: 'Skills',
		skills: [
			'Full-Stack Development',
			'Front-End Architecture',
			'Responsive UI',
			'Microservices',
			'Event-Driven Architecture',
			'Feature Flags',
			'DevOps',
			'DORA Metrics',
			'Test Automation',
			'Mutation Testing',
			'Linting',
			'Data Engineering',
			'Data Flow Optimization',
		],
	},
	{
		title: 'Design',
		skills: [
			'UI Design',
			'Figma',
			'Wireframing',
			'User Research',
			'User Testing',
		],
	},
	{
		title: 'Ways of Working',
		skills: [
			'Cross-Functional Collaboration',
			'Technical Documentation',
			'Requirements Gathering',
			'Cross-Team QA Coordination',
			'Agile',
		],
	},
];

export type Article = {
	title: string;
	excerpt: string;
	source: string;
	url: string;
};

export const articles: Article[] = [
	{
		title: 'Gratitude Together Project Personal Blog',
		excerpt:
			'The design journey behind Gratitude Together, from surveying students on loneliness and connectedness to wireframes and prototypes.',
		source: 'Medium',
		url: 'https://medium.com/@cienna.a.slattery',
	},
	{
		title: 'Asset Tagger Internship Blog',
		excerpt:
			'Notes from my Abercrombie & Fitch Co. internship building a desktop app that creates ServiceNow asset records during laptop setup.',
		source: 'WordPress',
		url: 'https://ciennablog340661941.wordpress.com/',
	},
];

export type GalleryItem = {
	src: string;
	alt: string;
	category: 'Photography' | 'Digital Art';
	width: number;
	height: number;
};

export const gallery: GalleryItem[] = [
	{
		src: '/gallery/fairy-house.jpg',
		alt: 'Miniature fairy house with a green shingled roof at the base of a mossy tree',
		category: 'Photography',
		width: 1600,
		height: 1067,
	},
	{
		src: '/gallery/collage.jpg',
		alt: 'Digital collage of a figure whose head is made of a grid of sepia photographs',
		category: 'Digital Art',
		width: 1242,
		height: 1551,
	},
	{
		src: '/gallery/ducks-at-dusk.jpg',
		alt: 'Two ducks in silhouette wading through rippling water at dusk',
		category: 'Photography',
		width: 1600,
		height: 1066,
	},
	{
		src: '/gallery/garden.jpg',
		alt: 'Sunlit garden bed of millet, coleus, and orange flowers with a lens flare',
		category: 'Photography',
		width: 1600,
		height: 1066,
	},
	{
		src: '/gallery/butterfly-portrait.webp',
		alt: 'Low-light portrait with a glowing blue butterfly on the cheek and bokeh lights behind',
		category: 'Digital Art',
		width: 2000,
		height: 1333,
	},
	{
		src: '/gallery/porch-portrait.jpg',
		alt: 'Smiling portrait of a person in a patterned sweater seated in a wicker chair',
		category: 'Photography',
		width: 1600,
		height: 1067,
	},
	{
		src: '/gallery/pond-reflection.jpg',
		alt: 'Golden sky and trees reflected in a still pond with ducks at the shore',
		category: 'Photography',
		width: 1600,
		height: 1066,
	},
];
