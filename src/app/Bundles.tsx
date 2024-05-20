'use client'

import Image from 'next/image'
import styles from './page.module.css'
import BundleCard from './components/bundles/BundleCard'
import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'

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
	}

	useEffect(() => {
		fetchBundles()
		fetchItems()
	}, [])

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
		<div>
			{Object.keys(bundlesByRoom).map((roomName) => (
				<div key={roomName}>
					<h2>{roomName}</h2>
					<div className='bundle-wrapper'>
						<Masonry
							breakpointCols={3}
							className='my-masonry-grid'
							columnClassName='my-masonry-grid_column'
						>
							{bundlesByRoom[roomName].map((bundle) => {
								const bundleItems = items.filter(
									(item) => item.bundleName === bundle.name,
								)
								return (
									<BundleCard
										key={bundle.name}
										bundle={bundle}
										items={bundleItems}
									/>
								)
							})}
						</Masonry>
					</div>
					<hr /> {/* Divider between room groups */}
				</div>
			))}
		</div>
		// <div>
		// 	{bundles.map((bundle) => {
		// 		const bundleItems = items.filter(
		// 			(item) => item.bundleName === bundle.name,
		// 		)
		// 		return (
		// 			<BundleCard key={bundle.name} bundle={bundle} items={bundleItems} />
		// 		)
		// 	})}
		// </div>
	)
}
