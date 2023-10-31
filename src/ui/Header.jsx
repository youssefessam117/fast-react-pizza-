import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast react Pizza Co.</Link>
      <p>Jonas</p>
      <SearchOrder />
    </header>
  );
}
