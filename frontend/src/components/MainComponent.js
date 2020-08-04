import React, { useContext, useEffect } from 'react';
import TableComponent from './TableComponent';
import AddModal from './AddModal';
import HeaderComponent from './HeaderComponent';
import { userContext } from '../context/userContext';
import { baseUrl } from '../shared/baseUrl';

const Main = () => {
	const { users, getUsers, addUser, deleteUser } = useContext(userContext);

	useEffect(() => {
		getUsers();
	}, [])

	return(
		<div className="container">
			<div className>
				<HeaderComponent />
			</div>
			
			<div className="col-12 mt-2">
				<AddModal addUser={addUser}/>
			</div>
			
			<div className="col-12 mt-2">
				<TableComponent 
					users={users}
					deleteUser = {deleteUser}
				/>
			</div>
		</div>
	)
}
export default Main;	