import React from 'react';
import {  useParams} from 'react-router-dom';

function ProductDetails(props) {

    const params = useParams();
// handiling the url params
    console.log(params.prodid);
    return (
        <div>
            <h2>Product details</h2>
            <p>{params.prodid} </p>
            
        </div>
    );
}

export default ProductDetails;