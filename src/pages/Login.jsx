const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="form-img d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="login">
          <div className="mb-3 ">
            <label htmlFor="firstName" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="firstName" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
