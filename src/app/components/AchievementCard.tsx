import useUserIDStore from '../states/userID'
import useCompletedAchievementsStore from '../states/completedAchievements'
import { useEffect, useState } from 'react'
import { Achievement } from '../pages/achievements'

interface AchievementCardProps {
	achievement: Achievement
	completedAchievements: number[]
}

export default function AchievementCard({
	achievement,
	completedAchievements,
}: AchievementCardProps) {
	const { userID } = useUserIDStore()
	const { refetchCompletedAchievements, setRefetchCompletedAchievements } =
		useCompletedAchievementsStore()
	const [achievementIsCompleted, setAchievementIsCompleted] = useState(false)

	useEffect(() => {
		setAchievementIsCompleted(
			completedAchievements.includes(achievement.id) ? true : false,
		)
	}, [completedAchievements, achievement])

	function handleClick(achievementID: number) {
		try {
			fetch(`/api/save/achievement`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userID, achievementID }),
			}).then(() => {
				setRefetchCompletedAchievements(!refetchCompletedAchievements)
			})
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div
			className='achievement-card'
			onClick={() => handleClick(achievement.id)}
		>
			<div className={`card-info ${achievementIsCompleted ? 'completed' : ''}`}>
				<img src={achievement.url} alt={achievement.name} />
				<div className='card-title'>
					<h2>{achievement.name}</h2>
					<p>{achievement.description}</p>
				</div>
			</div>
		</div>
	)
}
