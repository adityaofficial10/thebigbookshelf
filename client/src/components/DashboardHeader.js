import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import "../css/DashboardHeader.scoped.css";

import logoPath from "../images/logo.jpg";

function DashboardHeader() {

    const [redirect, setRedirect] = useState(0);

    function handleLogout() {
        localStorage.clear();
        setRedirect(1);
    }

    if (!redirect) {
        return (
            <header className="u-align-center u-clearfix u-header u-section-row-container" id="sec-76fa" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><div className="u-section-rows">
                <div className="u-align-center u-black u-clearfix u-section-row u-section-row-1" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction id="sec-21ba">
                    <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
                        <Link to="/dashboard" className="u-image u-logo u-image-1" data-image-width={400} data-image-height={400}>
                            <img alt="..." src={logoPath} className="u-logo-image u-logo-image-1" data-image-width={80} />
                        </Link>
                        <nav data-position className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                            <div className="menu-collapse" style={{ fontSize: '1rem', letterSpacing: '0px', fontWeight: 700 }}>
                                <a className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-white" href=" " style={{ padding: '2px 10px', fontSize: 'calc(1em + 4px)' }}>
                                    <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger" /></svg>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{ width: '16px', height: '16px' }}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                                    </symbol>
                                    </defs></svg>
                                </a>
                            </div>
                            <div className="u-custom-menu u-nav-container">
                                <ul className="u-nav u-unstyled u-nav-1">
                                    <li className="u-nav-item">
                                        <Link to="/dashboard" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>Home</Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link to="/profile" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>My Profile</Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link to="/cart" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>My Cart</Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <button onClick={handleLogout} className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ padding: '10px 20px' }}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="u-custom-menu u-nav-container-collapse">
                                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                    <div className="u-inner-container-layout u-sidenav-overflow">
                                        <div className="u-menu-close" />
                                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><Link to="/dashboard" className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>Home</Link>
                                        </li><li className="u-nav-item"><Link to="/profile" className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>My Profile</Link>
                                            </li>
                                            <li className="u-nav-item"><Link to="/cart" className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>My Cart</Link>
                                            </li>
                                            <li className="u-nav-item"><button onClick={handleLogout} className="u-button-style u-nav-link" style={{ padding: '10px 20px' }}>Logout</button>
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
                </div>
                <div className="u-palette-5-base u-section-row u-sticky u-sticky-1148 u-section-row-2" id="sec-a7b4">
                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-2">
                        <form action="#" method="get" className="u-border-1 u-border-grey-30 u-search u-search-left u-white u-search-1">
                            <button className="u-search-button" type="submit">
                                <span className="u-search-icon u-spacing-10">
                                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 56.966 56.966"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-9806" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-9806" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" className="u-svg-content"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" /></svg>
                                </span>
                            </button>
                            <input className="u-search-input" type="search" name="search" defaultValue placeholder="Search" />
                        </form>
                        <Link to="/compare-deals" className="u-border-none u-btn u-button-style u-hover-grey-90 u-btn-1">Compare Deals</Link>
                    </div>
                </div>
            </div>
            </header>
        );
    } else {
        return (<Navigate to="/" />);
    }
}

export default DashboardHeader;