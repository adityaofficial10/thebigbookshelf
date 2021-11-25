import { React, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

import "../css/SellBook.scoped.css";
import { addBook } from "../helpers/api";

function SellBook() {

  const [bname, setBname] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("0.00");
  // Get Seller ID 
  const [seller, setSeller] = useState("");
  const [used, setUsed] = useState(false);

  async function handleSubmit() {
    var res = await addBook({
      name: bname,
      description: desc,
      quantity: quantity,
      price: price,
      // seller: sellerId,
      used: used,
    });

    if (res.status === 200) {
      alert(`Book Added Successfully`);
    } else {
      alert(`Unknown Error Occurred: Please Try Again Later`);
    }
  }

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
                    <input onChange={(e) => setBname(e.target.value)} value={bname} type="text" placeholder="Name" id="name-daa0" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required />
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
                    <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} placeholder="Description" rows={3} cols={50} id="message-daa0" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" defaultValue={""} />
                  </div>
                  
                  <div className="u-form-group u-form-radiobutton u-form-group-7">
                  <label htmlFor="radio-grp" className="u-label u-text-grey-40 u-label-4">Condition of the Book<br/></label>
                  <br />
                    <div onChange={(e) => {(e.target.value === "new") ? setUsed(false) : setUsed(true)}} className="u-form-radio-button-wrapper"  id="radio-grp">
                      <input value={"new"} type="radio" name="radiobutton" defaultValue="Brand New" required="required" checked/>
                      <label className="u-label u-text-grey-40 u-label-7" htmlFor="radiobutton">Brand New</label>
                      <br />
                      <input value={"old"} type="radio" name="radiobutton" defaultValue="Used (1+ yr)" required="required" />
                      <label className="u-label u-text-grey-40 u-label-8" htmlFor="radiobutton">Used (1+ yr)</label>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="u-form-group u-form-group-8">
                    <label htmlFor="text-2c6f" className="u-form-control-hidden u-label u-text-grey-40 u-label-12" >Quantity</label>
                    <input value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="text" placeholder="Quantity (Default is 1)" id="text-2c6f" name="text-2" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" />
                  </div>
                  <div className="u-form-group u-form-phone u-form-group-9">
                    <label htmlFor="phone-ccec" className="u-label u-text-grey-40 u-label-13">Price (for each book)</label>
                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} pattern="[0-9]+.[0-9]" placeholder="Price" id="phone-ccec" name="price" className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required />
                  </div>
                  <div className="u-align-left u-form-group u-form-submit">
                    <button onClick={handleSubmit} className="u-btn u-btn-submit u-button-style">Submit</button>
                    {/* <input type="submit" defaultValue="submit" className="u-form-control-hidden" /> */}
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