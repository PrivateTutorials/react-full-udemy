import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Search = () => {
    const [searchTerm, setTerm] = useState('programming');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [results, setResults] = useState([]);

    // useEffect - runs when the component is rendered:
    // - for the 1-st time
    // - for the 1-st time and whenever it re-renders
    // - for the 1-st time, whenever it re-renders and special data is changed
    // AND: async cb function is not allowed inside useEffect()
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (searchTerm) {
                setDebouncedSearchTerm(searchTerm);
            }
        }, 500);

        // the only possible return statement from useEffect - is cb f()
        // is called before next re-render of component
        return () => clearTimeout(timerId)
    }, [searchTerm]);


    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedSearchTerm
                }
            });

            setResults(data.query.search)
        };
        search();
    }, [debouncedSearchTerm]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={
                        `https://en.wikipedia.org?curid=${result.pageid}`
                    } className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/*will replace "<span>" text with innerHTML <span> tags*/}
                    {/*makes possible XSS attacks*/}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>

                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={searchTerm}
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
