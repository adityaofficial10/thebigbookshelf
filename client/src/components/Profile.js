import React from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

import "../css/Profile.scoped.css";

function Profile() {
    return (
        <div>
            <DashboardHeader />
            <section className="u-align-center u-clearfix u-white u-section-1" id="sec-c7df">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h3>Hello There !!</h3>
                    <div className="u-align-left u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-palette-4-dark-1 u-radius-20 u-shape-round u-group-1">
                        <div className="u-container-layout u-valign-middle-xl u-container-layout-1">
                            <h6 className="u-custom-font u-font-open-sans u-text u-text-2">name</h6>
                            <p className="u-custom-font u-text u-text-3">Fred Morrison</p>
                            <h6 className="u-custom-font u-font-open-sans u-text u-text-default u-text-4">Email</h6>
                            <a href=" " className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-2-base u-btn u-button-style u-none u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base u-btn-1">designer@example.com</a>
                            <h6 className="u-custom-font u-font-open-sans u-text u-text-5">Phone</h6>
                            <a href="tel:+987987654321" className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-2-base u-btn u-button-style u-none u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base u-btn-2">(+987) 987 654 321</a>
                            <h6 className="u-custom-font u-font-open-sans u-text u-text-default u-text-6">Interests</h6>
                            <p className="u-custom-font u-text u-text-7">Games, Books, Movies</p>
                        </div>
                    </div>
                    <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-contain u-image-round u-radius-20 u-image-1" alt="" data-image-width={864} data-image-height={1080} src="images/pexels-photo-7537848.jpeg" />
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default Profile;