export default function sitemap() {
  const baseUrl = "https://www.bharathpainters.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/deep-cleaning",
    "/services/exterior-painting",
    "/services/grouting",
    "/services/interior-painting",
    "/services/texture",
    "/services/wallpapers",
    "/services/water-proofing",
    "/gallery",
    "/testimonials",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
