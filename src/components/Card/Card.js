import React, { Component } from 'react';
import Icons from '../Icons/Icons'
import './Card.css';

export default class Card extends Component{

    render() {
        const {data, changeFavourite} = this.props
        return(
            <div className='card'>
                <div className='card-view'>
                    <div>
                        <Icons/>
                    </div>
                    {data.favourite ? 
                        (<span className='heart-regular' onClick = {changeFavourite}></span>)
                         :
                        (<span className='heart-solid' onClick = {changeFavourite}></span>)
                    }
                    <div className='text-block'>
                        <p className='joke-info'>ID: <span className='joke-id'>{data.id}</span></p>
                        <p className='card-text'>{data.value}</p>
                        <div className='row'>
                            <p className='joke-update'>Last update:{data.created_at.slice('.',19)} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
