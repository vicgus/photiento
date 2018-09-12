import React, {Component} from 'react';
import ImageView from '../ImageView/ImageView';
import classes from './MainView.css';
import axios from 'axios';
import img from '../../assets/img/5.png';
import cred from '../../utils/cred'

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedImage: null
        }
    }

    // componentDidUpdate() {
    //     if (!this.state.loadedImage || (this.state.loadedImage && this.state.loadedImage.id !== this.props.id)) {
    //         // axios.get(`https://api.unsplash.com/photos/${this.props.imageId}&client_id=${cred.appId}`)
    //         axios.get(`https://source.unsplash.com/${this.props.imageId}`)
    //                     .then(response => {
    //                         this.setState({loadedImage: response});
    //                         console.log(response);
    //                     });
    //                 }    
    // }

    render() {
        let image = null
        
        if (this.props.fullView) {
            return(
                <div className={classes.Main}>
                        {this.props.allImages}
                </div>
            )
        }
        if (this.props.imageId) {
            image= (
                <div className={classes.Main}>
                    <button onClick={this.props.back}>back</button>
                    <img src={this.props.imageId} alt=''/>
                </div>
            );
            console.log(this.state.loadedImage, this.props.imageId);
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
    };
}

export default MainView;

// const mainView = (props) => {
//     console.log(props.allImages);
//     if (props.fullView) {
//         return(
//             <div className={classes.Main}>
//                     {props.allImages}
//             </div>
//         )
//     }

//     if (!props.fullView) {
//         console.log(props.imageId);
//         return <ImageView   id={props.imageId} 
//                             back={props.back}/>
        
//     }

// }

// export default mainView;


//note to self: 
// gör om denna till imageview/fullview och skippa imageview.js