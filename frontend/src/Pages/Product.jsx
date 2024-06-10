import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  //grab all products-data using useContext
  const {all_product} = useContext(ShopContext);
 //using PARAMS to get productID//
 //find product id from productsDATA//
  const {productId} = useParams();
  //assign the productID to a variable//
  const product = all_product.find((e)=> e.id === Number(productId));
  //if true then we will store it//
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/> 
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;