import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🛒 ShopEZ E-Commerce</h1>

      <div className="card p-4 shadow">
        <h3>Welcome!</h3>
        <p>
          Welcome to ShopEZ, an online shopping application developed using
          the MERN Stack.
        </p>

        <h4>Features</h4>
        <ul>
          <li>👤 User Registration & Login</li>
          <li>🛍️ Browse Products</li>
          <li>🔍 Search Products</li>
          <li>🛒 Add to Cart</li>
          <li>💳 Easy Checkout</li>
        </ul>

        <Link to="/products" className="btn btn-primary mt-3 w-100">
        Start Shopping
        </Link>
      </div>
    </div>
  );
}

export default Home;