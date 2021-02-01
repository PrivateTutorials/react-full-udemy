import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// mapStateToProps - name by convention
// mapStateToProps - reruns each time data in Redux Store is updated
// O from mapStateToProps() f() will be shown as 'props' inside SongList C
// e.g.: SongList C will have: 1) props.songs  2) props.selectSong (from connect f() below) 3) dispatch f()
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

// connect will be getting data from Provider component each time State changes
// also selectSong() f() will be passed to C as a prop
export default connect(mapStateToProps, {selectSong})(SongList);

/*
SYNTAX EXPLANATION - call of f() inside f():

function connectExample() {
    return function () {
        return 'Hi there'
    }
}

connectExample()();*/
