import React from 'react';
import './FavouriteScreen.css';
import Joke from '../../Joke/Joke';
import store from 'store'

 const FavouriteScreen = ({isShowFavouriteScreen, data, changeFavourite}) => {
    
    const datas = store.get('data')
    const jokes = datas ? datas.data.map((joke) => {
            return <li key={joke.id}>
                <Joke 
                    id={joke.id} 
                    value={joke.value} 
                    update = {joke.updated_at}
                    favourite = {joke.favourite}
                    changeFavourite = { () => changeFavourite(joke.id)} 
                />
            </li>
        }) : 
            data.map((joke) => {
                return <li key={joke.id}>
                    <Joke 
                        id={joke.id} 
                        value={joke.value} 
                        update = {joke.updated_at}
                        favourite = {joke.favourite}
                        changeFavourite = { () => changeFavourite(joke.id) } 
                    />
                </li>
            })

    return (
        <div>
            {
               isShowFavouriteScreen ?  
                    <div className='container-favourite'>
                        <span className='favourite-header'>Favourite</span>
                        <ul className='joke-list'>
                            {jokes}
                        </ul> 
                    </div> 
                : 
                null
            }
        </div>
    )
}

export default FavouriteScreen;