import { MonsterEradicationGoal } from '../../pages/monsters'
import useUserIDStore from '../states/userID'
import useCompletedEradicationGoalsStore from '../states/completedEradicationGoals'
import { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

interface EradicationCardProps {
	eradicationGoal: MonsterEradicationGoal
	completedEradicationGoals: number[]
}

export default function EradicationCard({
	eradicationGoal,
	completedEradicationGoals,
}: EradicationCardProps) {
	const { userID } = useUserIDStore()
	const {
		refetchCompletedEradicationGoals,
		setRefetchCompletedEradicationGoals,
	} = useCompletedEradicationGoalsStore()
	const [eradicationGoalIsCompleted, setEradicationGoalIsCompleted] =
		useState(false)

	useEffect(() => {
		setEradicationGoalIsCompleted(
			completedEradicationGoals.includes(eradicationGoal.id) ? true : false,
		)
	}, [completedEradicationGoals, eradicationGoal])

	function handleClick(monsterID: number) {
		try {
			fetch(`/api/save/monster`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userID, monsterID }),
			}).then(() => {
				setRefetchCompletedEradicationGoals(!refetchCompletedEradicationGoals)
			})
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<ResponsiveMasonry>
			<Masonry>
				<div
					className='achievement-card'
					onClick={() => handleClick(eradicationGoal.id)}
				>
					<div
						className={`card-info ${
							eradicationGoalIsCompleted ? 'completed' : ''
						}`}
					>
						<img src={eradicationGoal.url} alt={eradicationGoal.monster} />
						<div className='card-title'>
							<h2>{eradicationGoal.monster}</h2>
							<p>{`Kill ${eradicationGoal.quantity} ${eradicationGoal.monster}`}</p>
							<p>
								<strong>Reward: </strong>
								{eradicationGoal.reward}
							</p>
						</div>
					</div>
				</div>
			</Masonry>
		</ResponsiveMasonry>
	)
}
