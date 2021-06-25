import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="">
            <div className="info">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="info_name">{product.name}</p>
              <p className="info_name">{product.description}</p>
              <p className="info_name"><b> &#x20A6;{product.price}/price</b></p>
              <p className="info_name">Review and Ratings</p>
             <div className='rating'>

                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                
             </div>
              <p className="info_name" >This is the best product I have used in 
                a long while and the size fits perfectly and I 
                love the colors!!!!!</p>
                <p className="info_name">Segun Arinze</p>
                <button type="button" id='button1' onClick={addToCartHandler}>
                  Add To Cart
                </button>
                <button type="button" id='button2'>
                  WishList
                </button>
            </div>
        
          </div>
              
          {/* <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default ProductScreen;
