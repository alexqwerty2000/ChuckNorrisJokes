import React, {Component} from 'react';
import Icons from '../Icons/Icons'
import './Joke.css';

export default class Joke extends Component {
    
    render(){
        const {id, value, update, favourite, changeFavourite} = this.props
        const updateDate = new Date(update).toUTCString().replace('GMT','')
        return(
            <div className='joke-card'>
                <div className='joke-card-view'>
                    <div>
                        <Icons/>
                    </div>
                    {favourite ? 
                        (<span className='card-heart-regular' onClick = {() => changeFavourite(id)}></span>)
                         :
                        (<span className='card-heart-solid' onClick = {() => changeFavourite()}></span>)
                    }
                    <div className='joke-text-block'>
                        <p className='joke-card-info'>ID: <span className='joke-card-id'>{id? id : null}</span></p>
                        <p className='joke-card-text'>{value}</p>
                        <div className='row'>
                            <p className='joke-card-update'>Last update: {updateDate ? updateDate : null } </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

