'use client'

import '../app/styling/index.css'
import BundleCard from '../app/components/BundleCard'
import { useEffect, useState } from 'react'
import useCompletedItemsStore from '../app/states/completedItems'
import useUserIDStore from '../app/states/userID'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export interface Room {
	name: string
	reward: string
}

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
	const [rooms, setRooms] = useState<Room[]>([])
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

	async function fetchRooms() {
		try {
			const response = await fetch('/api/rooms', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			setRooms(data)
		} catch (error) {
			console.log(error)
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
		fetchRooms()
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
			<h1>Bundles</h1>
			<div>
				{Object.keys(bundlesByRoom).map((roomName) => (
					<div className='room-wrapper' key={roomName}>
						<div className='room-info'>
							<h2>{roomName}</h2>
							<p>
								<strong>Reward: </strong>
								{rooms.find((room) => room.name === roomName)?.reward}
							</p>
						</div>

						<div className='bundle-wrapper'>
							<ResponsiveMasonry
								columnsCountBreakPoints={{ 350: 1, 1340: 2, 1920: 3 }}
							>
								<Masonry>
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
					</div>
				))}
			</div>
		</>
	)
}
