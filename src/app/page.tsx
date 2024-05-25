'use client'

import { useEffect } from 'react'
import './styling/index.css'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import Landing from '../pages/Landing'
import MonsterEradicationGoals from '../pages/monsters'
import Sidebar from './components/Sidebar'
import Bundles from '@/pages/bundles'
import Achievements from '@/pages/achievements'
import usePageStore from './states/setPage'

export default function Home() {
	const { user } = useUser()
	const { page } = usePageStore()

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
			<div className='wrapper'>
				{!user && <Landing />}
				{user && <Sidebar />}
				{user && page === 'bundles' && <Bundles />}
				{user && page === 'achievements' && <Achievements />}
				{user && page === 'monsters' && <MonsterEradicationGoals />}
			</div>
		</>
	)
}
