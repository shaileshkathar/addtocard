import { dialogTitleClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtocart, Remove, removetocart } from "../actions/addtocartaction";

export default function CardDetails() {
  const [data, setdata] = useState([]);
  console.log(data);
  const { id } = useParams();

  const history = useNavigate();
  // console.log(id);

  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.addtocart);
  console.log(carts);

  const compare = () => {
    const comparedata = carts.filter((e) => {
      return e.id == id;
    });
    // console.log(comparedata);
    setdata(comparedata);
  };

  //add data
  const send = (item) => {
    // console.log(item);
    dispatch(addtocart(item));
  };

  const handledelete = (id) => {
    console.log(id);
    dispatch(removetocart(id));
    history("/cards");
  };

  //remove one
  const remove = (item) => {
    dispatch(Remove(item));
  };

  useEffect(() => {
    compare();
  }, [id]);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong>:{ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong>:₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong>
                            {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong>:₹{ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center "
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => handledelete(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating}★
                            </span>
                          </p>
                          <p>
                            <strong>Ordre Review:</strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove:</strong>
                            <span>
                              <i
                                className="fas fa-trash "
                                onClick={() => handledelete(ele.id)}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer ",
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
