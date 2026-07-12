function BuyNow() {
  return (
    <div className="container mt-5">
      <h2>💳 Buy Product</h2>

      <div className="card p-4 shadow">

        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea
            className="form-control"
            placeholder="Enter Address"
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
          />
        </div>

        <div className="mb-3">
          <label>Payment Method</label>

          <select className="form-control">
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>
        </div>

        <button
          className="btn btn-success"
          onClick={() => alert("✅ Order Placed Successfully")}
        >
          Place Order
        </button>

      </div>
    </div>
  );
}

export default BuyNow;