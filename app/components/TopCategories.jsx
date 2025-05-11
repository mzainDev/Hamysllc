import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TopCategories = () => {
    const categories = [
        {
            id: 1,
            image: "/ti1.jpg",
            title: "Customized",
            productCount: 3584,
        },
        {
            id: 2,
            image: "/ti2.jpg",
            title: "Product",
            productCount: 157,
        },
        {
            id: 3,
            image: "/ti3.jpg",
            title: "Product",
            productCount: 154,
        },
    ];

    return (
        <div className="bg-[#0f172a] py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white text-center">
                    Top Categories
                    <div className="w-20 h-1 bg-[#64b5f6] mx-auto mt-2 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-200"
                        >
                            <div className="relative">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    className="h-56 w-full object-cover"
                                    width={500}
                                    height={300}
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0f172a] to-transparent opacity-50"></div>
                                <div className="absolute top-4 right-4 bg-[#64b5f6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Popular
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2 text-[#0f172a]">
                                    {category.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600 font-medium">
                                        {category.productCount} Products
                                    </p>
                                    <button className="text-[#3b82f6] hover:text-[#1e3a8a] font-semibold transition-colors">
                                        View All →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCategories;