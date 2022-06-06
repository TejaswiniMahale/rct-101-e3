import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {
  const {
    getCartItemCountByProductId,
    addItemToCart,
    removeItemFromCart
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleDelete = async () => {
    await removeItemFromCart(id);
    
  };
  useEffect(() => {
    if (id) {
      setCount(getCartItemCountByProductId(id));
    }
  }, [id, getCartItemCountByProductId]);

  return (
    <div data-cy="product">
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
       
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => {
            addItemToCart({
              productId: id,
            });
          }}
        >
          Add To Cart
        </button>
      
        <div>
          <button data-cy="product-remove-cart-item-button" onClick={handleDelete}>
            Remove
          </button>
        </div>
    
    </div>
  );
};

export default Product;
