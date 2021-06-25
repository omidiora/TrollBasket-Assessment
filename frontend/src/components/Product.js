import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
       <Link to={`/product/${productId}`} className="info__button">
      <img src={imageUrl} alt={name}  className='image'/>

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        {/* <Link to={`/product/${productId}`} className="info__button">
          View
        </Link> */}
      </div>
      </Link>
    </div>
  );
};

export default Product;
