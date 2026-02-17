import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <TbTruckDelivery size={28} />,
      title: "Fast Delivery",
      description:
        "Get your orders delivered to your doorstep quickly and efficiently.",
    },
    {
      icon: <BiSupport size={28} />,
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to assist you.",
    },
    {
      icon: <MdOutlineSecurity size={28} />,
      title: "Secure Payment",
      description:
        "Experience safe and secure transactions with our encrypted payment systems.",
    },
    {
      icon: <LuRefreshCcw size={28} />,
      title: "Easy Returns",
      description: "Not satisfied? Return your products easily within 30 days.",
    },
  ];

  return (
    <section className="bg-base-200 py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-500 text-lg">
            We provide the best shopping experience with top-notch services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start pt-12"
            >
              {/* Floating Icon Box */}
              <div className="absolute -top-6 left-8 bg-[#f3f4ff] text-[#5e50ee] p-4 rounded-xl shadow-sm border border-white">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1a202c] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;