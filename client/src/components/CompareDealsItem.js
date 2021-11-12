import React from "react";

import "../css/CompareDeals.scoped.css";

import imagePath from "../images/epPFL.jpg";

function CompareDealsItem() {
    return (
        <div className="u-container-style u-list-item u-repeater-item u-white u-list-item-1">
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <div className="u-align-center u-container-style u-expanded-width u-group u-palette-5-dark-2 u-group-1">
                    <div className="u-container-layout u-container-layout-2">
                        <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-2">Book Name 1</h3>
                    </div>
                </div>
                <img alt="" className="u-expanded-width u-image u-image-contain u-image-default u-image-1" src={imagePath} data-image-width={809} data-image-height={1000} />
                <div className="u-container-style u-expanded-width u-group u-group-2">
                    <div className="u-container-layout u-container-layout-3">
                        <p className="u-align-center u-text u-text-3">Starting at <b>$24,895</b>
                        </p>
                        <ul className="u-align-left u-custom-list u-text u-text-4">
                            <li>
                                <div className="class u-list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512.019 512.019" x="0px" y="0px" id="svg-b379"><path fill="currentColor" d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448 c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781 c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z" /></svg>
                                </div>5/7 Seats
                            </li>
                            <li>
                                <div className="class u-list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512.019 512.019" x="0px" y="0px" id="svg-b379"><path fill="currentColor" d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448 c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781 c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z" /></svg>
                                </div>velit esse cillum
                            </li>
                            <li>
                                <div className="class u-list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512.019 512.019" x="0px" y="0px" id="svg-b379"><path fill="currentColor" d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448 c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781 c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z" /></svg>
                                </div>dolore eu fugiat nulla
                            </li>
                            <li>
                                <div className="class u-list-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 512.019 512.019" x="0px" y="0px" id="svg-b379"><path fill="currentColor" d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448 c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781 c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z" /></svg>
                                </div>non proident
                            </li>
                        </ul>
                        <a href="https://nicepage.com/landing-page" className="u-btn u-btn-rectangle u-button-style u-palette-4-base u-btn-1">learn more</a>
                        <a href="https://nicepage.com/c/technology-website-templates" className="u-active-none u-btn u-button-style u-hover-none u-none u-text-hover-palette-2-base u-text-palette-1-base u-btn-2"><span className="u-icon u-text-palette-2-base"><svg className="u-svg-content" viewBox="0 0 511.334 511.334" style={{ width: '1em', height: '1em' }}><path d="m506.887 114.74c-3.979-5.097-10.086-8.076-16.553-8.076h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468l23.018 256.439c.005.302-.01.599.007.903.047.806.152 1.594.286 2.37l.842 9.376c.016.177.034.354.055.529 2.552 22.11 13.851 41.267 30.19 54.21-8.466 10.812-13.532 24.407-13.532 39.172 0 35.106 28.561 63.667 63.666 63.667 35.106 0 63.667-28.561 63.667-63.667 0-7.605-1.345-14.9-3.801-21.667h114.936c-2.457 6.767-3.801 14.062-3.801 21.667 0 35.106 28.561 63.667 63.667 63.667s63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c1.567-6.272.158-12.918-3.821-18.016z" /></svg></span>&nbsp;Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompareDealsItem;