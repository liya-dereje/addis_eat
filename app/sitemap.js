export default async function sitemap() {
  const baseUrl = "https://addiseats.et";
  
  const staticDishesIds = ["kitfo", "shiro"];
  const dynamicDishesRoutes = staticDishesIds.map((id) => ({
    url: `${baseUrl}/menu/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...dynamicDishesRoutes,
  ];
}
