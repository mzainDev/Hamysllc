import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
    return (
        <section className="bg-[#172554] text-white py-16 px-4 sm:px-8 lg:px-40">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Get In Touch With Us
                </h2>
                <p className="text-center text-gray-300 mb-12">
                    For more information about our product & services, please feel free to
                    drop us an email.
                </p>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Details */}
                    <div className="flex-1 space-y-8 via-[#1e3a8a] p-8 rounded-lg shadow-lg">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-[#93c5fd]" />
                            <div>
                                <h4 className="font-semibold text-white">Address</h4>
                                <p className="text-gray-300">
                                    5101 Bellefontaine Dr Arlington TX 76017
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-[#93c5fd]" />
                            <div>
                                <h4 className="font-semibold text-white">Phone</h4>
                                <p className="text-gray-300">
                                    Mobile: 817-986-9786 <br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-[#93c5fd]" />
                            <div>
                                <h4 className="font-semibold text-white">Working Time</h4>
                                <p className="text-gray-300">
                                    Monday-Friday: 9:00 - 22:00 <br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-[#172554] font-bold text-xl mb-6">Send us a message</h3>
                        <div className="space-y-4">
                            <Input placeholder="Your name" className="w-full border-gray-300 focus:border-[#93c5fd] focus:ring-[#93c5fd]" />
                            <Input placeholder="Email address" className="w-full border-gray-300 focus:border-[#93c5fd] focus:ring-[#93c5fd]" />
                            <Input placeholder="Subject (optional)" className="w-full border-gray-300 focus:border-[#93c5fd] focus:ring-[#93c5fd]" />
                            <Textarea placeholder="Message" className="w-full min-h-[120px] border-gray-300 focus:border-[#93c5fd] focus:ring-[#93c5fd]" />
                            <Button className="w-full bg-[#1e3a8a] hover:bg-[#2563eb] text-white">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;