import React, { useState, useEffect, useRef } from "react";
import axios from "../../api";
import "../home/Home.css";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Button from "@mui/material/Button";
import { BiCategory } from "react-icons/bi";
import { useFetch } from "../../components/hooks/UseFetch";
import Swiper from "../../components/Swiper/Swiper";
function Home() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("all");
  let url = `/products${
    category === "all" ? "" : `/category/${category}`
  }?limit=${count * 4}`;
  const { data: categories } = useFetch("/products/categories");
  const { data, loading } = useFetch(url, count, category);

  let options = categories?.data?.map((el, inx) => (
    <option key={inx} value={el}>
      {el}
    </option>
  ));

  //  useEffect(() => {
  //    setLoading(true);
  //    axios
  //      .get(`/products?limit=${count * 4}`)
  //      .then((res) => setData(res.data.products))
  //      .catch((res) => console.log(res))
  //      .finally(() => setLoading(false));
  //  }, [count]);

  return (
    <div className="home">
      <Banner />
      <div className="continer">
        <div className="opt">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id="opt"
          >
            <option className="" value="all">
              all
            </option>
            {options}
          </select>
        </div>

        <Swiper />
        <Products loading={loading} data={data?.data?.products} />
      </div>
      <div className="twobtns">
        <Button onClick={(e) => setCount((p) => p + 1)} variant="contained">
          Показать еще
        </Button>
        <Button onClick={(e) => setCount((p) => p - 1)} variant="contained">
          Назад
        </Button>
      </div>
    </div>
  );
}

export default Home;
