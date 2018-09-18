import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import FilterBar from '../components/FilterBar/FilterBar';
import InfoBar from '../components/InfoBar/InfoBar';
import NavBar from '../components/NavBar/NavBar';
import MainView from '../components/MainView/MainView';
import SearchDiv from '../components/SearchDiv/SearchDiv';
import Image from '../components/Image/Image';
import Query from '../components/Query/Query';
import cred from '../utils/cred';
import classes from '../components/SearchDiv/SearchDiv.css';
import back from '../assets/icons/Cross.svg';

class App extends Component {
  state = {
    images: [],
    queryList: [
      {
        query: 'FLOWERS',
        id: 1
      },
      {
        query: 'BEACH',
        id: 2
      },
      {
        query: 'ARCHITECTURE',
        id: 3
      },
      {
        query: 'PARIS',
        id: 4
      },
      {
        query: 'CINQUE TERRE',
        id: 5
      },
      {
        query: 'NULL',
        id: 6
      }
     ],
    query: null,
    loadedQuery: 'LOOK LEFT',
    fullView: true,
    searchView: false,
    selectedImage: null,
    photographer: null,
    location: null,
    likes: null,
    description: null,
    userUrl: null,
  }

  componentDidUpdate() {
      if (this.state.query) {
        axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${this.state.query}&client_id=${cred.appId}`)
        .then(response => {
          this.setState({
              images: response.data.results,
              query: this.state.queryList.query,
              loadedQuery: this.state.query
            })
          console.log(response.data.results, this.state.queryList, this.state.query);
        });
    }
  }

  imageSelectedHandler = (index) => {
    let newView = this.state.fullView;
    let id = this.state.images[index].id;
    let user = this.state.images[index].user.name;
    let location = this.state.images[index].user.location;
    let likes = this.state.images[index].likes;
    let description = this.state.images[index].description;
    let userUrl = this.state.images[index].user.links.self;
    this.setState( () => {
      return {
        fullView: !newView,
        selectedImage: id,
        photographer: user,
        location: location,
        likes: likes,
        description: description,
        userUrl: userUrl
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
    this.setState({
      query: newQueryUpper,
      fullView: true
    });
    console.log(this.state.query);
  }

  removeQueryHandler = (index) => {
    let newList = [...this.state.queryList];
    newList.splice(index, 1);
    let nextQuery = '';

    if (newList.length === 0) {
      nextQuery = 'LOOK LEFT';
    };
    if (newList.length > 1 && index !==0) {
      nextQuery = newList[index-1].query;
    };
    if (newList.length !==0 && index === 0) {
      nextQuery = newList[0].query;
    }

    this.setState({
      queryList: newList,
      query: nextQuery
    });
    console.log(newList.length)
  }

  toggleSearch = () => {
    let getSearchView = this.state.searchView;
    this.setState({searchView: !getSearchView});
    console.log(this.state.searchView);
  }

  addQueryHandler = (event) => {
    let newId = this.state.queryList.length+1;
    if (this.inputElement.value !== '') {
      let newQuery = {
        query: this.inputElement.value.toUpperCase(),
        id: newId
      };

      this.setState((prevState) => {
        return {
          queryList: prevState.queryList.concat(newQuery),
          query: newQuery.query
        };
      })
      this.inputElement.value='';
    }
    console.log(this.state.queryList);

    event.preventDefault();
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

    let queryListLength = this.state.queryList.length + 1;
    let search = (
      <form className={classes.SearchDiv} onSubmit={this.addQueryHandler}>
          <input 
              className={classes.Input} 
              type='text'
              placeholder= 'SEARCH'
              id={queryListLength}
              ref={(a) => this.inputElement=a} />
          <button type='submit' className={classes.Button}>ADD</button>
          <img className={classes.Cross} 
              src={back} 
              alt='' 
              placeholder="type"
              onClick={this.toggleSearch}/> 
      </form>
  )                

    if (!this.state.searchView) {
      search = null;
    }

      return (
        <div>
          <Header />
          <FilterBar  
            allQueries={queries} 
            searchClick={() => this.toggleSearch()}/>
          {search}
          <MainView   
            allImages={images} 
            imageId={this.state.selectedImage} 
            fullView={this.state.fullView}
            back={() => this.getBackHandler()}
            searchView={this.state.searchView}
            welcomeTest={this.state.loadedQuery}/>
          <InfoBar  
            fullView={this.state.fullView} 
            photographer={this.state.photographer}
            location={this.state.location}
            likes={this.state.likes}
            description={this.state.description}
            userUrl={this.state.userUrl}
            allImages={images}/>
          <NavBar query={this.state.loadedQuery}/>
          <Footer />
        </div>
    )
  }
}

export default App;

