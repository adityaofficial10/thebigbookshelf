import { React, useEffect, useState } from "react";

import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import ProductTile from "./ProductTile";

import "../css/BuyerDashboard.scoped.css";
import { Link } from "react-router-dom";
import { allItems } from "../helpers/api";

function BuyerDashboard() {

  const [itemsList, setItemsList] = useState([]);

  async function getAllItems() {
    var res = await allItems();
    if (res.status === 200) {
      setItemsList(res.data);
    } else {
      alert(`Unknown Error Occurred: Please Try Again Later`);
      setItemsList([]);
    }
  }

  useEffect(() => getAllItems(), []);

  return (
    <div>
      <DashboardHeader />
      <DashboardLanding />
      <section className="u-align-center u-clearfix u-lightbox u-section-2" id="browse-books">
        <div className="u-align-left u-clearfix u-sheet u-sheet-1">{/*products*/}{/*products_options_json*/}{/*{"type":"Recent","source":"","tags":"","count":""}*/}{/*/products_options_json*/}
          <div className="u-expanded-width u-pagination-center u-products u-products-1">
            <div className="u-list-control" />
            <div className="u-repeater u-repeater-1">
              {itemsList.length > 0 ? itemsList.map((ele) => (<ProductTile/>)) : <h5>Currently Our Bookshelf is Empty ):<br/>Please Come Back Later</h5>}
              {/* <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile /> */}
            </div>
            <div className="u-list-control">{/*products_pagination*/}{/*products_pagination_options_json*/}{/*{"ul":"style=\"\" class=\"responsive-style1 u-pagination u-spacing-0 u-unstyled u-pagination-1\"","li":"style=\"\" class=\"u-nav-item u-pagination-item\"","link":"style=\"padding: 24px 28px;\" class=\"u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2\""}*/}{/*/products_pagination_options_json*/}
              <ul className="responsive-style1 u-pagination u-spacing-0 u-unstyled u-pagination-1">
                <li className="disabled prev u-nav-item u-pagination-item">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>〈</a>
                </li>
                <li className="active u-nav-item u-pagination-item">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>1</a>
                </li>
                <li className="u-nav-item u-pagination-item">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>2</a>
                </li>
                <li className="u-nav-item u-pagination-item">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>3</a>
                </li>
                <li className="u-nav-item u-pagination-item u-pagination-separator">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>...</a>
                </li>
                <li className="u-nav-item u-pagination-item">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>8</a>
                </li>
                <li className="next u-nav-item u-pagination-item">
                  <a className="u-button-style u-hover-palette-4-light-1 u-nav-link u-palette-4-dark-2" href=" " style={{ padding: '24px 28px' }}>〉</a>
                </li>
              </ul>{/*/products_pagination*/}
            </div>
          </div>{/*/products*/}
        </div>
      </section>
      <Footer />
      <span
        style={{
          height: '64px',
          width: '64px',
          marginLeft: '0px',
          marginRight: 'auto',
          marginTop: '0px',
          backgroundImage: 'none',
          right: '20px',
          bottom: '20px'
        }}
        className="u-back-to-top u-border-2 u-border-palette-5-dark-3 u-icon u-icon-circle u-opacity u-opacity-85 u-palette-5-dark-3 u-spacing-0 u-text-palette-4-light-2"
        data-href="#">
        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 337.085 337.086" style={{}}>
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-d7c2" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 337.085 337.086" x="0px" y="0px" id="svg-d7c2" style={{ enableBackground: 'new 0 0 337.085 337.086' }} data-color="rgb(71, 138, 201)">
          <g><path d="M168.54,0C75.619,0,0.012,75.609,0.012,168.543c0,92.93,75.606,168.543,168.528,168.543   c92.933,0,168.534-75.613,168.534-168.543C337.074,75.609,261.473,0,168.54,0z M271.405,224.327   c-2.407,2.402-5.561,3.615-8.713,3.615c-3.158,0-6.311-1.213-8.719-3.615L168.54,138.9l-85.424,85.427   c-4.816,4.815-12.631,4.815-17.447,0c-4.819-4.815-4.819-12.622,0-17.438l94.152-94.141c4.822-4.815,12.613-4.815,17.426,0   l94.152,94.141C276.221,211.705,276.221,219.512,271.405,224.327z" />
          </g></svg>
      </span>
    </div>
  );
}

function DashboardLanding() {
  return (
    <section className="u-align-center u-clearfix u-image u-shading u-section-1" id="carousel_e218" data-image-width={1200} data-image-height={675}>
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-align-center u-container-style u-group u-group-1">
          <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl">
            <h2 className="u-custom-font u-font-playfair-display u-text u-text-default u-text-1">Big ​Bookshelf</h2>
            <div className="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1" />
            <p className="u-text u-text-2">You can browse through our Big Bookshelf to select your best book buddy<br />OR<br />If you have something that others might need, we have an option to list your books on our site!!
            </p>
          </div>
        </div>
        <div className="u-align-center-xs u-container-style u-expanded-width-xs u-group u-group-2">
          <div className="u-container-layout">
            <Link to="/dashboard#browse-books" className="u-active-palette-4-light-2 u-border-1 u-border-palette-4-dark-2 u-btn u-btn-round u-button-style u-grey-5 u-hover-palette-4-dark-2 u-radius-50 u-text-active-white u-text-body-color u-text-hover-white u-btn-1">Browse Collection&nbsp;&nbsp;<span className="u-icon u-icon-1"><svg className="u-svg-content" viewBox="0 0 491.996 491.996" x="0px" y="0px" style={{ width: '1em', height: '1em' }}><g><g><path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848    L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128    c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084    c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224    C491.996,136.902,489.204,130.046,484.132,124.986z" />
            </g>
            </g></svg> </span>
            </Link>
            <Link to="/sell-book" className="u-active-palette-4-light-2 u-border-1 u-border-active-palette-4-dark-3 u-border-hover-palette-4-dark-3 u-border-palette-4-dark-3 u-btn u-btn-round u-button-style u-hover-palette-4-dark-3 u-palette-4-base u-radius-50 u-btn-2"> Sell A Book<br />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuyerDashboard;