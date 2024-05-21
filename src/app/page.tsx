'use client'

import { useEffect, useState } from 'react'
import './styling/index.css'
import Bundles from './Bundles'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import Landing from './Landing'

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

	return <div className='wrapper'>{!user ? <Landing /> : <Bundles />}</div>
}
