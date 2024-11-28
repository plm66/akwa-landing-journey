import { Globe, Mountain, Users, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const images = [
    {
      src: "/lovable-uploads/e3599fe2-d54a-4627-98d2-676384178414.png",
      alt: "Mining Equipment",
      caption: "State-of-the-art Mining Equipment"
    },
    {
      src: "/lovable-uploads/f010f17b-b1e4-4c84-a60d-8f33c1c93ef9.png",
      alt: "Rock Cycle Diagram",
      caption: "Understanding the Rock Cycle"
    },
    {
      src: "/lovable-uploads/24d6ff50-02ec-4278-b0fb-e5a2d3db94d2.png",
      alt: "Akwa Mining Worker",
      caption: "Our Dedicated Team"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-earth to-forest text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Akwa Mining
          </h1>
          <p className="text-2xl md:text-3xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From The Land To People
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-earth text-center mb-16">
            Our Operations
          </h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white rounded-b-lg">
                      <p className="text-center text-lg">{image.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-earth text-center mb-16">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                At Akwa Mining, we believe in responsible resource extraction that benefits both the land and its people. Operating in the Democratic Republic of Congo, we combine modern mining practices with sustainable development to create lasting value for our communities.
              </p>
            </div>
            <div className="bg-earth/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-earth mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mountain className="text-forest h-6 w-6" />
                  <span>Sustainable Mining Practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="text-forest h-6 w-6" />
                  <span>Community Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="text-forest h-6 w-6" />
                  <span>Global Standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <Mountain className="h-12 w-12 mx-auto mb-4 text-earth" />
              <h3 className="text-xl font-bold mb-3">Sustainable Mining</h3>
              <p className="text-gray-600">
                Using advanced techniques to minimize environmental impact
              </p>
            </div>
            <div className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-earth" />
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-600">
                Creating opportunities and supporting local development
              </p>
            </div>
            <div className="p-6 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-earth" />
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Contributing to the global resource supply chain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-earth text-white">
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl">Let's discuss how we can work together</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="h-6 w-6" />
              <span>Democratic Republic of Congo</span>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-gold"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-gold"
              ></textarea>
              <button className="w-full py-3 px-6 bg-gold hover:bg-gold-light text-earth font-bold rounded transition-colors">
                Send Message
              </button>
            </div>
          </div>
          
          {/* Ecobank Support */}
          <div className="absolute left-4 bottom-4 flex items-center gap-2">
            <img 
              src="/lovable-uploads/1a0e4b98-6766-4606-a441-b17b5b5e198f.png" 
              alt="Ecobank Logo" 
              className="h-8 object-contain"
            />
            <span className="text-sm text-white/80">Supported by Ecobank</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;