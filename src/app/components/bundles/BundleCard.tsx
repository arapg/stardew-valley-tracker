import '../../styling/index.css'
import { Bundle, Item } from '../../Bundles'

interface BundleCardProps {
	bundle: Bundle | null
	items: Item[] | []
}

export default function BundleCard({ bundle, items }: BundleCardProps) {
	if (!bundle) {
		return <p>Loading...</p>
	}

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
					<div className='item-card' key={item.id}>
						<div>
							<img src={item.url} alt={`Item icon for ${item.name}.`} />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
