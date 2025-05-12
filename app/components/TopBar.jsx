import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, MapPin, Clock, PhoneCall } from 'lucide-react'

const TopBar = () => {
    return (
        <div className="bg-[#1e293b] border-b border-gray-800 text-gray-300 text-sm">
            <div className="container mx-auto px-4 py-2">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Contact Info */}
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
                        <div className="flex items-center group">
                            <Mail size={14} className="text-[#64b5f6] mr-2" />
                            <Link href="mailto:info@hamysllc.com" className="text-gray-300 hover:text-white transition-colors">
                                SALES@HAMYSLLCWHOLESALE.COM
                            </Link>
                        </div>

                        <div className="flex items-center group">
                            <PhoneCall size={14} className="text-[#64b5f6] mr-2" />
                            <Link href="tel:+817-986-9786" className="text-gray-300 hover:text-white transition-colors">
                                929-756-9365
                            </Link>
                        </div>

                        <div className="flex items-center group">
                            <MapPin size={14} className="text-[#64b5f6] mr-2" />
                            <span className="text-gray-400">
                                Bronx,New York
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Social Icons */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center mr-4">
                            <Clock size={14} className="text-[#64b5f6] mr-2" />
                            <span className="text-gray-400">
                                Mon to Sat: 9am - 5pm
                            </span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Link href="#" className="text-gray-400 hover:text-[#64b5f6] transition-colors">
                                <Facebook size={16} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#64b5f6] transition-colors">
                                <Instagram size={16} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#64b5f6] transition-colors">
                                <Twitter size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar