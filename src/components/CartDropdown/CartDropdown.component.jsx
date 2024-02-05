import { useContext } from 'react';
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

import { CartContext } from '../../contexts/cart.context';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
