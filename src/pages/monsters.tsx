'use client'

import '../app/styling/index.css'
import { useEffect, useState } from 'react'
import useUserIDStore from '../app/states/userID'
import useCompletedEradicationGoalsStore from '../app/states/completedEradicationGoals'
import EradicationGoalCard from '../app/components/EradicationCard'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export interface MonsterEradicationGoal {
	id: number
	monster: string
	quantity: number
	reward: string
	url: string
}

export default function MonsterEradicationGoals() {
	const { userID, setUserID } = useUserIDStore()
	const [eradicationGoals, setEradicationGoals] = useState<
		MonsterEradicationGoal[]
	>([])
	const [completedEradicationGoals, setCompletedEradicationGoals] = useState<
		number[]
	>([])
	const {
		refetchCompletedEradicationGoals,
		setRefetchCompletedEradicationGoals,
	} = useCompletedEradicationGoalsStore()

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
		setRefetchCompletedEradicationGoals(true)
	}

	async function fetchEradicationGoals() {
		try {
			const response = await fetch('/api/eradication-goals', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			setEradicationGoals(data)
		} catch (error) {
			console.log(error)
		}
	}

	async function fetchCompletedEradicationGoals() {
		try {
			const response = await fetch(`/api/user/eradications/${userID}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			// Extracting IDs
			const ids = data.map(
				(eradicationGoal: { id: number }) => eradicationGoal.id,
			)
			setCompletedEradicationGoals(ids)
			setRefetchCompletedEradicationGoals(false)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchUser()
		fetchEradicationGoals()
	}, [])

	useEffect(() => {
		if (userID) {
			fetchCompletedEradicationGoals()
		}
	}, [userID, refetchCompletedEradicationGoals])

	return (
		<div>
			<h1>EradicationGoals</h1>
			<p>Coming soon...</p>
			<ResponsiveMasonry>
				<Masonry>
					{eradicationGoals.map((eradicationGoal) => (
						<EradicationGoalCard
							key={eradicationGoal.id}
							eradicationGoal={eradicationGoal}
							completedEradicationGoals={completedEradicationGoals}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
			{/* {eradicationGoals.map((eradicationGoal) => (
				<EradicationGoalCard
					key={eradicationGoal.id}
					eradicationGoal={eradicationGoal}
					completedEradicationGoals={completedEradicationGoals}
				/>
			))} */}
		</div>
	)
}
