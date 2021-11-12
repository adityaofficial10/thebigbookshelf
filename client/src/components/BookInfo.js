import React from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

import "../css/BookInfo.scoped.css";

import imagePath from "../images/3.svg";

function BookInfo() {
    return (
        <div>
            <DashboardHeader />
            <section className="u-align-center u-clearfix u-section-1" id="book-info">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">{/*product*/}{/*product_options_json*/}{/*{"source":""}*/}{/*/product_options_json*/}{/*product_item*/}
                    <div className="u-align-left u-container-style u-expanded-width u-product u-product-1">
                        <div className="u-container-layout u-container-layout-1">{/*product_gallery*/}{/*options_json*/}{/*{"maxItems":""}*/}{/*/options_json*/}
                            <div className="u-carousel u-gallery u-layout-thumbnails u-lightbox u-no-transition u-product-control u-show-text-none u-thumbnails-position-left u-gallery-1" data-interval={5000} data-u-ride="carousel" id="carousel-0c74">
                                <div className="u-carousel-inner u-gallery-inner" role="listbox">{/*product_gallery_item*/}
                                    <div className="u-active u-carousel-item u-gallery-item">
                                        <div className="u-back-slide">
                                            <img alt="..." className="u-back-image u-expanded" src={imagePath} />
                                        </div>
                                        <div className="u-over-slide u-over-slide-1">
                                            <h3 className="u-gallery-heading">Sample Title</h3>
                                            <p className="u-gallery-text">Sample Text</p>
                                        </div>
                                    </div>{/*/product_gallery_item*/}{/*product_gallery_item*/}
                                    <div className="u-carousel-item u-gallery-item">
                                        <div className="u-back-slide">
                                            <img alt="..." className="u-back-image u-expanded" src={imagePath} />
                                        </div>
                                        <div className="u-over-slide u-over-slide-2">
                                            <h3 className="u-gallery-heading">Sample Title</h3>
                                            <p className="u-gallery-text">Sample Text</p>
                                        </div>
                                    </div>{/*/product_gallery_item*/}
                                </div>
                                <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-icon-rectangle u-opacity u-opacity-70 u-spacing-10 u-text-hover-grey-80 u-white u-carousel-control-1" href="#carousel-0c74" role="button" data-u-slide="prev">
                                    <span aria-hidden="true">
                                        <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
  c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
  c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></svg>
                                    </span>
                                    <span className="sr-only">
                                        <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
  c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
  c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></svg>
                                    </span>
                                </a>
                                <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-icon-rectangle u-opacity u-opacity-70 u-spacing-10 u-text-hover-grey-80 u-white u-carousel-control-2" href="#carousel-0c74" role="button" data-u-slide="next">
                                    <span aria-hidden="true">
                                        <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
  L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
  c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></svg>
                                    </span>
                                    <span className="sr-only">
                                        <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
  L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
  c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></svg>
                                    </span>
                                </a>
                                <ol className="u-carousel-thumbnails u-spacing-15 u-vertical-spacing u-carousel-thumbnails-1">{/*product_gallery_thumbnail*/}
                                    <li className="u-active u-carousel-thumbnail u-carousel-thumbnail-1" data-u-target="#carousel-0c74" data-u-slide-to={0}>
                                        <img alt="..." className="u-carousel-thumbnail-image u-image" src={imagePath} />
                                    </li>{/*/product_gallery_thumbnail*/}{/*product_gallery_thumbnail*/}
                                    <li className="u-carousel-thumbnail u-carousel-thumbnail-2" data-u-target="#carousel-0c74" data-u-slide-to={1}>
                                        <img alt="..." className="u-carousel-thumbnail-image u-image" src={imagePath} />
                                    </li>{/*/product_gallery_thumbnail*/}
                                </ol>
                            </div>{/*/product_gallery*/}{/*product_title*/}
                            <h2 className="u-product-control u-text u-text-1">
                                <a className="u-product-title-link" href=" ">{/*product_title_content*/}Product 1 Title{/*/product_title_content*/}</a>
                            </h2>{/*/product_title*/}{/*product_price*/}
                            <div className="u-product-control u-product-price u-product-price-1">
                                <div className="u-price-wrapper u-spacing-10">{/*product_old_price*/}
                                    <div className="u-hide-price u-old-price" style={{ textDecoration: 'line-through !important' }}>{/*product_old_price_content*/}$20.00{/*/product_old_price_content*/}</div>{/*/product_old_price*/}{/*product_regular_price*/}
                                    <div className="u-price u-text-palette-2-base" style={{ fontSize: '1.875rem', fontWeight: 700 }}>{/*product_regular_price_content*/}$17.00{/*/product_regular_price_content*/}</div>{/*/product_regular_price*/}
                                </div>
                            </div>{/*/product_price*/}{/*product_content*/}
                            <p className="u-product-control u-product-desc u-text u-text-2">{/*product_content_content*/} Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. {/*/product_content_content*/}</p>{/*/product_content*/}{/*product_button*/}{/*options_json*/}{/*{"clickType":"go-to-page","content":""}*/}{/*/options_json*/}
                            <a href=" " className="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-product-control u-text-black u-text-hover-white u-btn-1">{/*product_button_content*/}Add to Cart{/*/product_button_content*/}</a>{/*/product_button*/}
                        </div>
                    </div>{/*/product_item*/}{/*/product*/}
                </div>
            </section>
            <section className="u-clearfix u-palette-4-dark-3 u-section-2" id="sec-a3fe">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-align-center u-container-style u-layout-cell u-left-cell u-size-23 u-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                                        <div alt="" className="u-image u-image-circle u-image-contain u-image-1" src data-image-width={256} data-image-height={256} />
                                    </div>
                                </div>
                                <div className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-37 u-layout-cell-2">
                                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                                        <h2 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-1">Seller Info</h2>
                                        <ul className="u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-2">
                                            <li>Seller Name</li>
                                            <li>Email</li>
                                            <li>Phone Number</li>
                                            <li>Bio</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feedback />
            <Footer />
        </div>
    );
}

function Feedback() {
    return (
        <div>
            <section className="u-border-2 u-border-black u-clearfix u-section-3" id="sec-d53d">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-sheet-1">
                    <h2 className="u-align-center u-text u-text-default u-text-1"><span className="u-icon u-icon-1"><svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" style={{ width: '1em', height: '1em' }}><g><g><g><path d="M117.333,149.333H352c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667H117.333     c-5.896,0-10.667,4.771-10.667,10.667C106.667,144.563,111.438,149.333,117.333,149.333z" /><path d="M245.333,256h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128     c5.896,0,10.667-4.771,10.667-10.667C256,260.771,251.229,256,245.333,256z" /><path d="M471.167,64c-0.618,0-1.217,0.155-1.833,0.184V64c0-23.531-19.146-42.667-42.667-42.667h-384     C19.146,21.333,0,40.469,0,64v416c0,4.313,2.604,8.208,6.583,9.854c1.313,0.552,2.708,0.813,4.083,0.813     c2.771,0,5.5-1.083,7.542-3.125L121.75,384h304.917c23.521,0,42.667-19.135,42.667-42.667V164.411l30.708-30.703c0,0,0,0,0-0.01     c7.604-7.604,11.958-18.125,11.958-28.865C512,82.313,493.688,64,471.167,64z M448,341.333c0,11.76-9.563,21.333-21.333,21.333     H117.333c-2.833,0-5.542,1.125-7.542,3.125L21.333,454.25V64c0-11.76,9.563-21.333,21.333-21.333h384     C438.438,42.667,448,52.24,448,64v7.286c-2.025,1.392-3.962,2.923-5.708,4.672L326.232,192H117.333     c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h191.785l-10.243,51.24     c-0.708,3.5,0.396,7.115,2.917,9.635c2.021,2.021,4.75,3.125,7.542,3.125c0.688,0,1.396-0.073,2.083-0.208l53.313-10.667     c2.083-0.417,3.979-1.427,5.458-2.917L448,185.742V341.333z M357.396,246.177l-34.458,6.896l6.896-34.5l96.828-96.828     l27.587,27.587L357.396,246.177z M484.958,118.625l-15.625,15.625l-27.589-27.589l15.63-15.63     c3.625-3.615,8.646-5.698,13.792-5.698c10.75,0,19.5,8.75,19.5,19.5C490.667,109.958,488.583,114.99,484.958,118.625z" />
                    </g>
                    </g>
                    </g></svg> </span>&nbsp;Reviews / Feedback
                    </h2>
                </div>
            </section>
            <section id="carousel_f709" className="u-carousel u-slide u-block-b81c-1" data-u-ride="carousel" data-interval={5000}>
                <ol className="u-absolute-hcenter u-carousel-indicators u-block-b81c-2">
                    {/* Add Here the Caraousel  */}
                    <li data-u-target="#carousel_f709" data-u-slide-to={0} className="u-active u-grey-30" />
                    <li data-u-target="#carousel_f709" className="u-grey-30" data-u-slide-to={1} />
                    <li data-u-target="#carousel_f709" className="u-grey-30" data-u-slide-to={2} />
                </ol>
                <div className="u-carousel-inner" role="listbox">
                    <CaraouselItem isActive={true} text="xyz" />
                    <CaraouselItem text="1234"/>
                    <CaraouselItem text="super" />
                </div>
               <CaraouselItemIndicator />
               <CaraouselItemIndicator />
               <CaraouselItemIndicator />
            </section>
        </div>
    );
}

function CaraouselItem(props) {
    return (
        <div className={`${props.isActive ? "u-active" : ""} u-align-center u-carousel-item u-clearfix u-section-4-2`}>
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-16 u-layout-cell-1">
                                <div className="u-container-layout u-valign-top u-container-layout-1">
                                    <img alt="" className="u-align-left u-image u-image-default u-image-1" src="images/pexels-photo-3985382.jpeg" data-image-width={720} data-image-height={1080} />
                                </div>
                            </div>
                            <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-right-cell u-size-44 u-layout-cell-2">
                                <div className="u-container-layout u-valign-top u-container-layout-2">
                                    <p className="u-large-text u-text u-text-variant u-text-1">"{props.text} feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                                    <h5 className="u-text u-text-2">Nina Scavo</h5>
                                    <h6 className="u-text u-text-3">Financial Director</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CaraouselItemIndicator() {
    return (
        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-text-body-color u-block-b81c-4" href="#carousel_f709" role="button" data-u-slide="next">
        <span aria-hidden="true">
            <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
          c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" /></svg>
        </span>
        <span className="sr-only">Next</span>
    </a>
    );
}

export default BookInfo;