import React, { Component } from 'react';
import TableComponent from './TableComponent';
import AddModal from './AddModal';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchUsers, postUser, deleteUser, editUser } from '../redux/ActionCreators'; 
import { Container, Row, Col, Table } from 'reactstrap'



const mapStateToProps = state => {			//access the state
  return {
	users: state.users,			//state.users will be stored in users
  }
}

const mapDispatchToProps = dispatch => ({			//recieves dispatch as a parameter
	  fetchUsers: () => { dispatch(fetchUsers())},		//fetchUsers is the key which dispatches thefetch users action creator
	  postUser: (username, password, address, email, telnum, type) => dispatch(postUser(username, password, address, email, telnum, type)),
	  deleteUser: (id) => {dispatch (deleteUser(id))},
	  editUser: (id, username, password, address, email, telnum, type) => dispatch(editUser(id, username, password, address, email, telnum, type))
  });


	class Main extends Component {

	  constructor(props) {		
		super(props);
	}
	  
	  componentDidMount(){	
		  this.props.fetchUsers();
	  }
	  
	 componentDidUpdate(){

	 }
	 
	render(){
		return(
			<div className="container">
				<div className="row m-10">
					<TableComponent 
						users={this.props.users.users}
						isLoading={this.props.users.isLoading}
						errMess={this.props.users.errMess}
						deleteUser = {this.props.deleteUser}
						editUser = {this.props.editUser}
					/>
				</div>
				<div className="row m-10">
					<AddModal postUser={this.props.postUser}/>
				</div>
			</div>
	  )
		
	}
	  
	}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));	