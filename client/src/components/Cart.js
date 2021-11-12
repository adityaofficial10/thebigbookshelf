import React from "react";
import CartItem from "./CartItem";

import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

import "../css/Cart.scoped.css";

function Cart() {
    return (
        <div>
            <DashboardHeader />
            <section className="u-clearfix u-section-1" id="sec-da56">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-cart u-expanded-width u-cart-1">
                        <div className="u-cart-products-table u-table u-table-responsive">
                            <table className="u-table-entity">
                                <colgroup>
                                    <col width="65%" />
                                    <col width="15%" />
                                    <col width="15%" />
                                    <col width="15%" />
                                </colgroup>
                                <thead className="u-grey-10 u-table-header u-table-header-1">
                                    <tr style={{ height: '29px' }}>
                                        <th className="u-border-1 u-border-grey-15 u-table-cell">Product </th>
                                        <th className="u-border-1 u-border-grey-15 u-table-cell">Price </th>
                                        <th className="u-border-1 u-border-grey-15 u-table-cell">Quantity </th>
                                        <th className="u-border-1 u-border-grey-15 u-table-cell">Subtotal </th>
                                    </tr>
                                </thead>
                                <tbody className="u-align-left u-table-alt-grey-5 u-table-body">
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                </tbody>
                            </table>
                        </div>
                        <div className="u-cart-button-container">
                            <a href=" " className="u-active-none u-btn u-button-style u-cart-continue-shopping u-hover-none u-none u-text-body-color u-btn-1"><span className="u-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 443.52 443.52" x="0px" y="0px" style={{ width: '1em', height: '1em' }}><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z" />
                            </g>
                            </g></svg></span>&nbsp;Continue Shopping
                            </a>
                            <a href=" " className="u-btn u-btn-round u-button-style u-cart-update u-grey-5 u-radius-50 u-btn-2">Update Cart</a>
                        </div>
                        <div className="u-cart-blocks-container">
                            <div className="u-cart-block u-indent-30">
                                <div className="u-cart-block-container u-clearfix">
                                    <h5 className="u-cart-block-header u-text">Promotion Code</h5>
                                    <div className="u-cart-block-content u-text">
                                        <div className="u-cart-form u-form">
                                            <form action="#" method="POST" className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form" source="custom" name="form">
                                                <div className="u-form-group">
                                                    <label htmlFor="name-5861" className="u-form-control-hidden u-label">Coupon code</label>
                                                    <input type="text" placeholder="Coupon code" id="name-5861" name="coupon" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                                                </div>
                                                <div className="u-align-left u-form-group u-form-submit">
                                                    <a href=" " className="u-btn u-btn-round u-btn-submit u-button-style u-radius-50 u-btn-3">Apply Coupon</a>
                                                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                                                </div>
                                                <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                                                <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                                                <input type="hidden" defaultValue name="recaptchaResponse" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-cart-block u-cart-totals-block u-indent-30">
                                <div className="u-cart-block-container u-clearfix">
                                    <h5 className="u-cart-block-header u-text">Cart Totals</h5>
                                    <div className="u-align-right u-cart-block-content u-text">
                                        <div className="u-cart-totals-table u-table u-table-responsive">
                                            <table className="u-table-entity">
                                                <colgroup>
                                                    <col width="50%" />
                                                    <col width="50%" />
                                                </colgroup>
                                                <tbody className="u-align-right u-grey-5 u-table-body u-table-body-2">
                                                    <tr style={{ height: '46px' }}>
                                                        <td className="u-align-left u-border-1 u-border-grey-15 u-first-column u-table-cell u-table-cell-17">Subtotal</td>
                                                        <td className="u-border-1 u-border-grey-15 u-table-cell">$281.00</td>
                                                    </tr>
                                                    <tr style={{ height: '46px' }}>
                                                        <td className="u-align-left u-border-1 u-border-grey-15 u-first-column u-table-cell u-table-cell-19">Total</td>
                                                        <td className="u-border-1 u-border-grey-15 u-table-cell u-table-cell-20">$281.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <a href=" " className="u-btn u-btn-round u-button-style u-cart-checkout-btn u-radius-50 u-btn-4">Proceed to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Cart;