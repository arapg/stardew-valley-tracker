import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useState } from 'react'
import Bundles from './Bundles'

export default function Home() {
	return (
		<>
			<a href='/api/auth/login'>Login</a>
			<a href='/api/auth/logout'>Logout</a>
			<Bundles />
		</>
	)
}
