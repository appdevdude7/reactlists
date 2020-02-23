import React from 'react';
import './App.css';
import Header from './components/Header'
import Persons from './components/Persons';

class App extends React.Component{
  
  state = {
    isLoading : true,
    users : [],
    error : null
  }

  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( data => 
        this.setState({
          users: data,
          isLoading: false
        })
        )
        .catch(error => this.setState({error, isLoading: false}));
  }

  componentDidMount(){
    this.fetchUsers();
  }

  render(){

    const { isLoading, error, users } = this.state;
    console.log(users);
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {error? <p> {error.message} </p> : null }
        {!isLoading ? (
          users.map(user => {
            const { username, name, email } = user;
            <Persons />
          })
        )}
        <Persons />
      </div>
    );
  }
}

export default App;
