import { MetadataRoute } from "next";
import { instance } from "./services";
import { Project } from "./lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let {
    data,
  }: {
    data: {
      projects: Array<Project>;
    };
  } = await instance.get(`/moderator/${process.env.MODERATOR_ID}/projects`);
  let projects = data["projects"].map((project) => ({
    url: "projects/" + project.id,
    lastModified: new Date(project["reles_date"]).toISOString(),
  }));

  return [
    {
      url: "/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "projects/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "contact/",
      lastModified: new Date().toISOString(),
    },
    ...projects,
  ];
}
