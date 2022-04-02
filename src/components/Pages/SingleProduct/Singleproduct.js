import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Singleproduct = () => {


    const prams = useParams();
    return (
        <div className="productSingle py-3">
            <Container>
                    <h3 className='text-center'>Product Name:  {prams.id}</h3>
            </Container>
        </div>
    );
};

export default Singleproduct;