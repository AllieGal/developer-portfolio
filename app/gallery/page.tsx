'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { gallery } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function GalleryPage() {
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
						<h1 className="text-4xl font-bold mb-4">Gallery</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Photography and digital art from outside of work, edited in Adobe Lightroom and
							Photoshop.
						</p>
					</motion.div>

					<div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
						{gallery.map((item, index) => (
							<motion.figure
								key={item.src}
								variants={fadeIn('up', 0.1 * index)}
								className="relative mb-6 break-inside-avoid overflow-hidden rounded-lg card-gradient"
							>
								<Image
									src={item.src}
									alt={item.alt}
									width={item.width}
									height={item.height}
									className="w-full h-auto"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
								<figcaption className="absolute top-3 left-3">
									<Badge variant="secondary">{item.category}</Badge>
								</figcaption>
							</motion.figure>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
