export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/menu", "/menu/kitfo", "/menu/shiro"],
      disallow: ["/cart", "/checkout", "/orders", "/kitchen"],
    },
    sitemap: "https://addiseats.et",
  };
}
