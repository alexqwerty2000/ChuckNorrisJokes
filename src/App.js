import React, { Component } from 'react';
import './App.css';
import SearchScreen from './components/Screen/SeachScreen/SearchScreen';
import FavouriteScreen from './components/Screen/FavouriteScreen/FavouriteScreen';
import store from 'store';

export default class App extends Component {

  state = {
    isShowFavouriteScreen : true,
    data : [
      {
        created_at: "2020-01-05 13:42:28.420821",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "mT3oyXi4TVaK999uk2FMUg",
        updated_at: "2020-01-05 13:42:28.420821",
        url: "https://api.chucknorris.io/jokes/mT3oyXi4TVaK999uk2FMUg",
        value: "Chuck Norris once paddled the shit out of Ronald McDonald with his own shoes. He later commented 'Anyone who wears stupid big red shoes like that is a fucking clown'.",
        favourite: false
      },
      {
        created_at: "2020-01-05 13:42:22.980058",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "N9U8GuXKRxisj3dh2btisw",
        updated_at: "2020-01-05 13:42:22.980058",
        url: "https://api.chucknorris.io/jokes/N9U8GuXKRxisj3dh2btisw",
        value: "It isn't what Chuck Norris would do for a Klondike bar, but more so, what a Klondike bar would do for Chuck Norris",
        favourite: false
      },
      {
        created_at: "2020-01-05 13:42:20.568859",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "3ICuZP-UTlCvJuu4OKHzZg",
        updated_at: "2020-01-05 13:42:20.568859",
        url: "https://api.chucknorris.io/jokes/3ICuZP-UTlCvJuu4OKHzZg",
        value: "Some tough guys show off by squeezing orange juice out of an orange. Chuck Norris squeezes whole oranges out of orange juice.",
        favourite: false
      }
    ]
  }

  componentDidMount(){
    const jokes = store.get('data')
    if (jokes) {
      this.setState({
        data: jokes.data
      })
    }
  }

  changeFavourite = (id) => {
    const datas = this.state.data.map(data => {
      return (data.id === id ) ? {...data, favourite:!data.favourite }: {...data}})
    this.setState({
        data: datas
    })
    store.remove('data')
    store.set('data', {data: datas})
  } 

  toggleShowFavourite = (e) => { 
    e.preventDefault();
    this.setState({
      isShowFavouriteScreen: !this.state.isShowFavouriteScreen
    })
  }

  render() {
    const { isShowFavouriteScreen, data} = this.state
    return (
      <div className='App'>
        <SearchScreen 
          className='search-screen'
          data = {  data[0] }
          changeFavourite = {() => this.changeFavourite(data[0].id) }
        />
        <div className ='button-container'>
          <div className = 'show-button' onClick = {this.toggleShowFavourite}>
              {isShowFavouriteScreen ? 
                <span className='show-button_active show-button'></span> 
                : 
                <span className='show-button'></span>
              }
          </div>
        </div>
        <FavouriteScreen 
          className='favourite-screen' 
          changeFavourite = {this.changeFavourite}
          data = {data}
          isShowFavouriteScreen={this.state.isShowFavouriteScreen} 
        />
        {
          isShowFavouriteScreen ? <div className='container-overlay'></div> : null
        }
      </div>
    );
  }
}
