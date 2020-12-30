import React from 'react';
import data from './data';
import Product from './Product';

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">amazona</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/singin">Sing In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    {data.products.map((product) => (
                            <Product key = {product._id} product = {product}></Product>
                        ))
                    }
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
  );
}

export default App;
