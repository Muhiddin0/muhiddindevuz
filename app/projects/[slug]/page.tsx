import { notFound } from "next/navigation";

import { Project } from "@/app/lib/types";
import Gallery from "./gallery";
import { Header } from "./header";
import { instance } from "@/app/services";
import "./mdx.css";
import { MODERATOR_ID } from "@/app/lib/config";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  await instance.post(
    `/moderator/${MODERATOR_ID}/projects/${params.slug}/increment`
  );

  let {
    data: project,
  }: {
    data: Project;
  } = await instance.get(`/moderator/${MODERATOR_ID}/projects/${params.slug}`);

  return {
    title: project.title,
    description: project.description,
    url: "https://muhddindev.uz/projects/" + params.slug,
    images: project.images.map((image) => ({
      url: image.image,
      width: 1920,
      height: 1080,
    })),
  };
}

export default async function PostPage({ params }: Props) {
  try {
    await instance.post(
      `/moderator/${MODERATOR_ID}/projects/${params.slug}/increment`
    );

    let {
      data: project,
    }: {
      data: Project;
    } = await instance.get(
      `/moderator/${MODERATOR_ID}/projects/${params.slug}`
    );

    return (
      <div className="bg-zinc-50 min-h-screen">
        <Header project={project} />
        <div className="container mx-auto">
          {project.videos.map((video) => (
            <iframe
              src={video.video_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-[80%] h-[150px] min-[291px]:h-[200px] min-[500px]:h-[300px] min-[600px]:h-[400px] xl:h-[500px] mx-auto my-5"
              // @ts-ignore
              allowfullscreen
            ></iframe>
          ))}
        </div>

        <Gallery title={project.title} images={project.images} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
