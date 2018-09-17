import React, {Component} from 'react';
import classes from './MainView.css';
import left from '../../assets/img/Left.jpeg';
import back from '../../assets/icons/Left.svg'
 
class MainView extends Component {
    render() {
        let image = (        
            <div className={classes.Main}>
                <div className={classes.ImgList}>
                    {left}
                </div>
            </div>
        );

        const testImgArray = this.props.allImages.length;
        console.log(testImgArray);

        const josefin = Math.floor(testImgArray/4);
        console.log(josefin);

        // const firstImgArray = this.props.allImages;
        // firstImgArray.splice(0, 3*josefin);
        // console.log(firstImgArray);
        // const secondImgArray = this.props.allImages;
        // secondImgArray.splice(josefin, 3*josefin);
        // console.log(secondImgArray);
        const victor = this.props.allImages;

        const firstImgArray = victor.slice(0, josefin);
        console.log(firstImgArray);

        const secondImgArray = victor.slice(josefin, 2*josefin);
        console.log(secondImgArray);

        const thirdImgArray = victor.slice(2*josefin, 3*josefin);
        console.log(thirdImgArray);

        const fourthImgArray = victor.slice(3*josefin, 4*josefin);
        console.log(fourthImgArray);

        if (this.props.fullView) {
            return(
                <div className={classes.Main}>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            {firstImgArray}
                        </div>
                        <div className={classes.column}>
                            {secondImgArray}
                        </div>
                        <div className={classes.column}>
                            {thirdImgArray}
                        </div>
                        <div className={classes.column}>
                            {fourthImgArray}
                        </div>
                    </div>
                </div>
            )
        }

        // if (this.props.fullView) {
        //     return(
        //         <div className={classes.Main}>
        //             <div className={classes.ImgList}>
        //                 {firstImgArray}
        //                 {secondImgArray}
        //                 {thirdImgArray}
        //                 {fourthImgArray}
        //             </div>
        //         </div>
        //     )
        // }

        let imgSource = `https://source.unsplash.com/${this.props.imageId}`;

        if (this.props.imageId) {
            image= (
                <div className={classes.Main}>
                    <img 
                        src= {imgSource}
                        className={classes.Img} 
                        onClick={this.props.back}
                        alt='' />
                    <img 
                        src= {back}
                        className={classes.Back} 
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







