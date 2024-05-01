import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import "../single-route/Single.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, []);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="single">
      <h2>{product?.title}</h2>
      <img src={product?.images[0]} alt="" />
      <div className="price">
        <h1 style={{ color: "red" }}>{product?.price}$</h1>
        <h3>({product?.rating})</h3>
      </div>
      <Button style={{ width: "330px" }} variant="contained">
        Buy
      </Button>
      <div style={{ width: "800px", fontSize: "22px", paddingTop: "20px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod corporis
        quae asperiores quis magnam, maxime reprehenderit atque earum ea
        nesciunt quo omnis tempore magni esse voluptatum quidem alias ab veniam
        nulla officiis nostrum necessitatibus expedita! Explicabo adipisci nam
        reiciendis ex hic, animi molestias. Ad dolorem quis nesciunt sunt quam
        nihil magnam laudantium non laborum. Recusandae earum, nisi itaque,
        neque repellendus illo et quia illum labore, quae qui temporibus
        provident eveniet numquam ducimus possimus cupiditate exercitationem
        veniam harum cum. Totam adipisci ullam, placeat libero debitis quaerat,
        quo eligendi nulla exercitationem consequatur consequuntur accusamus,
        eos accusantium cumque sint recusandae dolorem ipsa odio asperiores
        esse? Voluptatum corrupti recusandae rerum ad nulla itaque minus magni
        maiores dolorem. Rem inventore vel voluptatum, praesentium, nihil
        impedit nam animi assumenda odit laudantium ab iusto! Ipsum qui
        mollitia, magnam deserunt tempora porro repudiandae beatae, pariatur id
        libero sequi consectetur ad consequuntur reprehenderit deleniti
        similique quam velit? Minus alias sed sint illo minima sapiente
        obcaecati. Esse, beatae. Dolores rem eligendi temporibus sequi
        perferendis eum nihil enim minus illum soluta mollitia animi,
        dignissimos vel, et aut iure neque? Animi suscipit aspernatur esse.
        Earum minima modi accusamus quia odit, aut est omnis, voluptas ea ullam
        cumque, eum sit cupiditate numquam quis!
      </div>
    </div>
  );
};

export default SingleRoute;
