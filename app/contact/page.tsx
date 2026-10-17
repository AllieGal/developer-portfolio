'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, BookOpen, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							I&apos;m open to remote software engineering roles. Reach out by email or on LinkedIn.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<Link
												href={`mailto:${siteConfig.email}`}
												className="text-muted-foreground hover:text-primary transition-colors break-all"
											>
												{siteConfig.email}
											</Link>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">{siteConfig.location} · Open to remote</p>
										</div>
										<div className="flex items-center">
											<Linkedin className="h-5 w-5 text-primary mr-3" />
											<Link
												href={siteConfig.links.linkedin}
												target="_blank"
												rel="noreferrer"
												className="text-muted-foreground hover:text-primary transition-colors"
											>
												LinkedIn
											</Link>
										</div>
										<div className="flex items-center">
											<Github className="h-5 w-5 text-primary mr-3" />
											<Link
												href={siteConfig.links.github}
												target="_blank"
												rel="noreferrer"
												className="text-muted-foreground hover:text-primary transition-colors"
											>
												github.com/AllieGal
											</Link>
										</div>
										<div className="flex items-center">
											<BookOpen className="h-5 w-5 text-primary mr-3" />
											<Link
												href={siteConfig.links.medium}
												target="_blank"
												rel="noreferrer"
												className="text-muted-foreground hover:text-primary transition-colors"
											>
												Medium
											</Link>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)} className="flex">
							<Card className="card-gradient w-full">
								<CardContent className="p-6 h-full flex flex-col justify-center gap-4">
									<h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
									<p className="text-muted-foreground">
										Interested in working together or have a question? Send me an email or LinkedIn message,
										and I&apos;ll get back to you soon.
									</p>
									<Button asChild>
										<Link href={`mailto:${siteConfig.email}`}>
											Email Me <Mail className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button variant="outline" asChild>
										<Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
											Message Me on LinkedIn <Linkedin className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
