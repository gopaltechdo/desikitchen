import React from "react";
import Image from "next/image";
import SectionHeaders from "../SectionHeaders/SectionHeaders";
const CenterSection = () => {
  return (
    <>
      <div className="flex">
        {/* <div class="border-double border-8 border-orange-400 w-200"> */}
        <Image
          class="border-double border-8 border-orange-400"
          src={"/urban.jpg"}
          width={400}
          height={1000}
          alt="urban kitchen"
        />
        <div class="border-double border-8 border-orange-400 mx-4 ">
          <section className="text-center my-16">
            <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />

            <div className="max-w-2xl mx-auto mt-2 text-grey-600 flex flex-col gap-4">
              <p>
                Our restaurant's signature dish is the beloved Desi Bihari
                cuisine, meticulously prepared in traditional clay pots known as
                "handi." Infused with the rich cultural heritage of Bihari
                cuisine, our Bihari Handi recipe boasts an irresistible blend of
                aromatic spices and tender meat, creating a culinary masterpiece
                that tantalizes the taste buds. Slow-cooked to perfection, each
                bite offers a symphony of flavors that transport diners to the
                bustling streets and vibrant markets of Bihar. Our chefs,
                steeped in the artistry of authentic Bihari cooking,
                meticulously craft this dish with passion and expertise,
                ensuring that every element harmonizes flawlessly. From the
                earthy aroma of clay pot cooking to the tender texture of the
                meat, our Desi Bihari Handi embodies the essence of traditional
                cooking techniques passed down through generations. With its
                distinctive flavors and rustic charm, this dish promises a
                culinary journey that celebrates the rich culinary heritage of
                Bihar.
              </p>
            </div>
          </section>
          <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-4 underline ">
          <a className="text-4xl mt-8" href="tel:7999823547">
            7999823547
          </a>
        </div>
      </section>
        </div>
      </div>
    </>
  );
};

export default CenterSection;
