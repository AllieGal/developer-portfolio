'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="A full stack engineer passionate about problem-solving, building solutions, and leadership."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[400px] rounded-lg overflow-hidden"
					>
						<Image
							src="/profile.jpg"
							alt="Alexandria Slattery in front of the Golden Gate Bridge"
							fill
							className="object-cover object-[75%_30%]"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">Full Stack Engineer</h3>
						<p className="text-muted-foreground mb-6">
							I specialize in scalable e-commerce solutions. At Abercrombie &amp; Fitch Co., I lead
							front-end architecture for an internal feature-flag management tool, drive AI-assisted
							development on my team, and have built event-driven microservices consuming millions of
							e-commerce events a day.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Education</h4>
									<p className="text-sm text-muted-foreground">B.A. Computer &amp; Information Science</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Experience</h4>
									<p className="text-sm text-muted-foreground">3+ Years Professional</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Focus</h4>
									<p className="text-sm text-muted-foreground">Java, React &amp; AI-Driven Development</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Honors</h4>
									<p className="text-sm text-muted-foreground">Summa Cum Laude</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild>
							<Link href="/about">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
