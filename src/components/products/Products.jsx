import { Link } from "react-router-dom";
import Skeleton from "../skeleton/Skeleton";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Products = ({ data, loading }) => {
  let products = data?.map((el) => (
    <Card key={el.id} sx={{ maxWidth: 345 }}>
      <Link to={`/product/${el.id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={el.images[0]}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.title.slice(0, 20)} <h4 style={{ color: "red" }}>${el.price}</h4>
        </Typography>
        <Typography variant="body" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ));
  return (
    <>
      {loading ? <Skeleton count={10} /> : <></>}
      <div className="wrapper">{products}</div>
    </>
  );
};

export default Products;
