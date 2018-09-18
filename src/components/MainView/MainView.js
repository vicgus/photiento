import React, {Component} from 'react';
import classes from './MainView.css';
import left from '../../assets/img/Left.jpeg';
 
class MainView extends Component {
    render() {
        let image = (        
            <div className={classes.Main}>
                <div className={classes.ImgList}>
                    {left}
                </div>
            </div>
        );

        const columnLength = Math.floor(this.props.allImages.length/4) + 1;

        const allImages = this.props.allImages;

        const firstImgColumn = allImages.slice(0, columnLength);

        const secondImgColumn = allImages.slice(columnLength, 2*columnLength);

        const thirdImgColumn = allImages.slice(2*columnLength, 3*columnLength);

        const fourthImgColumn = allImages.slice(3*columnLength, 4*columnLength);

        if (this.props.fullView) {
            return(
                <div className={classes.Main}>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            {firstImgColumn}
                        </div>
                        <div className={classes.column}>
                            {secondImgColumn}
                        </div>
                        <div className={classes.column}>
                            {thirdImgColumn}
                        </div>
                        <div className={classes.column}>
                            {fourthImgColumn}
                        </div>
                    </div>
                </div>
            )
        }

        let imgSource = `https://source.unsplash.com/${this.props.imageId}`;

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







