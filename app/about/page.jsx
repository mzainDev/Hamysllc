import { Button } from "@/components/ui/button";
import { Package, PenTool, DollarSign, RefreshCcw } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-12 bg-[#052046] text-white px-4 sm:px-6 lg:px-40">
      <div className="container mx-auto space-y-12">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-[#2a4365] p-6 sm:p-10 lg:p-20 rounded-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              About Us - Products
            </h2>
            <p className="mb-6 text-sm sm:text-base">
              Design your dream product with our easy-to-use customization
              tools. Choose colors, add text, upload images, and create
              something truly unique—made just for you!
            </p>
            <Button className="bg-[#4299e1] text-white hover:bg-[#3182ce] flex items-center space-x-2">
              View collection
            </Button>
            <div className="mt-4">
              <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-wide uppercase">
                HAMYSLLC
              </h1>
            </div>
          </div>
          <div>
            <Image
              src="/image/24.jpg"
              alt="Tomoto Souvenir"
              className="rounded-md w-full"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Package className="h-8 w-8 text-[#4299e1]" />,
                title: "Next day as standard",
                description:
                  "Order before 3pm and get your order the next day as standard.",
              },
              {
                icon: <PenTool className="h-8 w-8 text-[#4299e1]" />,
                title: "Made by true artisans",
                description:
                  "Handmade crafted goods made with real passion and craftsmanship.",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-[#4299e1]" />,
                title: "Unbeatable prices",
                description:
                  "For our materials and quality you won't find better prices anywhere.",
              },
              {
                icon: <RefreshCcw className="h-8 w-8 text-[#4299e1]" />,
                title: "Recycled packaging",
                description:
                  "We use 100% recycled to ensure our footprint is more manageable.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white text-[#081b36] rounded-md shadow-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Our Popular Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/Large.png",
                title: "The Popler suede sofa",
                price: "$99.00",
              },
              {
                image: "/Parent.png",
                title: "The Dandy chair",
                price: "$99.00",
              },
              {
                image: "/Parent2.png",
                title: "The Dandy chair",
                price: "$99.00",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white text-[#1a365d] rounded-md shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="rounded-md w-full h-auto object-cover mb-4"
                  width={300}
                  height={200}
                />
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {product.title}
                </h3>
                <p className="text-[#4299e1] font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;