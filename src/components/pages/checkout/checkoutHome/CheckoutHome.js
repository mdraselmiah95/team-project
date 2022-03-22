import React from "react";
import SectionFour from "../../courses/sectionFour/SectionFour";
import SectionEight from "../../Home/sectionEight/SectionEight";
import CheckoutBanner from "../checkoutBanner/CheckoutBanner";
import CheckoutBody from "../checkoutBody/CheckoutBody";

const CheckoutHome = () => {
  return (
    <>
      <CheckoutBanner />
      <CheckoutBody />
      <SectionFour />
      <SectionEight />
    </>
  );
};

export default CheckoutHome;
