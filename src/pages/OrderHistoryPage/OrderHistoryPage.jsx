<<<<<<< HEAD

=======
>>>>>>> ba4b33282e5f5fdfabb8b59644a5c99bf28ed650
import * as usersService from '../../utilities/users-service';

function OrderHistoryPage() {
	async function handleCheckToken() {
		const expDate = await usersService.checkToken();
		console.log(expDate);
	}

	return (
		<>
			<h1>OrderHistoryPage</h1>
			<button onClick={handleCheckToken}>
				Check When My Login Expires
			</button>
		</>
	);
}
export default OrderHistoryPage;
