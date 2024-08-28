import ProductList from "../components/ProductList";
import { useEffect, useMemo, useState } from "react";
// import { GetProducts } from "../services/ProductService";
import { GetProductLoader } from "../utils/GetProductLoader";
import { FilterProduct } from "../utils/FilterProduct";
import { useFetchData } from "../hooks/UseFetchData";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(true);

  const [productsPage, loading, error] = useFetchData(`products`);

  const productsMemo = useMemo(() => {
    return FilterProduct(search, products);
  }, [products, search]);

  useEffect(() => {
    if (!loading) {
      setProducts(productsPage.products);
    }
  }, [productsPage, loading]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let dataResponse = await GetProducts();
  //       setProducts(dataResponse.data.products);
  //       // setProductsFilter(dataResponse.data.products);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []); // componentDidMount

  return (
    <>
      <h1>Products</h1>
      <div className="d-flex justify-content-center">
        <input
          className="form-control w-50"
          type="text"
          placeholder="search product by name"
          aria-label="default input example"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="row mt-4">{GetProductLoader()}</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <div className="mt-4">
          <ProductList products={productsMemo} />
        </div>
      )}
    </>
  );
};

export default ProductPage;
