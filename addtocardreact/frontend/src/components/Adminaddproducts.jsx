import axios from "axios";
import React, { useState } from "react";

export default function Adminaddproducts() {
  const [admindata, setadmindata] = useState({});
  const [image, setimage] = useState("");

  //   console.log(admindata);

  const HandleChange = async (e) => {
    setadmindata({ ...admindata, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setimage(e.target.files[0]);
    // console.log(image);
  };

  const HandleSubmit = async (values) => {
    values.preventDefault();

    const fd = new FormData();
    fd.append("rname", values.rname);
    fd.append("address", values.address);
    fd.append("somedata", values.somedata);
    fd.append("price", values.price);
    fd.append("qnty", values.qnty);
    fd.append("rating", values.rating);
    fd.append("imgdata", image);
    const result = await axios.post(
      "http://localhost:5000/api/v1/addproducts",
      fd
    );
    console.log(result);

    values.target.reset();
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="card mt-5">
                <div className="card-header bg-transparent border-0 text-center">
                  <h3>
                    <strong className="text-uppercase">Add Products</strong>
                  </h3>
                </div>
                <hr />
                <div className="card-body">
                  <form onSubmit={HandleSubmit}>
                    <div className="mt-0">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        <strong>rname: </strong>
                      </label>
                      <input
                        name="rname"
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
                        <strong>address : </strong>
                      </label>
                      <input
                        name="address"
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
                        <strong>somedata</strong>
                      </label>
                      <input
                        name="somedata"
                        type="text"
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
                        <strong>price : </strong>
                      </label>
                      <input
                        name="price"
                        type="number"
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
                        <strong>qnty : </strong>
                      </label>
                      <input
                        name="qnty"
                        type="number"
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
                        <strong>imgdata : </strong>
                      </label>
                      <input
                        accept="image/png,image/gif,image/jpeg"
                        name="imgdata"
                        type="file"
                        onChange={handleImageChange}
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        <strong>Rating : </strong>
                      </label>
                      <input
                        name="rating"
                        type="number"
                        onChange={handleImageChange}
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div className="mt-3 text-center">
                      <button
                        className="btn btn-primary px-5 mx-2"
                        type="submit"
                      >
                        {" "}
                        <strong>Add Products</strong>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
