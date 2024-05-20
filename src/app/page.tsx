'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useState } from 'react'
import Bundles from './Bundles'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
	const { user } = useUser()
	useEffect(() => {
		if (user) {
			fetch('/api/saveUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ user }),
			})
		}
	}, [user])
	return (
		<>
			<a href='/api/auth/login'>Login</a>
			<a href='/api/auth/logout'>Logout</a>
			<Bundles />
		</>
	)
}
