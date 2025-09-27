/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bharathpainters.com",
  generateRobotsTxt: true, // optional
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  outDir: "./public", 
  transform: async (config, path) => {
    let priority = path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.7;
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority,
    };
  },
};
