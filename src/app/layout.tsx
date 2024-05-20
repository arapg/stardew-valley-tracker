import type { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client'
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
			<UserProvider>
				<body className={inter.className}>{children}</body>
			</UserProvider>
		</html>
	)
}
