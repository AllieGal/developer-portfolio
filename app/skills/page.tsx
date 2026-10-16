'use client';

import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { skillGroups } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Skills &amp; Expertise</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							The languages, frameworks, and practices I use to build and ship full stack software.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{skillGroups.map((group, index) => (
							<motion.div key={group.title} variants={fadeIn('up', 0.3 + index * 0.05)}>
								<Card className="card-gradient h-full">
									<CardContent className="p-6">
										<h2 className="text-2xl font-semibold mb-6">{group.title}</h2>
										<div className="flex flex-wrap gap-2">
											{group.skills.map((skill) => (
												<Badge key={skill} variant="secondary" className="text-sm">
													{skill}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
