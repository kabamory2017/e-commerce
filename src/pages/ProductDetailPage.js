import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, loading, error] = useFetchData(`products/${productId}`);

  //   const [productsPage, loading, error] = useFetchData(`products`);
  // productsPage.products
  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <div>
          <img
            src={product.images[0]}
            className="card-img-top card-image"
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
