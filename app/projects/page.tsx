import Link from "next/link";
import React from "react";
import { Project, allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

export const revalidate = 60;
export default async function ProjectsPage() {
  let projects = [
    {
      id: 1,
      title: "csdc",
      description: "sdcdscsd",
      reles_date: "2024-05-22",
      link: "http://google.com",
      technology_list: [
        {
          id: 1,
          skils: 1,
        },
      ],
      images: [
        {
          id: 1,
          image:
            "http://195.161.68.240:1000/media/projects/Screenshot_20_6GiW1Zi.png",
        },
      ],
      videos: [
        {
          id: 1,
          video_url: "https://t.me/black_hole_225",
        },
      ],
    },
    {
      id: 1,
      title: "csdc",
      description: "sdcdscsd",
      reles_date: "2024-05-22",
      link: "http://google.com",
      technology_list: [
        {
          id: 1,
          skils: 1,
        },
      ],
      images: [
        {
          id: 1,
          image:
            "http://195.161.68.240:1000/media/projects/Screenshot_20_6GiW1Zi.png",
        },
      ],
      videos: [
        {
          id: 1,
          video_url: "https://t.me/black_hole_225",
        },
      ],
    },
    {
      id: 1,
      title: "csdc",
      description: "sdcdscsd",
      reles_date: "2024-05-22",
      link: "http://google.com",
      technology_list: [
        {
          id: 1,
          skils: 1,
        },
      ],
      images: [
        {
          id: 1,
          image:
            "http://195.161.68.240:1000/media/projects/Screenshot_20_6GiW1Zi.png",
        },
      ],
      videos: [
        {
          id: 1,
          video_url: "https://t.me/black_hole_225",
        },
      ],
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Loyihalar
          </h2>
          <p className="mt-4 text-zinc-400">
            Ba'zi loyihalar ishdan, ba'zilari esa o'z vaqtimdan.{" "}
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projects.map((project) => (
            <Card key={project.id}>
              <Article project={project} views={0} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
