export default function LogoutButton() {
	return (
		<div className='logout-container'>
			<a href='/api/auth/logout'>
				<button className='logout'>Log Out</button>
			</a>
		</div>
	)
}
