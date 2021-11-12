import React from "react";

import HomeHeader from "./HomeHeader";
import Footer from "./Footer";

import '../css/Login.scoped.css';
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <HomeHeader />
            <section className="u-align-center u-clearfix u-image u-shading u-section-1" data-image-width={2000} data-image-height={1333} id="sec-9d3b">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
                                        <h2 className="u-text u-text-default u-text-1">The Big Bookshelf</h2>
                                        <p>We verify our users so that no one gets cheated</p>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                    <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-2">
                                        <div className="u-expanded-width u-form u-login-control u-form-1">
                                            <form action="#" method="POST" className="u-clearfix u-form-custom-backend u-form-spacing-30 u-form-vertical u-inner-form" source="custom" name="form-4" style={{ padding: '0px' }}>
                                                <div className="u-form-group u-form-name">
                                                    <label htmlFor="username-22e3" className="u-form-control-hidden u-label" />
                                                    <input type="text" placeholder="Enter your Username" id="username-22e3" name="username" className="u-border-1 u-border-white u-input u-input-rectangle u-radius-50 u-white" required />
                                                </div>
                                                <div className="u-form-group u-form-password">
                                                    <label htmlFor="password-22e3" className="u-form-control-hidden u-label" />
                                                    <input type="text" placeholder="Enter your Password" id="password-22e3" name="password" className="u-border-1 u-border-white u-input u-input-rectangle u-radius-50 u-white" required />
                                                </div>
                                                <div className="u-form-checkbox u-form-group">
                                                    <input type="checkbox" id="checkbox-22e3" name="remember" defaultValue="On" />
                                                    <label htmlFor="checkbox-22e3" className="u-label">Remember me</label>
                                                </div>
                                                <div className="u-align-left u-form-group u-form-submit">
                                                    <Link to="/dashboard" className="u-btn u-btn-round u-btn-submit u-button-style u-radius-50 u-btn-1">Login</Link>
                                                    <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                                                </div>
                                                <input type="hidden" defaultValue name="recaptchaResponse" />
                                            </form>
                                        </div>
                                        <Link to="/signup" className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-body-alt-color u-btn-2">Don't Have an Account ?</Link>
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

export default Login;