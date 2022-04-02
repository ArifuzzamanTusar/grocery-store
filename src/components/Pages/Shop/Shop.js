import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import ProductLoop from '../../Templates/ProductLoop';

const Shop = () => {
    const [products] = useProducts();

    return (

        <div className="shop-page">
            <Container className='py-3'>
                <Row>
                    {
                        products.map(product => <ProductLoop
                            key={product.id}
                            data={product}
                        ></ProductLoop>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Shop;