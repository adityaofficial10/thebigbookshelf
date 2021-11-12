import React from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

import "../css/SellBook.scoped.css";

function SellBook() {
  return (
    <div>
      <DashboardHeader />
      <section className="u-align-center u-clearfix u-palette-4-dark-2 u-section-1" id="sec-d81d">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h1 className="u-text u-text-default u-text-1">Seller Dashboard</h1>
          <div className="u-border-3 u-border-palette-3-base u-line u-line-horizontal u-line-1" />
          <p className="u-text u-text-2"> The Seller Dashboard is a place where one can sell his/her own book.<br />Please fill in the below form correctly to continue.
          </p>
        </div>
      </section>
      <section className="u-clearfix u-section-2" id="sec-7721">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-align-center u-border-2 u-border-grey-75 u-container-style u-expanded-width-xs u-group u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <h1 className="u-text u-text-default u-text-1">Fill in the book details</h1>
              <div className="u-form u-form-1">
                <form action="#" method="POST" className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{ padding: '15px' }} source="custom" name="form">
                  <div className="u-form-group u-form-name">
                    <label htmlFor="name-daa0" className="u-form-control-hidden u-label u-text-grey-40 u-label-1">Name</label>
                    <input type="text" placeholder="Name" id="name-daa0" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required />
                  </div>
                  <div className="u-form-group u-form-group-2">
                    <label htmlFor="text-6cad" className="u-form-control-hidden u-label u-text-grey-40 u-label-2" />
                    <input type="text" placeholder="ISBN" id="text-6cad" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="required" />
                  </div>
                  <div className="u-form-group u-form-group-3">
                    <label htmlFor="text-08c0" className="u-form-control-hidden u-label u-text-grey-40 u-label-3" />
                    <input type="text" placeholder="Author(s)" id="text-08c0" name="text-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="required" />
                  </div>
                  <div className="u-form-date u-form-group u-form-group-4">
                    <label htmlFor="date-96ba" className="u-label u-text-grey-40 u-label-4">Published Date (Year is IMP)</label>
                    <input type="date" placeholder="YYYY" id="date-96ba" name="year" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required />
                  </div>
                  <div className="u-form-group u-form-textarea u-form-group-5">
                    <label htmlFor="textarea-5885" className="u-form-control-hidden u-label u-text-grey-40 u-label-5" />
                    <textarea rows={1} cols={50} id="textarea-5885" name="textarea" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required placeholder="Image URL" defaultValue={""} />
                  </div>
                  <div className="u-form-group u-form-message">
                    <label htmlFor="message-daa0" className="u-form-control-hidden u-label u-text-grey-40 u-label-6">Address</label>
                    <textarea placeholder="Description" rows={3} cols={50} id="message-daa0" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" defaultValue={""} />
                  </div>
                  
                  <div className="u-form-group u-form-radiobutton u-form-group-7">
                  <label htmlFor="radio-grp" className="u-label u-text-grey-40 u-label-4">Condition of the Book<br/></label>
                  <br />
                    <div className="u-form-radio-button-wrapper"  id="radio-grp">
                      <input type="radio" name="radiobutton" defaultValue="Brand New" required="required" />
                      <label className="u-label u-text-grey-40 u-label-7" htmlFor="radiobutton">Brand New</label>
                      <br />
                      <input type="radio" name="radiobutton" defaultValue="Used (1+ yr)" required="required" />
                      <label className="u-label u-text-grey-40 u-label-8" htmlFor="radiobutton">Used (1+ yr)</label>
                      <br />
                      <input type="radio" name="radiobutton" defaultValue="Used (2+ yr)" required="required" />
                      <label className="u-label u-text-grey-40 u-label-9" htmlFor="radiobutton">Used (2+ yr)</label>
                      <br />
                      <input type="radio" name="radiobutton" defaultValue="Used (5+ yr)" required="required" />
                      <label className="u-label u-text-grey-40 u-label-10" htmlFor="radiobutton">Used (5+ yr)</label>
                      <br />
                      <input type="radio" name="radiobutton" defaultValue="Rare Collection" required="required" />
                      <label className="u-label u-text-grey-40 u-label-11" htmlFor="radiobutton">Rare Collection</label>
                      <br />
                    </div>
                  </div>
                  <div className="u-form-group u-form-group-8">
                    <label htmlFor="text-2c6f" className="u-form-control-hidden u-label u-text-grey-40 u-label-12" />
                    <input type="text" placeholder="Quantity (Default is 1)" id="text-2c6f" name="text-2" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" />
                  </div>
                  <div className="u-form-group u-form-phone u-form-group-9">
                    <label htmlFor="phone-ccec" className="u-label u-text-grey-40 u-label-13">Contact Phone Number (Will be visible to Public)</label>
                    <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Enter your phone (e.g. +14155552675)" id="phone-ccec" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit">
                    <a href=" " className="u-btn u-btn-submit u-button-style">Submit</a>
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
      </section>
      <Footer />
    </div>
  );
}
export default SellBook;