import React, {Component} from 'react';
import classes from './ImageView.css';
import axios from 'axios';
import img from '../../assets/img/5.png';
import cred from '../../utils/cred'

class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedImage: null
        }
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedImage || (this.state.loadedImage && this.state.loadedImage.id !== this.props.id)) {
                axios.get(`https://api.unsplash.com/photos/${this.state.loadedImage}&client_id=${cred.appId}`)
                // axios.get(`https://api.unsplash.com/photos/${this.props.id}`)
                    .then(response => {
                        console.log(response);
                        this.setState({loadedImage: response})
                    });
            }
        }
    }

    render() {
        let image = null
    
        if (this.props.id) {
            image= (
                <div className={classes.Main}>
                    <button onClick={this.props.back}>loading</button>
                    <img src={this.state.loadedImage} alt=''/>
                </div>
            );
            console.log(this.state.loadedImage, this.props.id);
        };

        if (this.state.loadedImage) {
            image = (
                <div className={classes.Main}>
                    <p>{this.state.loadedImage}</p>
                    <img 
                        src={img} 
                        alt='' 
                        className={classes.Img}/>
                </div>
            );
            console.log(this.state.loadedImage);
        };
        return image;
    }
}


export default ImageView;

///static/media/1.53d4252e.png