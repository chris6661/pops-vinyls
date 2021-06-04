import "./MainScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../utils/auth";
import { useParams } from "react-router-dom";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const MainScreen = () => {
  // gets username after logged in
  const loggedIn = Auth.loggedIn();
  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <div className="flex-row justify-space-between">
        {!loggedIn && (
          <div className="col-12 mb-3">
          <h1 className="test">Pop's Vinyls</h1>
          </div>
        )}
      </div>

      <div className="flex-row justify-space-between">
        {loggedIn && (
          <h1 className="test col-12">Welcome {user.username}</h1>
        )}
        {loggedIn && (
      <br></br>
      )}
        {loggedIn && (
      <h2 className="test2 col-12">Latest Products</h2>
      )}
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : loggedIn && (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
      </div>
    </div>
  );
};

export default MainScreen;
