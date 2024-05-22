'use client'

import BundleCard from './components/bundles/BundleCard'
import { useEffect, useState } from 'react'
import useCompletedItemsStore from './states/completedItems'
import useUserIDStore from './states/userID'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export interface Bundle {
	name: string
	reward: string
	slots: number
	url: string
	roomName: string
}

export interface Item {
	id: number
	name: string
	quantity: number
	url: string
	bundleName: string
}

export default function Bundles() {
	const [bundles, setBundles] = useState<Bundle[]>([])
	const [items, setItems] = useState<Item[]>([])
	const [completedItems, setCompletedItems] = useState<number[]>([])
	const { userID, setUserID } = useUserIDStore()
	const { refetchCompletedItems, setRefetchCompletedItems } =
		useCompletedItemsStore()

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
		setRefetchCompletedItems(true)
	}

	async function fetchCompletedItems() {
		try {
			const response = await fetch(`/api/user/items/${userID}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			const ids = data.map((item: { id: number }) => item.id) // Extracting IDs
			setCompletedItems(ids)
			setRefetchCompletedItems(false)
		} catch (error) {
			console.error(error)
		}
	}

	async function fetchBundles() {
		try {
			const response = await fetch('/api/bundles', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			setBundles(data)
		} catch (error) {
			console.log(error)
		}
	}

	async function fetchItems() {
		try {
			const response = await fetch('/api/items', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			setItems(data)
		} catch (error) {
			console.log(error)
		}
		setRefetchCompletedItems(false)
	}

	useEffect(() => {
		fetchUser()
		fetchBundles()
		fetchItems()
	}, [])

	useEffect(() => {
		fetchCompletedItems()
	}, [refetchCompletedItems])

	const bundlesByRoom: { [key: string]: Bundle[] } = bundles.reduce(
		(acc, bundle) => {
			if (!acc[bundle.roomName]) {
				acc[bundle.roomName] = []
			}
			acc[bundle.roomName].push(bundle)
			return acc
		},
		{} as { [key: string]: Bundle[] },
	)

	return (
		<>
			<a href='/api/auth/logout'>
				<button>Log Out</button>
			</a>
			<h1>Bundles</h1>
			<div>
				{Object.keys(bundlesByRoom).map((roomName) => (
					<div key={roomName}>
						<h2>{roomName}</h2>
						<div className='bundle-wrapper'>
							<ResponsiveMasonry>
								<Masonry columnsCount={2}>
									{bundlesByRoom[roomName].map((bundle) => {
										const bundleItems = items.filter(
											(item) => item.bundleName === bundle.name,
										)
										return (
											<BundleCard
												key={bundle.name}
												bundle={bundle}
												items={bundleItems}
												completedItems={completedItems}
											/>
										)
									})}
								</Masonry>
							</ResponsiveMasonry>
						</div>
						<hr /> {/* Divider between room groups */}
					</div>
				))}
			</div>
		</>
	)
}
