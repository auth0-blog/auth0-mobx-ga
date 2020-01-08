import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject('store')
@observer
class Cart extends Component {
  render() {
    return (
      <div className='card'>
        {this.props.store.currentCart.map((data, index) => (
          <div key={index} className='cart'>
            <button
              onClick={() => this.props.store.removeFromCart(data.product_id)}
              className='btn btn-default btn-xs cancel'
            >
              X
            </button>
            <img height={30} src={data.image} alt='Product stuff' />
            <div className='product-cart-name'>{data.name}</div>
            <div className='control'>
              <button
                onClick={() =>
                  this.props.store.increaseQuantityInCart(data.product_id)
                }
                className='btn btn-default btn-xs'
              >
                +
              </button>
              <button
                onClick={() =>
                  this.props.store.decreaseQuantityInCart(data.product_id)
                }
                className='btn btn-default btn-xs'
              >
                -
              </button>
            </div>
            <div className='quantity'>{data.quantity}</div>
            <div className='quantity'>$ {data.price}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default observer(Cart);