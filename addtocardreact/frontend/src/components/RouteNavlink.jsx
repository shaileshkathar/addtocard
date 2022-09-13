import React from "react";
import { Link, NavLink } from "react-router-dom";

function RouteNavlink({ data }) {
  console.log(data);
  return (
    <NavLink to={data.URL} className="text-decoration-none text-light mx-5">
      {data.menu}
    </NavLink>
  );
}

export default RouteNavlink;
