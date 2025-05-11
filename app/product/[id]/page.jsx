"use client"

import { useEffect, useState } from 'react';
import { products } from '@/app/data/productsdata';
import Image from 'next/image';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { use } from 'react';

export default function ProductDetail({ params }) {
    // Unwrap params with React.use()
    const resolvedParams = use(params);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Find the product by ID
        const productId = parseInt(resolvedParams.id);
        const foundProduct = products.find(p => p.id === productId);

        if (foundProduct) {
            setProduct(foundProduct);
        }
        setLoading(false);
    }, [resolvedParams.id]);

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin h-10 w-10 border-4 border-[#5eb4cb] border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
                <Link href="/">
                    <Button className="bg-[#1a2b47] hover:bg-[#5eb4cb]">
                        Return to Home
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Back Button */}
            <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-[#1a2b47] hover:text-[#5eb4cb] transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="bg-gray-100 rounded-xl overflow-hidden relative h-[300px] sm:h-[400px] md:h-[500px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    {product.tag && (
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white ${product.tag === 'New' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {product.tag}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1a2b47] mb-2">{product.name}</h1>

                    <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">(5.0 - 24 Reviews)</span>
                    </div>

                    <div className="flex items-center mb-6">
                        <span className="text-2xl font-bold text-[#1a2b47] mr-3">{product.price}</span>
                        {product.discountPrice && (
                            <span className="text-lg text-gray-400 line-through">{product.discountPrice}</span>
                        )}
                    </div>

                    <div className="border-t border-b py-6 mb-6">
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                    </div>

                    <div className="flex items-center space-x-4 mb-8">
                        <div className="flex items-center border rounded-md">
                            <button
                                onClick={decrementQuantity}
                                className="px-3 py-2 border-r hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="px-4 py-2">{quantity}</span>
                            <button
                                onClick={incrementQuantity}
                                className="px-3 py-2 border-l hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>

                        <Button className="flex-1 bg-[#1a2b47] hover:bg-[#5eb4cb] transition-colors py-6">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>

                    <div className="text-sm text-gray-500">
                        <p className="mb-1">Categories: Electronics, Gadgets</p>
                        <p>SKU: PD-{product.id.toString().padStart(3, '0')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 