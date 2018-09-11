import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import FilterBar from '../components/FilterBar/FilterBar';
import InfoBar from '../components/InfoBar/InfoBar';
import NavBar from '../components/NavBar/NavBar';
import MainView from '../components/MainView/MainView';
import cred from '../utils/cred';

const query = 'city';

class App extends Component {
  state = {
    filterList: [],
    selFilter: null,
    imgUrl: []
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.appId}`)
      .then(response => {
        this.setState({filterList: response.data.results})
        console.log(response.data.results);
      });
  }

  render() {
    return (
      <div>
        <Header />
        {/* <img src='https://images.unsplash.com/photo-1524450239752-ddd212cac0b4?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM1NzQxfQ&s=7dea91b90b41f1e45e0bf1e8da2dfcd9' alt=''/> */}
        <FilterBar />
        <MainView image={this.state.filterList}/>
        <InfoBar />
        <NavBar />
        <Footer />
      </div>
    )
  }
}

export default App;
