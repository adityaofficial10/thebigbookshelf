import React from "react";
import CompareDealsItem from "./CompareDealsItem";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

import "../css/CompareDeals.scoped.css";

function CompareDeals() {
    return (
        <div>
            <DashboardHeader />
            <section className="u-align-center u-clearfix u-palette-5-dark-3 u-section-1" id="carousel_4ae0">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <h1 className="u-custom-font u-font-raleway u-text u-text-1">Deals Comparision</h1>
                    <div className="u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                            <CompareDealsItem />
                            <CompareDealsItem />
                            <CompareDealsItem />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default CompareDeals;