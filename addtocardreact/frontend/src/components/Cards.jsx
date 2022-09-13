import React, { useState, useRef } from "react";
import { Button, Card, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from "../actions/addtocartaction";
import Cardsdata from "./CardData";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
export default function Cards({ mainRef }) {
  const [data, setdata] = useState(Cardsdata);
  // console.log(data);
  const { SerachInput } = useSelector((state) => state.seracbar);
  console.log(SerachInput);
  const dispatch = useDispatch();

  const send = (item) => {
    // console.log(item);
    dispatch(addtocart(item));
    mainRef.current.scrollIntoView({ behavior: "smooth" });
    toast.success(" Product add successfully 👍");
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data
          .filter((x) =>
            x.rname.toLowerCase().includes(SerachInput.toLowerCase())
          )
          .map((item, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={item.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>Price: {item.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => send(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
