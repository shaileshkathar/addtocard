import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Registration() {
  const [roles, setroles] = useState([]);
  console.log(roles);
  const [regdata, setregdata] = useState({});
  console.log(regdata);
  const HandleChange = (e) => {
    setregdata({ ...regdata, [e.target.name]: e.target.value });
  };

  const getdata = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/roleGet");
    console.log(data);
    await setroles(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:5000/api/v1/reg",
      regdata
    );
    console.log(result.data);
    e.target.reset();
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="card mt-5">
              <div className="card-header bg-transparent border-0 text-center">
                <h3>
                  <strong className="text-uppercase">regisiter user</strong>
                </h3>
              </div>
              <hr />
              <div className="card-body">
                <form onSubmit={HandleFormSubmit}>
                  <div className="mt-0">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>first Name : </strong>
                    </label>
                    <input
                      name="firstname"
                      onChange={HandleChange}
                      type="text"
                      className="form-control"
                      placeholder="Enter your email Id"
                    />
                  </div>
                  <div className="mt-0">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>Last Name : </strong>
                    </label>
                    <input
                      name="lastname"
                      onChange={HandleChange}
                      type="text"
                      className="form-control"
                      placeholder="Enter your email Id"
                    />
                  </div>
                  <div className="mt-0">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>Email Id : </strong>
                    </label>
                    <input
                      name="email"
                      type="email"
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
                      name="password"
                      type="password"
                      onChange={HandleChange}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>Role :</strong>
                    </label>

                    <select
                      name="roleId"
                      onChange={HandleChange}
                      id="roleId"
                      className="form-select"
                      formControlName="roleId"
                    >
                      <option value="">Select option</option>

                      {roles?.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.rolename}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="mt-3 text-center">
                    <button className="btn btn-primary px-5 mx-2" type="submit">
                      {" "}
                      <strong>Resisiter</strong>
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
