import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';

import './ProductLoop.css';

const ProductLoop = (props) => {
    const { name, image, price } = props.data;
    return (
        <Col md={3}>
            <div className="product-area p-2 my-3 shadow rounded">
                <Image src={image} className="img-fluid"></Image>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="name">
                        <h4>{name}</h4>
                    </div>
                    <div className="price">
                        <h4>{price}</h4>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Add To Cart
                    </Button>
                  
                </div>

            </div>



        </Col>
    );
};

export default ProductLoop;