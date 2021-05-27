import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Product.css';
import Carousel from 'react-material-ui-carousel';
// import productData from './data/productData';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import data from "./data/RecommendedProductsData.json"


const styles = theme => ({

    recheader: {
        position: "relative",
        top:"0.5rem",
        left: "1rem",
        textAlign: "center",
        font: "normal normal bold 1rem / 1.3rem Segoe UI",
        color:"#20DCEB",
    }
});

class LeftNavButton extends React.Component {
    render() {
        return <IconButton
            style={{ position: "absolute", left: "2.5rem", top: "20%" }}
            {...this.props}>
            <NavigateBeforeIcon style={{ color:"#8DA2C1" }}/>
        </IconButton>
    }
}

class RightNavButton extends React.Component {
    render() {
        return <IconButton
            style={{ position: "absolute", right: "0.8rem", top: "20%" }}
            {...this.props}>
            <NavigateNextIcon style={{ color: "#20DCEB" }}/>
        </IconButton>
    }
}

const recproductsData = data.recommendedproductsData

class RecommendedProduct extends React.Component {
    
    render() {
        const { classes } = this.props;
        return (
            <div style={{
                position: "relative",
                backgroundImage: "linear-gradient(to right,rgba(42,48,57,1), rgba(32,220,235,1), rgba(42,48,57,0))",
                
                
            }}>
            <div style={{
                position: "relative", width:"100%",
                backgroundColor: "#1A1C1F", 
            }}>
                <p className={classes.recheader}>Best Deals</p>
                <Carousel
                    arrows={true}
                    showSides={true}
                    sidesOpacity={.0}
                    sideSize={.2}
                    slidesToScroll={1}
                    slidesToShow={4}
                    prevArrow={<LeftNavButton />}
                    nextArrow={<RightNavButton />}
                    autoPlay
                >
                {recproductsData.map((product) => (
                    <Card className="card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height='auto'
                                image={product.img}
                                title="Contemplative Reptile"
                            />
                            <CardContent className="cardContent">
                                <p className="header">
                                    {product.title}
                                </p>
                                <p className="description">
                                    {product.description}
                                </p>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions> */}
                        <div className="midSection">
                            <ul>
                                {product.attributes.map((attr) => (
                                    <li className="attributes">
                                        {attr}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <p className="price">{product.price}</p>
                                <p className="priceDesc">{product.priceDesc}</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", float: "left", position:"relative", top:"-1rem"}}>
                            <ThumbUpIcon fontSize='small' style={{ color: "#20DCEB", marginLeft: "1rem" }} />
                            <p className="likes">{product.likes}</p>
                        </div>
                        <button className={product.action === 'Modify' ? 'modifyButton' : 'addButton'}>{product.action}</button>
                        {/* </CardActions> */}
                    </Card>
                ))}
                </Carousel>
                </div>
            </div>
        );
    }
}


RecommendedProduct.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RecommendedProduct);
