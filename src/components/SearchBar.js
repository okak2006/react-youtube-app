import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }

    onFormSubmit = (e) => {
        e.preventDefault();
        //callback method passed from parent to access state term in this component
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e=>this.setState({term:e.target.value})}    
                        />
                    </div>
                </form>
            </div>
        )
    }
}
