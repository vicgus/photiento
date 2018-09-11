import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import FilterBar from '../components/FilterBar/FilterBar';
import InfoBar from '../components/InfoBar/InfoBar';
import NavBar from '../components/NavBar/NavBar';
import MainView from '../components/MainView/MainView';
import ImageView from '../components/ImageView/ImageView';
import Image from '../components/Image/Image'
import cred from '../utils/cred';

import rndmImg from '../assets/img/1.png'

const query = 'city';

class App extends Component {
  state = {
    images: [],
    selFilter: query,
    fullView: true,
    selectedImage: null
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.state.selFilter}&client_id=${cred.appId}`)
      .then(response => {
        this.setState({images: response.data.results})
        console.log(response.data.results);
      });
  }

  imageSelectedHandler = (id) => {
    let newView = this.state.fullView;

    this.setState( () => {
      return {
        fullView: !newView,
        selectedImage: id
      }
    });
    console.log(this.state.selectedImage, this.state.fullView);
  }

  getBackHandler = () => {
    let getFullView = this.state.fullView;
    this.setState({fullView: !getFullView})
  }

  render() {
    const images = this.state.images.map(img => {
      return <Image thumbUrl= {img.urls.thumb} 
                    fullUrl= {img.urls.full}
                    key={img.id} 
                    photographer={img.user.name}
                    location={img.location}
                    likes={img.likes} 
                    clicked = {() => this.imageSelectedHandler(img.id)}/>
    });


      return (
        <div>
          <Header />
          <FilterBar />
          {/* {view} */}
          <MainView allImages={images} 
                    imageId={this.state.selectedImage} 
                    fullView={this.state.fullView} 
                    back={() => this.getBackHandler()}/>
          <InfoBar />
          <NavBar />
          <Footer />
        </div>
    )
  }
}

export default App;




    // let view = null;

    // if (!this.state.fullView) {
    //   view = (
    //     <MainView allImages={images} />
    //   )
    // };

    // if (this.state.fullView) {
    //   view = (
    //     <ImageView 
    //             id={this.state.selectedImage} />
    //   )
    // }