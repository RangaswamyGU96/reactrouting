import { Redirect, Route } from 'react-router';
import {   Switch } from 'react-router-dom'
import './App.css';
import Welcome from './Pages/welcome';
import Login from './Pages/Login';
import Products from './Pages/product';
import ProductDetails from './components/ProductDetails';
import Layout from './components/layout/layout';
import PageNOtfound from './components/Pagenotfound/Pagenotfound'

function App() {
  return (
    <div className="App">
      <Layout>
        < Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Products />
          </Route>
          <Route path="/product/:prodid">
            <ProductDetails />
          </Route>
          <Route path="*"> 
              <PageNOtfound></PageNOtfound>
          </Route>
        </Switch>
      </Layout>




    </div>
  );
}

export default App;
