import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'No Srubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'Aqua Song', duration: '2:25'}
    ];
}

const selectedSongReducer = (currentlySelectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return currentlySelectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
