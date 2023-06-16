import useSelector from 'react-redux';

const Users = () => {
	const { users, isLoading, error } = useSelector((state) => state.users);
	return (
		<div>
			<h1>Users</h1>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};
export default Users;
