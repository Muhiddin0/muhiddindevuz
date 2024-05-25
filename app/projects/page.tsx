import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { instance } from "../services";
import { Project } from "../lib/types";
import { MODERATOR_ID } from "../lib/config";

export default async function ProjectsPage() {
  let {
    data,
  }: {
    data: {
      projects: Array<Project>;
    };
  } = await instance.get(`/moderator/${MODERATOR_ID}/projects`);
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
          {data.projects.map((project) => (
            <Card key={project.id}>
              <Article project={project} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
