import './ImageList.css';
import React from 'react';
import {ImageCard} from './ImageCard'


export const ImageList = (props) => {
    const images = props.images.map(image => {
        // Or DESTRUCTION:
        // const images = props.images.map(({id, alt_description, urls}) => {

        //  Each child in a list should have a unique "key" prop.
        //  For root element. If we had a <div> wrapper, it would contain 'key' property
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div>
}
