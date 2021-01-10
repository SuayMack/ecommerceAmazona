import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
    
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart; 

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">amazona</Link>
                    </div>
                    <div>
                        <Link to="/cart">Cart</Link>
                        {cartItems.length > 0 && (
                            <span className="badge">{cartItems.length}</span>
                        )}
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
