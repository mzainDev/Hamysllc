import React from "react";
import Image from "next/image";

const CompanyLogos = () => {
    const logos = [
        { id: 1, src: "/Logo2.png", alt: "Zapier" },
        { id: 2, src: "/Logo3.png", alt: "Pipedrive" },
        { id: 3, src: "/Logo4.png", alt: "CIB Bank" },
        { id: 4, src: "/Logo5.png", alt: "7" },
        { id: 5, src: "/Logo6.png", alt: "Burnt Toast" },
        { id: 6, src: "/Logo7.png", alt: "PandaDoc" },
        { id: 7, src: "/Logo8.png", alt: "Moz" },
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
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 place-items-center">
                        {logos.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex justify-center items-center p-5 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                            >
                                <Image
                                    src={logo.src || "/placeholder.png"}
                                    alt={logo.alt}
                                    width={100}
                                    height={100}
                                    className="h-14 md:h-16 w-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
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