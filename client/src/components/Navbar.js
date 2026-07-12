import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">ShopEZ</Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/wishlist">
  ❤️ Wishlist
</Link>
<Link className="nav-link" to="/cart">
  🛒 Cart
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;