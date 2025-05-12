import React from "react";
import Image from "next/image";

const CompanyLogos = () => {
    const logos = [
        { id: 1, src: "/walmart1.png", alt: "Walmart" },
        { id: 2, src: "/ebay1.png", alt: "ebay" },
        { id: 3, src: "/amazon1.png", alt: "Amazon" },
        { id: 4, src: "/shopify1.png", alt: "Shopify" },
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-3">
                        Our Trusted Partners
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Working with industry leaders to deliver exceptional experiences
                    </p>
                    <div className="w-24 h-1.5 bg-[#64b5f6] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
                        {logos.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex justify-center items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={150}
                                    height={80}
                                    className="h-auto w-[120px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;