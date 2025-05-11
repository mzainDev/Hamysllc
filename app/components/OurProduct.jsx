"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { products } from "@/app/data/productsdata";
import Image from "next/image";

export default function OurProduct() {
    return (
        <section className="bg-[#1a2b47] py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-white">
                    Our Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] flex flex-col"
                        >
                            {/* Image with overlay on hover */}
                            <div className="relative w-full h-44 sm:h-48 md:h-52 lg:h-56 group">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    priority={p.id <= 4}
                                />
                                <div className="absolute inset-0 bg-[#1a2b47]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link href={`/product/${p.id}`}>
                                        <Button className="bg-white text-[#1a2b47] hover:bg-[#5eb4cb] hover:text-white border-none transition-colors text-xs sm:text-sm">
                                            Quick View
                                        </Button>
                                    </Link>
                                </div>
                            </div>



                            {/* Details */}
                            <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#1a2b47] hover:text-[#5eb4cb] transition-colors truncate">
                                        {p.name}
                                    </h3>
                                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 md:mb-4">
                                        <span className="text-lg sm:text-xl font-bold text-[#1a2b47]">
                                            {p.price}
                                        </span>
                                        {p.discountPrice && (
                                            <span className="text-sm sm:text-base text-gray-400 line-through">
                                                {p.discountPrice}
                                            </span>
                                        )}
                                    </div>

                                    {p.description && (
                                        <p className="text-xs sm:text-sm text-gray-500 mb-3">
                                            {p.description}
                                        </p>
                                    )}
                                </div>

                                {/* Add to Cart */}
                                <div className="flex justify-between items-center">
                                    <div className="hidden sm:flex items-center">
                                        <div className="flex space-x-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex sm:hidden text-xs font-medium text-yellow-500">
                                        5.0 ★
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 border-[#5eb4cb] text-[#5eb4cb] hover:bg-[#5eb4cb] hover:text-white transition-colors"
                                    >
                                        <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}