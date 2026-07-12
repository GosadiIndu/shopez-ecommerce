import { useState } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop.jpeg";
import mobile from "../assets/mobile.jpeg";
import headphones from "../assets/hp.jpeg";
import watch from "../assets/watch.jpeg";
import shoes from "../assets/shoe.jpeg";
import backpack from "../assets/bag.jpeg";

function Products() {
  const [search, setSearch] = useState("");
  
  
const [wishlist, setWishlist] = useState([]);

const addToWishlist = (product) => {
  setWishlist([...wishlist, product]);
  alert(product.name + " added to Wishlist ❤️");
};
const [cart, setCart] = useState([]);
const addToCart = (product) => {
  setCart([...cart, product]);
  alert(product.name + " added to Cart 🛒");
};

  const products = [
  {
    name: "Laptop",
    price: "₹45,999",
    rating: "⭐⭐⭐⭐⭐",
    image: laptop,
  },
  {
    name: "Mobile",
    price: "₹19,999",
    rating: "⭐⭐⭐⭐",
    image: mobile,
  },
  {
    name: "Headphones",
    price: "₹2,499",
    rating: "⭐⭐⭐⭐",
    image: headphones,
  },
  {
    name: "Smart Watch",
    price: "₹3,999",
    rating: "⭐⭐⭐⭐⭐",
    image: watch,
  },
  {
    name: "Shoes",
    price: "₹2,999",
    rating: "⭐⭐⭐⭐",
    image: shoes,
  },
  {
    name: "Backpack",
    price: "₹1,499",
    rating: "⭐⭐⭐⭐",
    image: backpack,
  },
];

 const filtered = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="container mt-5">
      <h2>Products</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
      {filtered.map((item, index) => (
  <div className="col-md-4 mb-4" key={index}>
    <div className="card shadow h-100">

      <img
        src={item.image}
        alt={item.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5>{item.name}</h5>

        <h6 className="text-success">{item.price}</h6>

        <p>{item.rating}</p>

       <button
  className="btn btn-success me-2"
  onClick={() => addToCart(item)}
>
  Add to Cart
</button>
<button
  className="btn btn-danger me-2"
  onClick={() => addToWishlist(item)}
>
  ❤️ Wishlist
</button>
      <Link to="/buy" className="btn btn-primary">
  Buy Now
</Link>

      </div>

    </div>
  </div>
))}
      </div>
    </div>
  );
}

export default Products;