import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Bharath Painters",
  description: "Blogs about Bharath Painters",
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <h1 className="text-2xl font-bold">Blog</h1>
      <p>No blogs</p>
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl max-l-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold">Blog</h1>
          <p>No blogs</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
