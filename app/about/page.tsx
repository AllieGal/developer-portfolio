'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

const interests = ['Horseback riding', 'Volleyball', 'Travel', 'Photography', 'Gaming'];

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							Hey there! I&apos;m a versatile full stack engineer specializing in scalable e-commerce
							solutions. I&apos;m passionate about turning business problems into technical solutions and
							helping the people around me grow. Right now I&apos;m leading front-end architecture and
							AI-driven development on the Discovery Services team at Abercrombie &amp; Fitch Co.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Early in college, I was a passionate neuroscience student. I was incredibly interested in the
								study and visualization of the neural pathways influencing perception. I spent my first two
								years participating in research projects and learning from professionals in the field.
							</p>
							<p className="text-muted-foreground">
								During my junior year, I had my first coding experience and fell in love. I was fascinated not
								only by how applications on a computer work, but also by the prospect that I could build
								whatever I wanted using code. I switched to computer science while continuing my work as a
								neuroscience TA.
							</p>
							<p className="text-muted-foreground">
								Since graduating Summa Cum Laude in 2022, I&apos;ve built up a reservoir of experiences that
								have given me a strong, comprehensive, and multidisciplinary background in software
								engineering. I have often been called a &quot;go-getter,&quot; and I hope this portfolio makes
								clear that I am not only an ambitious self-starter, but also action-oriented, resourceful, and
								well suited to driving projects and people.
							</p>
						</div>
						<div className="space-y-3">
							<h2 className="text-2xl font-semibold">Outside of Work</h2>
							<div className="flex flex-wrap gap-2">
								{interests.map((interest) => (
									<Badge key={interest} variant="secondary">
										{interest}
									</Badge>
								))}
							</div>
						</div>
						<Button asChild>
							<Link href="/contact">
								Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						className="relative h-[500px] rounded-lg overflow-hidden"
					>
						<Image
							src="/profile.jpg"
							alt="Alexandria Slattery in front of the Golden Gate Bridge"
							fill
							className="object-cover object-[75%_30%]"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									B.A. in Computer &amp; Information Science from Berea College, Summa Cum Laude with a
									3.75 GPA on a full tuition scholarship.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									3+ years across Abercrombie &amp; Fitch Co. and HealthTech Solutions, with roles ranging from event-driven
									Java services to React front ends and team-wide AI enablement.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Top Skills</h3>
								<p className="text-muted-foreground">
									Java, Spring Boot, Kafka, React, and TypeScript, with a focus on engineering
									quality, AI-driven development, and UI design.
								</p>
								<Link
									href="/skills"
									className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline"
								>
									See all skills <ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
