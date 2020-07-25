import React, { Component } from 'react';
import TableComponent from './TableComponent';
import AddModal from './AddModal';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchUsers, postUser } from '../redux/ActionCreators'; 
import { Container, Row, Col, Table } from 'reactstrap'



const mapStateToProps = state => {	
  return {
	users: state.users,
  }
}

const mapDispatchToProps = dispatch => ({
	  fetchUsers: () => { dispatch(fetchUsers())},
	  postUser: (username, password, address, email, telnum, type) => dispatch(postUser(username, password, address, email, telnum, type))

  });


	class Main extends Component {

	  constructor(props) {		
		super(props);
	}
	  
	  componentDidMount(){	
		  this.props.fetchUsers();
	  }
	  
	
	render(){
		return(
			<div className="container">
				<div className="row m-10">
					<TableComponent 
						users={this.props.users.users}
						isLoading={this.props.users.isLoading}
						errMess={this.props.users.errMess}
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