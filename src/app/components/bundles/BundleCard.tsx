'use client'

import '../../styling/index.css'
import { useEffect, useState } from 'react'
import useCompletedItemsStore from '../../states/completedItems'
import useUserIDStore from '../../states/userID'

interface Item {
	id: number
	name: string
	url: string
}

interface Bundle {
	name: string
	url: string
	slots: number
	reward: string
}

interface BundleCardProps {
	bundle: Bundle | null
	items: Item[]
	completedItems: number[]
}

export default function BundleCard({
	bundle,
	items,
	completedItems,
}: BundleCardProps) {
	const { userID } = useUserIDStore()
	const { refetchCompletedItems, setRefetchCompletedItems } =
		useCompletedItemsStore()

	if (!bundle) {
		return <p>Loading...</p>
	}

	function handleClick(itemID: number) {
		try {
			fetch(`/api/save/item`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userID, itemID }),
			}).then(() => {
				setRefetchCompletedItems(!refetchCompletedItems)
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='bundle-card completed'>
			<div className='bundle-info'>
				<img src={bundle.url} alt={`${bundle.name} Bundle icon.`} />
				<div className='bundle-title'>
					<h3>{bundle.name} Bundle</h3>
					<p>{bundle.slots} items remaining</p>
					<p>
						<span>Reward:</span> {bundle.reward}
					</p>
				</div>
			</div>

			<div className='item-container'>
				{items.map((item) => (
					<div
						className={`item-card ${
							completedItems.includes(item.id) ? 'completed' : ''
						}`}
						key={item.id}
						onClick={() => handleClick(item.id)}
					>
						<div>
							<img src={item.url} alt={item.name} />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
