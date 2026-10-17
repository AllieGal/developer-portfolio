'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function BlogPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Writing</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Early project write-ups and blogs documenting my research, design, and engineering process.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{articles.map((article, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="h-full flex flex-col card-gradient">
									<CardContent className="p-6 flex-grow">
										<div className="flex items-center text-sm text-muted-foreground mb-4">
											<BookOpen className="h-4 w-4 mr-1" />
											{article.source}
										</div>
										<h2 className="text-xl font-semibold mb-2">{article.title}</h2>
										<p className="text-muted-foreground">{article.excerpt}</p>
									</CardContent>
									<CardFooter className="p-6 pt-0">
										<Button variant="outline" className="w-full" asChild>
											<Link href={article.url} target="_blank" rel="noreferrer">
												Read <ExternalLink className="ml-2 h-4 w-4" />
											</Link>
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
