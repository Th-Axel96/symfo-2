import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { DeleteProduct } from "./functions/deleteProduct";
import { GetAllProducts } from "./functions/getAllProduct";

const URL = "https://localhost:8000/api/products";
const { id } = useParams;

export const Product = () => {
  return (
    <>
      <GetAllProducts />
    </>
  );
};
