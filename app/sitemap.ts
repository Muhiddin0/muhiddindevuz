import { MetadataRoute } from "next";
import { instance } from "./services";
import { Project } from "./lib/types";
import { MODERATOR_ID } from "./lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = "http://muhiddindev.uz";

  let {
    data,
  }: {
    data: {
      projects: Array<Project>;
    };
  } = await instance.get(`/moderator/${MODERATOR_ID}/projects`);
  let projects = data["projects"].map((project) => ({
    url: BASE_URL + "/projects/" + project.id,
    lastModified: new Date(project["reles_date"]).toISOString(),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
    },
    {
      url: BASE_URL + "/projects/",
      lastModified: new Date().toISOString(),
    },
    {
      url: BASE_URL + "/contact/",
      lastModified: new Date().toISOString(),
    },
    ...projects,
  ];
}
