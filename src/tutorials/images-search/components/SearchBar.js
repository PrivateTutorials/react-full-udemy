import React from 'react';

export class SearchBar extends React.Component {

    state = {
        term: '' // Default value
    };

    onInputChange(event) {
        const value = event.target.value;
    }

    // you need either to bind the call of the f()
    // OR
    // to wrap calling f() in arrow f() and to invoke it
    // <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
    // OR
    // to use the arrow f() here:
    // onFormSubmit = (event) => { ... }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        // we don't use "()" in this.onInputChange because it will call f() when component is rendered
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="field">
                        <label>Image Search</label>
                        {/*UNCONTROLLED ELEMENT - the value of element is only in HTML, but not in react js file*/}
                        {/*<input type="text" onChange={(event) => console.log(event.target.value)}/>*/}
                        {/*The same as below*/}
                        {/*<input type="text" onChange={this.onInputChange}/>*/}
                        {/*If you want to trigger this.setState inside separate onInputChange() f() -> .bind(this)*/}
                        {/*CONTROLLED ELEMENT - we store info inside js component, but not in HTML element*/}
                        <input type="text" value={this.state.term}
                               onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}
