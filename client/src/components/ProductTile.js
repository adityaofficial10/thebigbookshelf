import React from "react";
import { Link } from "react-router-dom";

import "../css/BuyerDashboard.scoped.css";

function ProductTile() {
    return (
        <div className="u-container-style u-grey-10 u-products-item u-repeater-item u-repeater-item-1">
            <div className="u-container-layout u-similar-container u-container-layout-1">{/*product_image*/}
                <img alt="..." className="u-expanded-width u-image-contain u-image u-image-default u-product-control u-image-1" data-image-width={1659} data-image-height={2560} src="https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg" />{/*/product_image*/}
                <h4 className="u-align-center u-text u-text-1">Harry Potter and The Prisoner of Azkaban</h4>
                <h5 className="u-text u-text-default u-text-2">J K Rowling</h5>{/*product_price*/}
                <div className="u-product-control u-product-price u-product-price-1">
                    <div className="u-price-wrapper u-spacing-10">{/*product_old_price*/}
                        <div className="u-hide-price u-old-price">{/*product_old_price_content*/}$12{/*/product_old_price_content*/}</div>{/*/product_old_price*/}{/*product_regular_price*/}
                        <div className="u-price" style={{ fontSize: '1.25rem', fontWeight: 600 }}>{/*product_regular_price_content*/}$9.95{/*/product_regular_price_content*/}</div>{/*/product_regular_price*/}
                    </div>
                </div>{/*/product_price*/}
                <h6 className="u-text u-text-default u-text-3">Seller 1 Name</h6>
                <Link to="/book-info#book-info" className="u-btn u-button-style u-none u-text-hover-palette-1-base u-text-palette-2-base u-btn-1">Book Info <span className="u-icon u-text-palette-2-base u-icon-1"><svg className="u-svg-content" viewBox="0 0 412.72 412.72" x="0px" y="0px" style={{ width: '1em', height: '1em' }}><path d="M404.72,82.944c-0.027,0-0.054,0-0.08,0h0h-27.12v-9.28c0.146-3.673-2.23-6.974-5.76-8    c-18.828-4.934-38.216-7.408-57.68-7.36c-32,0-75.6,7.2-107.84,40c-32-33.12-75.92-40-107.84-40    c-19.464-0.048-38.852,2.426-57.68,7.36c-3.53,1.026-5.906,4.327-5.76,8v9.2H8c-4.418,0-8,3.582-8,8v255.52c0,4.418,3.582,8,8,8    c1.374-0.004,2.724-0.362,3.92-1.04c0.8-0.4,80.8-44.16,192.48-16h1.2h0.72c0.638,0.077,1.282,0.077,1.92,0    c112-28.4,192,15.28,192.48,16c2.475,1.429,5.525,1.429,8,0c2.46-1.42,3.983-4.039,4-6.88V90.944    C412.72,86.526,409.139,82.944,404.72,82.944z M16,333.664V98.944h19.12v200.64c-0.05,4.418,3.491,8.04,7.909,8.09    c0.432,0.005,0.864-0.025,1.291-0.09c16.55-2.527,33.259-3.864,50-4c23.19-0.402,46.283,3.086,68.32,10.32    C112.875,307.886,62.397,314.688,16,333.664z M94.32,287.664c-14.551,0.033-29.085,0.968-43.52,2.8V79.984    c15.576-3.47,31.482-5.241,47.44-5.28c29.92,0,71.2,6.88,99.84,39.2l0.24,199.28C181.68,302.304,149.2,287.664,94.32,287.664z     M214.32,113.904c28.64-32,69.92-39.2,99.84-39.2c15.957,0.047,31.863,1.817,47.44,5.28v210.48    c-14.354-1.849-28.808-2.811-43.28-2.88c-54.56,0-87.12,14.64-104,25.52V113.904z M396.64,333.664    c-46.496-19.028-97.09-25.831-146.96-19.76c22.141-7.26,45.344-10.749,68.64-10.32c16.846,0.094,33.663,1.404,50.32,3.92    c4.368,0.663,8.447-2.341,9.11-6.709c0.065-0.427,0.095-0.859,0.09-1.291V98.944h19.12L396.64,333.664z" /></svg></span>
                </Link>
                <a href=" " className="u-border-2 u-border-palette-2-base u-btn u-btn-round u-button-style u-hover-palette-2-base u-none u-radius-6 u-text-body-color u-text-hover-white u-btn-2">Add To Cart&nbsp;<span className="u-icon u-icon-2"><svg className="u-svg-content" viewBox="0 0 511.997 511.997" x="0px" y="0px" style={{ width: '1em', height: '1em' }}><g><g><path d="M405.387,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84    S440.588,362.612,405.387,362.612z M405.387,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536    c14.083,0,25.536,11.453,25.536,25.536S419.47,451.988,405.387,451.988z" />
                </g>
                </g><g><g><path d="M507.927,115.875c-3.626-4.641-9.187-7.348-15.079-7.348H118.22l-17.237-72.12c-2.062-8.618-9.768-14.702-18.629-14.702    H19.152C8.574,21.704,0,30.278,0,40.856s8.574,19.152,19.152,19.152h48.085l62.244,260.443    c2.062,8.625,9.768,14.702,18.629,14.702h298.135c8.804,0,16.477-6.001,18.59-14.543l46.604-188.329    C512.849,126.562,511.553,120.516,507.927,115.875z M431.261,296.85H163.227l-35.853-150.019h341.003L431.261,296.85z" />
                </g>
                    </g><g><g><path d="M173.646,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84    S208.847,362.612,173.646,362.612z M173.646,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536    s25.536,11.453,25.536,25.536S187.729,451.988,173.646,451.988z" />
                    </g>
                    </g></svg></span>
                </a>
            </div>
        </div>
    );
}

export default ProductTile;