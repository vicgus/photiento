import React, {Component} from 'react';
import classes from './MainView.css';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.searchView
        }
    }

    render() {
        let image = null
        let imgSource = `https://source.unsplash.com/${this.props.imageId}`;

        if (this.props.fullView) {
            return(
                <div className={classes.Main}>
                    <div className={classes.ImgList}>
                        {this.props.allImages}
                    </div>
                </div>
            )
        }

        if (this.props.imageId) {
            image= (
                <div className={classes.Main}>
                    <img 
                        src= {imgSource}
                        className={classes.Img} 
                        onClick={this.props.back}
                        alt='' />
                </div>
            );
            console.log(this.props.imageUrl);
        };


    return image;
    };
}

export default MainView;







