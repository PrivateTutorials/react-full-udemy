import React, {useState} from 'react';

export const SearchBar = ({onFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(searchTerm);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={searchTerm} type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}
