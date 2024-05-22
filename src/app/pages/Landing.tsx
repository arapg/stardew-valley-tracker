'use client'

import styles from './page.module.css'

export default function Landing() {
	return (
		<div className='landing'>
			<h2>Welcome to Stardew Valley Tracker!</h2>
			<h3>
				To get started, <a href='/api/auth/login'>log in</a> or create an
				account
			</h3>
		</div>
	)
}
