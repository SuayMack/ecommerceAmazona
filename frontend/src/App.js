import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
    
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">amazona</Link>
                    </div>
                    <div>
                        <Link to="/cart">Cart</Link>
                        <Link to="/singin">Sing In</Link>
                    </div>
                </header>
                <main>
                    <Route path = "/" component = { HomeScreen } exact></Route>
                    <Route path = "/product/:id" component = { ProductScreen }></Route>
                    <Route path = "/cart/:id?" component = { CartScreen }></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
