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
	//userID: string | undefined | null
	completedItems: number[]
}

export default function BundleCard({
	bundle,
	items,
	//userID,
	completedItems,
}: BundleCardProps) {
	const { userID } = useUserIDStore()
	const { refetchCompletedItems, setRefetchCompletedItems } =
		useCompletedItemsStore()

	if (!bundle) {
		return <p>Loading...</p>
	}

	function handleClick(itemID: number) {
		console.log(itemID)
		try {
			fetch(`/api/save/item`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userID, itemID }),
			})
			setRefetchCompletedItems(true)
		} catch (error) {
			console.error(error)
		}
		console.log(completedItems)
	}

	// useEffect(() => {
	// 	fetchCompletedItems()
	// }, [])

	return (
		<div className='bundle-card'>
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
