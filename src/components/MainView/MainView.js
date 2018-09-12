import React, {Component} from 'react';
import classes from './MainView.css';

class MainView extends Component {
    
    render() {
        let image = null
        let img = `https://source.unsplash.com/${this.props.imageId}`;
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
                        src= {img}
                        className={classes.Img} 
                        onClick={this.props.back}
                        alt=''/>
                </div>
            );
            console.log(this.props.imageUrl);
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