function Register() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Register</h3>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Name"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Email"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Password"
            />

            <button className="btn btn-success w-100">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;