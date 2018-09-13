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
        query: 'NATURE',
        id: 1
      },
      {
        query: 'ART',
        id: 2
      },
      {
        query: 'ARCHITECTURE',
        id: 3
      },
      {
        query: 'SPORTS',
        id: 4
      },
      {
        query: 'GERMANY',
        id: 5
      },
     ],
    query: 'NATURE',
    fullView: true,
    selectedImage: null,
    photographer: null,
    location: null,
    likes: null,
    description: null
  }

  //Check this. Infinite loop!
  componentDidUpdate() {
        if (this.state.query) {
        axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${this.state.query}&client_id=${cred.appId}`)
        .then(response => {
          this.setState({
              images: response.data.results,
              query: this.state.queryList.query
            })
          console.log(response.data.results, this.state.queryList, this.state.query);
        });
    }
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
    let newQueryUpper = newQuery.toUpperCase();
    this.setState({query: newQueryUpper})
    console.log(this.state.query);
  }

  removeQueryHandler = (index) => {
    let newList = [...this.state.queryList];
    newList.splice(index, 1);
    let nextQuery = newList[index-1];
    this.setState({
      queryList: newList,
      // query: nextQuery
    })
    console.log(nextQuery);
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
                clickSelect={() => this.querySelectorHandler(index)}
                clickRemove={() => this.removeQueryHandler(index)}/>
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

