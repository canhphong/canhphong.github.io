import React, { Component } from 'react';
import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main id="mainContainer">
              <div className="container">
                {/* import components */}
                  <ProductsContainer />
                  <MessageContainer />
                  <CartContainer />
              </div>
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;
