import { useUser } from '@auth0/nextjs-auth0/client'
import { useEffect, useState } from 'react'

export default function UserCard() {
	const { user } = useUser()
	const [profilePicture, setProfilePicture] = useState<string | undefined>('')
	const [showPopover, setShowPopover] = useState(false)
	const [newProfilePicture, setNewProfilePicture] = useState('')

	useEffect(() => {
		fetchProfilePicture()
	}, [])

	async function fetchProfilePicture() {
		if (user) {
			try {
				const response = await fetch(`/api/user/picture/${user.sub}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				})
				const data = await response.json()
				setProfilePicture(data)
			} catch (error) {
				console.log(error)
			}
		}
	}

	async function updateProfilePicture() {
		if (user && newProfilePicture) {
			try {
				const response = await fetch(`/api/saveUser/profile-picture/`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						profilePicture: newProfilePicture,
						userID: user.sub,
					}),
				})
				if (response.ok) {
					setProfilePicture(newProfilePicture)
					setShowPopover(false)
				} else {
					console.log('Failed to update profile picture')
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<div className='logout-container'>
			<div className='user-card'>
				<div className='user-info'>
					<img
						src={profilePicture}
						alt='profile picture'
						onClick={() => setShowPopover(!showPopover)}
						style={{ cursor: 'pointer' }}
					/>
					<p>
						<strong>Farmer</strong> <br />
						{user?.nickname}
					</p>
				</div>

				<a href='/api/auth/logout'>
					<button className='logout'>Log Out</button>
				</a>
			</div>
			{showPopover && (
				<div className='popover'>
					<p>Change profile picture</p>
					<input
						type='text'
						placeholder='Paste new profile picture URL'
						value={newProfilePicture}
						onChange={(e) => setNewProfilePicture(e.target.value)}
					/>
					<button onClick={updateProfilePicture}>Submit</button>
				</div>
			)}
		</div>
	)
}
