import React, { Component } from 'react';
import './SearchScreen.css';
import Card from '../../Card/Card';

class Screen extends Component {
    state = {
        joke: 'waiting for a new joke',
        selectedOption: '',
        categories:'', 
        input: '',
        showFavourite: false
    }

    getResult = async (value) => {
        let response = {}
        // if (this.state.selectedOption === 'random') {
        //     response = await chucknorrisapi.get(`/${this.state.selectedOption}`)
        // }
        // if (this.state.selectedOption === 'categories') {
        //     response = await chucknorrisapi.get(`/${this.state.selectedOption}/${this.state.categories}`)
        // }
        // if (this.state.selectedOption === 'search') {
        //     response = await chucknorrisapi.get(`/${this.state.selectedOption}/${this.state.input}`)
        // }
        console.log('Response', response)
        this.setState({
            input:''
        })
    }

    changeVisability = (event) => {
        let option = event.target.value
        console.log('Option :', option)
        if (option !== this.state.selectedOption) {
            this.setState({
                selectedOption: option
            })
        } 
    }

    changeCategory = (value) => {
        let categories = value
        console.log('Categories', categories)
    }

    inputChange = (event) => { 
        const input = event.target.value
        console.log(input)
        this.setState({
            input: input
        })
    }

    render() {
        const { data, changeFavourite} = this.props
        
        return (
            <div className = 'container-search'>
                <p className="msi">MSI 2020</p>
                <p className='hey'>Hey!</p>
                <p className='find'>Let`s try to find a joke for you</p>
                <div className='radio'>
                    <input 
                        type = 'radio' 
                        id = 'random' 
                        name ='trigger' 
                        value = 'random' 
                        checked = {this.state.selectedOption === 'random'}
                        onChange = {this.changeVisability}
                    />
                    <label htmlFor='random'>Random</label>
                </div>
                <div className='radio'>
                    <input
                        type = 'radio' 
                        id='categories' 
                        name='trigger'
                        value = 'categories'
                        checked = {this.state.selectedOption === 'categories'}
                        onChange = {this.changeVisability}/>
                    <label htmlFor='categories'>From categories</label>
                </div>
                <div className='btn-block' hidden = {this.state.selectedOption !== 'categories'}>
                    <button 
                        className = "button-trigger" 
                        onClick = {() => this.changeCategory('animal')}>
                            ANIMAL
                    </button>
                    <button 
                        className = "button-trigger"
                        onClick = {() =>this.changeCategory('career')}>
                            CAREER
                    </button>
                    <button 
                        className = "button-trigger"
                        onClick = {() => this.changeCategory('celebrity')}>
                            CELEBRITY
                    </button>
                    <button 
                        className = "button-trigger"
                        onClick = {() =>this.changeCategory('dev')}>
                            DEV
                    </button>
                </div>
                <div className ='radio'>
                    <input 
                        type = 'radio' 
                        id='search' 
                        name='trigger'
                        value ='search'
                        checked = {this.state.selectedOption === 'search'}
                        onChange = {this.changeVisability}
                        />
                    <label htmlFor='search'>Search</label>
                </div>
                <div className = 'input-block' hidden = {this.state.selectedOption !== 'search'}>
                    <input 
                        className = 'search-input' 
                        placeholder='Free text search'
                        value={this.state.input}
                        onChange = {this.inputChange}
                    />
                </div>
                <button className ="button-get-joke" onClick={this.getResult}>Get a joke</button>
                <Card 
                    jokeText={this.state.jokeText}
                    data = {data}
                    changeFavourite = {changeFavourite}
                />
            </div>
        )
    }
};

export default Screen;