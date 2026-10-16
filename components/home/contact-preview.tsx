'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { siteConfig } from '@/lib/constants';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Get In Touch"
					description="Interested in working together or have a question? Feel free to reach out!"
					className="text-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-xl mx-auto mt-10 flex flex-col sm:flex-row gap-4 justify-center"
				>
					<Button size="lg" asChild>
						<Link href={`mailto:${siteConfig.email}`}>
							Email Me <Mail className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
							LinkedIn <Linkedin className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
							GitHub <Github className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
