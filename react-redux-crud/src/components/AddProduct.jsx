import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../features/productSlice.jsx";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [barang, setBarang] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      await dispatch(saveProduct({ barang, price }));
      navigate("/");
      setLoading(false);
    },
    [dispatch, navigate, barang, price]
  );
  return (
    <div>
      <form onSubmit={createProduct} className="box mt-5">
        <div className="field">
          <label className="label">Barang</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Barang"
              value={barang}
              onChange={(e) => setBarang(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          {loading && <p>Loading ....</p>}
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
