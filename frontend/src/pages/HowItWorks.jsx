import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <FaGavel />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <FaEnvelope />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
    },
    {
      icon: <FaDollarSign />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <FaRedo />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col py-20 px-5 lg:px-32">
      <h1 className="text-[#d6482b] text-3xl font-extrabold text-center mb-12 md:text-5xl">
        Discover How PrimeBid Operates
      </h1>
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="bg-[#d6482b] text-white p-4 rounded-full w-fit mb-4 flex items-center justify-center">
              <span className="text-3xl">{step.icon}</span>
            </div>
            <h3 className="text-[#D6482B] text-2xl font-semibold mb-2">
              {step.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;