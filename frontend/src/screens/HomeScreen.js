import React, {useState} from "react";
import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SaveIcon from '@material-ui/icons/Save';

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart);
 
  const { cartItems } = cart;
  const [filteredData,setFilteredData] = useState(null);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const handleSearch = (event) =>{
    let keyword = event.target.value;
    setFilteredData(keyword);

  }


console.log(filteredData ,'filteredData');

  const getProducts = useSelector((state) => state.getProducts);

  const { products=[], loading, error } = getProducts;
  console.log(products, 'product');

  // const items = products.filter((data)=>{
  //   console.log(data,'datame');
  //   if(filteredData == null)
  //       return data

  //   else if(data.name.toLowerCase().includes(filteredData.toLowerCase()) ||data.name.toLowerCase().includes(filteredData.toLowerCase())){
  //       return data 
  //   } 
  // })


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch ,products]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title"></h2>
      <div className="flex-container">
        <div className='location'> <LocationOnIcon  color="primary"  id='lagos'/> Lagos <ExpandMoreIcon/> </div>
        <div id='order'><SaveIcon id='purple'/> My Orders</div>
        <div><ShoppingCartIcon id='cart'/>Cart<span id='span'>{getCartCount()}</span></div>  
      </div>
     
      <div>
       <SearchIcon id='search'/> <input className='input' placeholder='Search MechBuy' type='search' onChange={(event) =>handleSearch(event)}  /> 
      </div>

      <div className='imagebackground'>
        <div>
          <h3 className='h3'>Having any issues with your order? </h3>
          <button id='button'>  Contact</button>
        </div>

      </div>

      <div className='recomendation'>
      <div> <DehazeIcon id='icon4'/> Product Categories</div>
      <div> <WhatshotIcon id='icon'/> Popular  Product</div>
      <div><ThumbUpAltIcon id='icon2'/> Recommended Products</div>
      <div><StorefrontIcon id='icon3'/> Shop</div>
      </div>
      
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products[0].map((product) => (
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
  );
};

export default HomeScreen;
