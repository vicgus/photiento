import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import FilterBar from '../components/FilterBar/FilterBar';
import InfoBar from '../components/InfoBar/InfoBar';
import NavBar from '../components/NavBar/NavBar';
import MainView from '../components/MainView/MainView';
import Image from '../components/Image/Image';
import Query from '../components/Query/Query';
import cred from '../utils/cred';

class App extends Component {
  state = {
    images: [],
    queryList: [
      {
        query: 'Nature',
        id: 1
      },
      {
        query: 'Art',
        id: 2
      },
      {
        query: 'Architecture',
        id: 3
      },
     ],
    query: 'art',
    fullView: true,
    selectedImage: null,
    photographer: null,
    location: null,
    likes: null,
    description: null
  }

  componentDidUpdate() {
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${this.state.query}&client_id=${cred.appId}`)
      .then(response => {
        this.setState({images: response.data.results})
        console.log(response.data.results, this.state.queryList);
      });
  }

  imageSelectedHandler = (index) => {
    let newView = this.state.fullView;
    let id = this.state.images[index].id;
    let user = this.state.images[index].user.name;
    let location = this.state.images[index].location;
    let likes = this.state.images[index].likes;
    let description = this.state.images[index].description;
    this.setState( () => {
      return {
        fullView: !newView,
        selectedImage: id,
        photographer: user,
        location: location,
        likes: likes,
        description: description
      }
    });
    console.log(index, this.state.selectedImage, this.state.fullView, this.state.photographer);
  }

  getBackHandler = () => {
    let getFullView = this.state.fullView;
    this.setState({fullView: !getFullView})
  }

  querySelectorHandler = (index) => {
    let newQuery = this.state.queryList[index].query;
    this.setState({query: newQuery})
    console.log(this.state.query);
  }

  render() {
    const images = this.state.images.map((img, index) => {
      return <Image smallUrl= {img.urls.small} 
                    key={img.id} 
                    clicked = {() => this.imageSelectedHandler(index)}/>
    });

    const queries = this.state.queryList.map((qr, index) => {
      return <Query 
                query={qr.query}
                key={qr.id}
                clicked={() => this.querySelectorHandler(index)}/>
    });

      return (
        <div>
          <Header />
          <FilterBar  
            allQueries={queries} />
          <MainView   
            allImages={images} 
            imageId={this.state.selectedImage} 
            fullView={this.state.fullView} 
            back={() => this.getBackHandler()}/>
          <InfoBar  
            fullView={this.state.fullView} 
            photographer={this.state.photographer} 
            location={this.state.location}
            likes={this.state.likes}
            description={this.state.description}/>
          <NavBar query={this.state.query}/>
          <Footer />
        </div>
    )
  }
}

export default App;

