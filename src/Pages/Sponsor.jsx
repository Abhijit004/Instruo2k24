import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import { footer } from "framer-motion/client";

const Sponsor = () => {
  const sponsors = [
    {
      name: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "Microsoft",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      name: "Apple",
      logo: "https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
    },
    {
      name: "Tesla",
      logo: "https://www.tesla.com/themes/custom/tesla_frontend/assets/logos/logo-energy-red.svg",
    },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();
    carousel.addEventListener("mouseenter", stopScroll);
    carousel.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      carousel.removeEventListener("mouseenter", stopScroll);
      carousel.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-black min-h-screen py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-200 via-blue-300 to-cyan-200 text-transparent bg-clip-text">
          Our Sponsors
        </h1>
        <p className="text-xl mb-12 text-center max-w-2xl">
          We&apos;re proud to be supported by these industry-leading companies
        </p>
        <div
          ref={carouselRef}
          className="w-full overflow-hidden whitespace-nowrap"
          style={{ maxWidth: "1000px" }}
        >
          <div className="inline-flex animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex items-center justify-center h-32 w-48 bg-white rounded-lg p-4 mx-4"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150?text=Logo+Not+Found";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in sponsoring?
          </h2>
          <p className="mb-6">
            Join these amazing companies in supporting our event!
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsor;
