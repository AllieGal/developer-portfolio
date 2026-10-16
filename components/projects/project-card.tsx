import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Project } from '@/lib/constants';

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="flex flex-col h-full w-full card-gradient">
			<CardContent className="flex-grow p-6">
				<p className="text-sm text-primary mb-2">{project.context}</p>
				<h3 className="font-bold text-xl mb-2">{project.title}</h3>
				<p className="text-muted-foreground mb-4">{project.description}</p>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag, tagIndex) => (
						<Badge key={tagIndex} variant="secondary">
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
			{project.links && project.links.length > 0 && (
				<CardFooter className="p-6 pt-0 gap-2 flex-wrap">
					{project.links.map((link) => (
						<Button key={link.href} size="sm" variant="outline" asChild>
							<Link href={link.href} target="_blank" rel="noreferrer">
								<ExternalLink className="h-4 w-4 mr-2" />
								{link.label}
							</Link>
						</Button>
					))}
				</CardFooter>
			)}
		</Card>
	);
}
