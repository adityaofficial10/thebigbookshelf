import React from "react";

import { Link } from "react-router-dom";
import logoPath from "../images/8HcfM0ab_400x400.jpg";

function HomeHeader() {
    return (
        <header className="u-black u-clearfix u-header u-header" id="sec-76fa"><div className="u-clearfix u-sheet u-sheet-1">
            <Link to="/" data-page-id={16819084} className="u-align-left-md u-align-left-sm u-align-left-xs u-image u-logo u-image-1" data-image-width={400} data-image-height={400} title="Home">
                <img src={logoPath} alt="..." className="u-logo-image u-logo-image-1" />
            </Link>
            <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                <div className="menu-collapse" style={{ fontSize: '1rem', letterSpacing: '0px' }}>
                    <a className="u-border-1 u-border-grey-75 u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base u-text-white u-white" href="true" style={{ padding: '4px 6px', fontSize: 'calc(1em + 8px)' }}>
                        <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger" /></svg>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{ width: '16px', height: '16px' }}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                        </symbol>
                        </defs>
                        </svg>
                    </a>
                </div>
                <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item"><Link to="/" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>Home</Link>
                    </li>
                        <li className="u-nav-item"><Link to="/#contact-us" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" data-page-id={16819084} style={{ padding: '10px 20px' }}>Contact Us</Link>
                        </li>
                        <li className="u-nav-item"><Link to="/login" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>Login</Link>
                        </li>
                        <li className="u-nav-item"><Link to="/signup" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>Signup</Link>
                        </li>
                    </ul>
                </div>
                <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                        <div className="u-inner-container-layout u-sidenav-overflow">
                            <div className="u-menu-close" />
                            <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                <li className="u-nav-item"><Link to="/" className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>Home</Link>
                                </li>
                                <li className="u-nav-item"><Link to="/#contact-us" className="u-button-style u-nav-link" data-page-id={16819084} style={{ padding: '10px 20px' }}>Contact Us</Link>
                                </li>
                                <li className="u-nav-item"><Link to="/login" className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>Login</Link>
                                </li>
                                <li className="u-nav-item"><Link to="/" className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>Signup</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
                </div>
            </nav>
            <h4 className="u-text u-text-default u-text-1">Big Bookshelf<br />
            </h4>
        </div>
        </header>
    );
}

export default HomeHeader;