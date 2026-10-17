import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `${siteConfig.name} | ${siteConfig.role}`,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="icon" href="/favicon.png" type="image/png" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<div className="relative min-h-screen flex flex-col">
						<Navbar />
						<main className="grow pt-16">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}