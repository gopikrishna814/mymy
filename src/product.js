import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './Product.css';
 import productData from './data/productData';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsData: productData
        }
        
    }

    

    render() {
        console.log("hello"+this.props.searchProduct);
        return (
            <div className="allsolutionsclass">
                <p className="allsolutionheader"> </p>
                <GridList cellHeight={'auto'} spacing={4} className='gridList' cols={3}>
                    
                
                {this.state.productsData.map((product) => (
                   <GridListTile key={product.title} cols={1}>
                   <Card className="card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height='auto'
                                
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
                                    <li className="attributes all">
                                        {attr}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <p className="price">{product.price}</p>
                                <p className="priceDesc">{product.priceDesc}</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", float: "left", position: "relative", top: "-1rem"}}>
                            <ThumbUpIcon fontSize='small' style={{ color: "#20DCEB", marginLeft: "1rem" }} />
                            <p className="likes">{product.likes}</p>
                        </div>
                        <button className={product.action === 'Modify' ? 'modifyButton' : 'addButton'}>{product.action}</button>
                        {/* </CardActions> */}
                    </Card>
                    </GridListTile>
                ))}
                
                </GridList>
            </div>
        );
    }
}

export default Product;
