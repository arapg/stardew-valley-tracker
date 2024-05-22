'use client'

import { useEffect, useState } from 'react'
import './styling/index.css'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import Landing from '../pages/Landing'
import MonsterEradicationGoals from '../pages/monsters'
import Bundles from '../pages/bundles'
import Achievements from '../pages/achievements'

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
		<div className='wrapper'>
			{!user ? <Landing /> : <MonsterEradicationGoals />}
			{!user ? <Landing /> : <Achievements />}
			{!user ? <Landing /> : <Bundles />}
		</div>
	)
}
