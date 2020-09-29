import React, { Component } from 'react';
import User from './components/User'
import './App.css';
import Loading from './components/Loading'
import Header from './components/Header'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      loading: false
    }
  }
  getUser = () => {
    this.setState({
      loading: true
    })
    const name = this.refs.name.value;

    setTimeout( () => {
      fetch(`https://api.github.com/users/${name}`)
      // 63aeb452ec91852d62ed:80a6564c1786dec7ffeb0676c115b599b2fc8b08
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
          loading: false
        });
      })
    },1000)
  }
  render() {   
    const name = this.state.user.name 
    let userProfile;
    if( this.state.loading === true)  {
       userProfile = <div className='loading-user-card'><Loading /></div>
    }else if (name ) {
      userProfile = <User user={this.state.user} />
    }
    return (
      <div className="App gradient-background">
        <Header />
        <div className="wrapper">
          <div id='search-bar'>
            <input type="text" placeholder='Enter UserName' ref="name" />
            <button className='searchButton' onClick={this.getUser}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {userProfile}
      </div>
    );
  }
}

export default App;
