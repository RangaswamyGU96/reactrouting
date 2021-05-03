import React from 'react';
import { Route } from 'react-router';

function welcome(props) {
    return (
        <div>
            <h1>Home Page</h1>
            <Route path="/welcome/new-user">
                <div>
                    Hello new user 
                </div>
            </Route>
        </div>
    );
}

export default welcome;