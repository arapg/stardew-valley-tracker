'use client'

import { useEffect, useState } from 'react'
import useUserIDStore from '../states/userID'
import useCompletedAchievementsStore from '../states/completedAchievements'
import AchievementCard from '../components/AchievementCard'

export interface Achievement {
	id: number
	name: string
	description: string
	url: string
}

export default function Achievements() {
	const { userID, setUserID } = useUserIDStore()
	const [achievements, setAchievements] = useState<Achievement[]>([])
	const [completedAchievements, setCompletedAchievements] = useState<number[]>(
		[],
	)
	const { refetchCompletedAchievements, setRefetchCompletedAchievements } =
		useCompletedAchievementsStore()

	async function fetchUser() {
		try {
			const response = await fetch('/api/auth/me', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			setUserID(data.sub)
		} catch (error) {
			console.log(error)
		}
		setRefetchCompletedAchievements(true)
	}

	async function fetchAchievements() {
		try {
			const response = await fetch('/api/achievements', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			setAchievements(data)
		} catch (error) {
			console.log(error)
		}
	}

	async function fetchCompletedAchievements() {
		try {
			const response = await fetch(`/api/user/achievements/${userID}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			const ids = data.map((achievement: { id: number }) => achievement.id) // Extracting IDs
			setCompletedAchievements(ids)
			setRefetchCompletedAchievements(false)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchUser()
		fetchAchievements()
	}, [])

	useEffect(() => {
		if (userID) {
			fetchCompletedAchievements()
		}
	}, [userID, refetchCompletedAchievements])

	return (
		<div>
			<h1>Achievements</h1>
			<p>Coming soon...</p>
			{achievements.map((achievement) => (
				<AchievementCard
					key={achievement.id}
					achievement={achievement}
					completedAchievements={completedAchievements}
				/>
			))}
		</div>
	)
}
