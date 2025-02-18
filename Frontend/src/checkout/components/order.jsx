import React from "react";
import OrderNav from "./orderNav";
import Contact from "./contact";
import Shipping from "./shipping";
import Payment from "./payment";
// import Loading from "./loading";
import CheckoutCart from "./checkoutCart";


const Order = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <div className="w-full px-28 max-lg:px-14 max-sm:px-4">
      <OrderNav activeStep={activeStep} setActiveStep={setActiveStep} />
   
        <div className="flex justify-between items-start w-full max-lg:flex-col">
        <section className="basis-[39%] max-lg:w-full ">
        {activeStep === 1 && <Contact setActiveStep={setActiveStep} />}
        {activeStep === 2 && <Shipping setActiveStep={setActiveStep} />}
        {activeStep === 3 && <Payment setActiveStep={setActiveStep} />}
      </section>
      
      <CheckoutCart />

      
     
    </div>
    </div>
  
  );
};

export default Order;
