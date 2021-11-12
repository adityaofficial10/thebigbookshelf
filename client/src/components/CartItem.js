import React from "react";

import "../css/Cart.scoped.css";
import cartItemImage from "../images/71sH3vxziLL.jpg";

function CartItem() {
    return (
        <tr style={{ height: '121px' }}>
            <td className="u-border-1 u-border-grey-15 u-table-cell"><span className="u-cart-remove-item u-icon u-text-grey-40 u-icon-1"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 52 52" x="0px" y="0px" style={{ width: '1em', height: '1em' }}><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
          S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" /><path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0
          s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36
          s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293
          c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z" />
            </g></svg></span>
                <img alt=" " className="u-cart-product-image u-image u-image-round u-product-control u-radius-17" src={cartItemImage} />
                <h2 className="u-cart-product-title u-product-control u-text u-text-1">
                    <a className="u-product-title-link" href=" ">Product 1 Title</a>
                </h2>
            </td>
            <td className="u-border-1 u-border-grey-15 u-table-cell">
                <div className="u-cart-product-price u-product-control u-product-price">
                    <div className="u-price-wrapper">
                        <div className="u-hide-price u-old-price" />
                        <div className="u-price" style={{ fontWeight: 700, fontSize: '1rem' }}>$17.00</div>
                    </div>
                </div>
            </td>
            <td className="u-border-1 u-border-grey-15 u-table-cell">
                <div className="u-cart-product-quantity u-product-control u-product-quantity u-product-quantity-1">
                    <div className="u-hidden u-quantity-label"> Quantity </div>
                    <div className="u-border-1 u-border-grey-25 u-quantity-input u-radius-5">
                        <a href=" " className="disabled minus u-button-style u-hidden u-quantity-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m 4 8 h 8" fill="none" stroke="currentColor" strokeWidth={1} fillRule="evenodd" /></svg>
                        </a>
                        <input className="u-input" type="text" defaultValue={1} pattern="[0-9]+" />
                        <a href=" " className="plus u-button-style u-hidden u-quantity-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m 4 8 h 8 M 8 4 v 8" fill="none" stroke="currentColor" strokeWidth={1} fillRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </td>
            <td className="u-border-1 u-border-grey-15 u-table-cell">
                <div className="u-cart-product-subtotal u-product-control u-product-price">
                    <div className="u-price-wrapper">
                        <div className="u-hide-price u-old-price" />
                        <div className="u-price" style={{ fontWeight: 400 }}>$17.00</div>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default CartItem;