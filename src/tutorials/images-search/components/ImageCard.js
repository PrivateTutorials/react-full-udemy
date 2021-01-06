import React from 'react';

export class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}; // image requires 0 space at beginning, before it's loaded from url

        this.imageRef = React.createRef(); // will contain data about <img> node after it renders
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans); // setSpans() has to be arrow f(). Otherwise - we need to bind it
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10); // 10 - height of css grid row
        this.setState({spans})
    }

    render() {
        const {alt_description, urls} = this.props.image;

        return (
            // will emit 'load' event when image from "src" attr will be downloaded from url to browser node
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}
                     alt={alt_description}
                     src={urls.regular}
                />
            </div>
        )
    }
}
