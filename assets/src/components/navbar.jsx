import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`} /> Accueil
        </li>
        <li>
          <Link to={`/clients`} />
          Client
        </li>
        <li>
          <Link to={`/products`} />
          Produits
        </li>
      </ul>
    </nav>
  );
};
