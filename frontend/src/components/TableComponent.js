import { Loading } from './LoadingComponent';
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import EditdetailsModal from './EditdetailsModal';

class TableComponent extends Component {
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	handleDelete(id){
		let confirmDelete = window.confirm('Delete item forever?')
		if(confirmDelete){
			this.props.deleteUser(id); 
		}else{alert("Aborted!")}
    }
	
	
	render(){
		const user = this.props.users.map((user) => {		
            return (
				<>
					<tr>
					  <td>{user.id}</td>
					  <td>{user.username}</td>
					  <td>{user.password}</td>
					  <td>{user.address}</td>
					  <td>{user.email}</td>
					  <td>{user.telnum}</td>
					  <td>
						<div style={{width:"110px"}}>
						  <EditdetailsModal userdata={user}/>
						  {' '}
						  <Button color="danger" onClick={() => this.handleDelete(user.id)} >Del</Button>
						</div>
					  </td>
					</tr>
				</>
            );			 
						
        });
		
		
		if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />				
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row"> 		
                        <div className="col-12">
                            <h4>{this.props.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
		else
			return(
					<Table dark responsive hover>
						<thead>
							<tr>
							  <th>ID</th>
							  <th>Username</th>
							  <th>Password</th>
							  <th>Address</th>
							  <th>Email</th>
							  <th>Telnum</th>
							</tr>
						</thead>
						<tbody>
							{user}
						</tbody>
					</Table>
		  )
	}
	
}

export default TableComponent;   
  