import React, { useState } from "react";
import axios from "axios";

export const CreateProduct = () => {
const [product , setProduct] = useState(
    {
        name:"",
        
    }
)
    return (
    <>
      <h1>Hello CreateProduct !</h1>
    </>
  );
};
