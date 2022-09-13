import axios from "axios";
import React, { useEffect, useState } from "react";

function Permmision() {
  const [roles, setroles] = useState([]);
  const [Pages, setPages] = useState([]);
  const [PermissionObject, setPermissionObject] = useState({
    roleId: "",
    PermissionId: "",
  });

  const HandleChange = (e) => {
    setPermissionObject({
      ...PermissionObject,
      [e.target.name]: e.target.value,
    });
  };
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:5000/api/v1/permission/post",
      PermissionObject
    );
    console.log(result);
    console.log(PermissionObject);
    e.target.reset();
  };

  const GetData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/roleGet");
    console.log(data);
    await setroles(data);
  };
  const GetDataPageName = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/menuget");
    console.log(data);
    await setPages(data);
  };
  useEffect(() => {
    GetData();
    GetDataPageName();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="card mt-5">
            <div className="card-header bg-transparent border-0 text-center">
              <h3>
                <strong className="text-uppercase">give permisssion</strong>
              </h3>
            </div>

            <div className="card-body">
              <form onSubmit={HandleFormSubmit}>
                <div className="mt-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    <strong>Role :</strong>
                  </label>

                  <select
                    onChange={HandleChange}
                    name="roleId"
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

                <div className="mt-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    <strong>Page :</strong>
                  </label>

                  <select
                    onChange={HandleChange}
                    name="PermissionId"
                    id="roleId"
                    className="form-select"
                    formControlName="roleId"
                  >
                    <option value="">Select option</option>

                    {Pages?.filter((xx) => xx).map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.menu}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mt-3 text-center">
                  <button className="btn btn-primary px-5 mx-2" type="submit">
                    {" "}
                    <strong>Submit</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Permmision;
