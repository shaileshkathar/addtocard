import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { Link, NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { height } from "@mui/system";
import { removetocart } from "../actions/addtocartaction";
import { mainRef } from "../components/Cards";
import { userlogout } from "../actions/userloginaction";
import { addproducts } from "../actions/productaction";
import RouteNavlink from "./RouteNavlink";
function Headers({ mainRef }) {
  const [pdata, setpdata] = useState([]);
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  console.log(price);
  const { carts } = useSelector((state) => state.addtocart);

  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userdata);
  console.log(userdata);
  const { pages } = useSelector((state) => state.Page);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handledelete = (id) => {
    // console.log(id);
    dispatch(removetocart(id));
  };

  const total = () => {
    let price = 0;
    carts.map((e) => {
      price = e.price * e.qnty + price;
    });
    setPrice(price);
  };

  const handlesearch = (e) => {
    setSearch(e.target.value);
    dispatch(addproducts(e.target.value));
  };
  useEffect(() => {
    total();
  }, [total]);
  return (
    <div>
      <Navbar ref={mainRef} bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to={"/"} className="text-decoration-none text-light">
            eshop
          </NavLink>
          <Nav className="me-auto">
            {/* <NavLink to={"/"} className="text-decoration-none text-light mx-5">
              Home
            </NavLink> */}

            {userdata?.data?.success &&
              userdata.data.PermssionMap?.map((item, i) => {
                for (let i = 0; i <= pages.length; i++) {
                  if (pages[i].id == item.PermissionId) {
                    console.log(pages[i]);
                    return <RouteNavlink data={pages[i]} />;
                  }
                  console.log(pdata);
                }
              })}

            {/* <NavLink
              to={"/cards"}
              className="text-decoration-none text-light mx-3"
            >
              cards
            </NavLink>

            <NavLink
              to={"/cart/id"}
              className="text-decoration-none text-light mx-3"
            >
              cardsdetails
            </NavLink>
            <NavLink
              to={"/admin"}
              className="text-decoration-none text-light mx-3 "
            > */}
            {/* Admin
            </NavLink> */}
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handlesearch}
            />
            {/* <Button variant="outline-success">Search</Button> */}

            {/* <>
              <NavLink
                to={"/login"}
                className="text-decoration-none text-light mx-3"
              >
                Login
              </NavLink>
              <NavLink
                to={"/reg"}
                className="text-decoration-none text-light mx-3"
              >
                Registration
              </NavLink>
            </> */}
          </Nav>
          <Badge
            badgeContent={carts.length}
            color="primary"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
          {userdata?.data?.success ? (
            <Dropdown className="mx-5">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {userdata.data.firstname}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => {
                    dispatch(userlogout());
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className="text-decoration-none text-light mx-3"
              >
                Login
              </NavLink>
              <NavLink
                to={"/reg"}
                className="text-decoration-none text-light mx-3"
              >
                Registration
              </NavLink>
            </>
          )}
          <NavLink
            to={"/permmsion"}
            className="text-decoration-none text-light mx-3"
          >
            Permmsion
          </NavLink>
        </Container>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {carts.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((carts) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/carts/${carts.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={carts.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{carts.rname}</p>
                            <p>Price:₹{carts.price}</p>
                            <p>Quentity:{carts.qnty}</p>
                            {/* <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                            </p> */}
                          </td>
                          <td
                            className=""
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => handledelete(carts.id)}
                          >
                            <i className="fas fa-trash"> </i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total:₹{price}</p>
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p className="" style={{ fontSize: 22 }}>
                your cart is empty
              </p>
              <img
                src="./image/add-to-cart-shopping.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
}

export default Headers;
