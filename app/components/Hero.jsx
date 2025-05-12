import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            < section className="relative bg-[#0f172a] text-white py-16 md:py-24 overflow-hidden" >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] opacity-95"></div>
                    <svg
                        className="absolute left-0 bottom-0 h-full w-full text-[#3b82f6] opacity-5"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="0,0 100,0 0,100" />
                    </svg>
                    <svg
                        className="absolute right-0 top-0 h-full w-full text-[#3b82f6] opacity-5"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="100,100 100,0 0,100" />
                    </svg>
                </div>

                <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Best Deals <span className="text-[#64b5f6] relative inline-block">
                                Online
                                <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#64b5f6] opacity-40 rounded"></span>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-200 leading-relaxed">
                            Discover top-quality products at unbeatable prices at HAMYSLLC. Enjoy secure shopping, fast shipping, and excellent customer service. Start saving today!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="./product"
                                className="px-6 py-3 bg-white text-[#0f172a] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Products
                            </a>
                            <a
                                href="./product"
                                className="px-6 py-3 bg-[#64b5f6] text-white font-bold rounded-lg hover:bg-[#3b82f6] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-80 h-80">
                            <div className="relative w-72 h-72 bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/ti3.jpg"
                                    alt="Featured product"
                                    width={288}
                                    height={288}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute top-3 right-3 bg-[#64b5f6] text-white px-3 py-1 rounded-full text-sm font-bold">
                                    30% OFF
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center">
                        <div className="bg-[#1e3a8a] bg-opacity-40 p-4 rounded-lg backdrop-blur-sm shadow-lg border border-gray-700">
                            <div className="text-2xl font-bold">4.9/5</div>
                            <div className="text-gray-200">Customer Rating</div>
                        </div>
                        <div className="bg-[#1e3a8a] bg-opacity-40 p-4 rounded-lg backdrop-blur-sm shadow-lg border border-gray-700">
                            <div className="text-2xl font-bold">24/7</div>
                            <div className="text-gray-200">Customer Support</div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero