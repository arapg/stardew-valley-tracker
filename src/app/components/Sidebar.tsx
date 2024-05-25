import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import usePageStore from '../states/setPage'
import UserCard from './UserCard'

export default function Sidebar() {
	const { user } = useUser()
	const { page, setPage } = usePageStore()

	return (
		<div className='sidebar'>
			<div className='links'>
				<button onClick={(e) => setPage('bundles')}>Bundles</button>

				<button onClick={(e) => setPage('achievements')}>Achievements</button>

				<button onClick={(e) => setPage('monsters')}>
					Monster Eradication Goals
				</button>
			</div>
			<UserCard />
		</div>
	)
}
