'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skillGroups } from '@/lib/constants';
import { staggerContainer, fadeIn } from '@/lib/motion';

export function SkillsPreview() {
	// Show the first 3 skill groups in the preview
	const previewGroups = skillGroups.slice(0, 3);

	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="Technical Skills"
					description="Core languages and frameworks I work with every day."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
				>
					{previewGroups.map((group, index) => (
						<motion.div
							key={group.title}
							variants={fadeIn('up', 0.1 * (index + 1))}
							className="space-y-6"
						>
							<Card className="h-full">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-4">{group.title}</h3>
									<div className="flex flex-wrap gap-2">
										{group.skills.map((skill) => (
											<Badge key={skill} variant="secondary">
												{skill}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/skills">
							View All Skills <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
