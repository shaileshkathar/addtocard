import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userlogin } from "../actions/userloginaction";

export default function Login() {
  const dispatch = useDispatch();

  const [loginobject, setloginobject] = useState({});

  const HandleChange = (e) => {
    setloginobject({ ...loginobject, [e.target.name]: e.target.value });
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(userlogin(loginobject));
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="card mt-5">
              <div className="card-header bg-transparent border-0 text-center">
                <h3>
                  <strong className="text-uppercase">login user</strong>
                </h3>
              </div>

              <div className="card-body">
                <form onSubmit={HandleFormSubmit}>
                  <div className="mt-0">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>Email Id : </strong>
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={HandleChange}
                      className="form-control"
                      placeholder="Enter your email Id"
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>Password : </strong>
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={HandleChange}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <button className="btn btn-dark px-5 mx-2" type="submit">
                      {" "}
                      <strong>login</strong>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
