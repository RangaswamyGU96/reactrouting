import React, { Fragment } from 'react';

import  {Link , NavLink} from 'react-router-dom';

function layout(props) {
    return (
        <Fragment>
             <div className="navbar">
            <ul>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <NavLink  activeClassName="active"  to="/welcome">Welcome</NavLink>
              </li>
              <li>
                <NavLink  activeClassName="active" to="/login">Login</NavLink>
              </li>
              
            </ul>
          </div>
          <main>
              {props.children}
          </main>
        </Fragment>
            
        
    );
}

export default layout;