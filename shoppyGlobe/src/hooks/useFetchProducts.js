import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => setProducts(response.data.products))
      .catch(err => setError("Failed to fetch products"));
  }, []);

  return { products, error };
};

export default useFetchProducts;
