import React from 'react';

export class SearchBar extends React.Component {
    state = {searchTerm: ''};

    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.searchTerm} type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}
