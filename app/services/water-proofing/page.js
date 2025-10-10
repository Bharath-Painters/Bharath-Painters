import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Droplet,
  Shield,
  Home,
  Layers,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Waterproofing Services in Bangalore | No More Leaks",
  description:
    "Bharath Painters delivers reliable waterproofing in Bangalore—terrace, bathroom & wall waterproofing to stop leaks and dampness. Get a free inspection today.",
  keywords:
    "waterproofing, roof waterproofing, wall waterproofing, basement waterproofing, bathroom waterproofing, leakage solutions, damp proofing, home waterproofing services, bharath painters",
  openGraph: {
    title: "Professional Waterproofing Services - Protect Your Property",
    description:
      "Keep your home protected from water damage with our expert waterproofing services. Reliable solutions for roofs, walls, basements, and bathrooms.",
  },
};

export default function Waterproofing() {
  const services = [
    {
      title: "Roof & Terrace Waterproofing",
      description:
        "Protect your roof and terrace from leaks and cracks with advanced waterproofing solutions.",
      features: [
        "Crack filling & sealing",
        "Heat-resistant coatings",
        "Rainproof finishes",
        "UV protection",
        "Durable sealants",
        "Moisture resistance",
      ],
    },
    {
      title: "Wall & Exterior Waterproofing",
      description:
        "Safeguard your walls from dampness, seepage, and damage with specialized wall coatings.",
      features: [
        "Exterior wall coatings",
        "Anti-damp solutions",
        "Peeling & flaking prevention",
        "Mold & mildew resistance",
        "Breathable finishes",
        "Color protection",
      ],
    },
    {
      title: "Basement & Bathroom Waterproofing",
      description:
        "Comprehensive waterproofing for basements and wet areas to prevent seepage and structural damage.",
      features: [
        "Bathroom floor waterproofing",
        "Basement damp-proofing",
        "Tile joint sealing",
        "Leakage prevention",
        "Anti-fungal treatment",
        "Odor control",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Complete Protection",
      description:
        "Reliable waterproofing to protect your property from long-term water damage.",
    },
    {
      icon: <Droplet size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Leak Prevention",
      description:
        "Advanced sealants and coatings prevent leakage and seepage issues.",
    },
    {
      icon: <Layers size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Durable Solutions",
      description:
        "We use premium materials designed for long-lasting waterproofing results.",
    },
    {
      icon: <Home size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Property Value",
      description:
        "Protecting your home increases its lifespan and preserves property value.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional Waterproofing Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto pb-2">
            Keep your home safe and dry with our expert waterproofing solutions.
            From roofs to basements, we provide reliable and long-lasting
            protection.
          </p>
          <div className="flex  gap-3 items-center justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-0 py-2 rounded-lg font-semibold transition-all duration-300 text-center w-52 "
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-blue-700 text-white hover:bg-blue-800 px-0 py-2 rounded-lg font-semibold transition-all duration-300 text-center w-52"
            >
              <div className="flex items-center justify-center gap-2">
                <ArrowLeft /> Back
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Our Waterproofing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl py-4 px-3 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Why Choose Our Waterproofing
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4">
                {benefit.icon}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-3 pb-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ready to Waterproof Your Property?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
            Contact us today for professional waterproofing solutions designed
            to protect your home for years to come.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
