import React from 'react';
import  {NavLink} from 'react-router-dom'

function product(props) {
    return (
        <div>
            <h1>Products page</h1>

                <ol>
                    <li><NavLink   to="product/:p1">Product 1</NavLink></li>
                    <li><NavLink to="product/:p2">Product 2</NavLink></li>
                    <li><NavLink to="product/:p3">Product 3</NavLink></li>
                </ol>
        </div>
    );
}

export default product;