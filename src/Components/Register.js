import React from "react";


function Register() {
  return (
    <div className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal"> Register Details</h1>
      <label for="inputEmail" className="sr-only">
        Email address
      </label>
      <input
       
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" className="sr-only">
        Password
      </label>
      <input
       
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />
       <label for="inputEmail" className="sr-only">
       Mobile
      </label>
      <input
       
        type="mobile"
        id="inputMobile"
        className="form-control"
        placeholder="Mobile"
        required
        autofocus
      />
       <label for="inputEmail" className="sr-only">
        Address
      </label>
      <input
       
        type="address"
        id="inputAddress"
        className="form-control"
        placeholder="Address"
        required
        autofocus
      />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        // onClick={loginApi}
        className="btn btn-lg btn-primary btn-block"
        type="submit"
       
      >
        Sign in
      </button>
    </div>
  );
}

export default Register;
