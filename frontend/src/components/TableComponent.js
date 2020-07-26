import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

class TableComponent extends Component {
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	


	handleDelete(id){
        this.props.deleteUser(id); 
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
						  <Button color="yellow">Edit</Button>
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
					<Table dark>
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
  