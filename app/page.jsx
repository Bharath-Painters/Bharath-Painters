import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Professional Home Services | Deep Cleaning, Painting & More",
  description:
    "Professional home services focused on deep cleaning, interior & exterior painting, grouting, textures, wallpapers and waterproofing. Quality workmanship guaranteed.",
  keywords:
    "home services, deep cleaning, exterior painting, interior painting, grouting, texture finishes, wallpapers, waterproofing, home improvement, bharath painters",
  openGraph: {
    title: "Professional Home Services | Quality Home Improvement Solutions",
    description:
      "Transform your home with our professional services including deep cleaning, painting, grouting, textures, wallpapers and waterproofing. Quality guaranteed.",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
