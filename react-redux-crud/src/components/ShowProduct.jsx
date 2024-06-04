import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  productSelectors,
} from "../features/productSlice.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct()).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <div className="box mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to="add" className="button is-success is-small">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>barang</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.barang}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link
                      to={`edit/${product.id}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteProduct(product.id))}
                      className="button is-small is-danger ml-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ShowProduct;
