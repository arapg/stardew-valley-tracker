import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styling/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Stardew Valley Tracker',
	description: 'Track your Stardew Valley progress!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
