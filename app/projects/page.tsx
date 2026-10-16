'use client';

import { motion } from 'framer-motion';

import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export default function ProjectsPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeInScale(0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Projects</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Professional and academic work, from event-driven data pipelines and internal platforms
							to human-centered design projects.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								variants={fadeInScale(index * 0.1)}
								className="flex"
							>
								<ProjectCard project={project} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
