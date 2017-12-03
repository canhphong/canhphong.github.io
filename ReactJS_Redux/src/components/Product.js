import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img alt="iphone 6" />
                        <div className="caption">
                            <h2>Iphone</h2>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Product;