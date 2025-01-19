"use client";

import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { ProjectAPIResponse } from "@/types/projects";
import { instance } from "@/services/instace";
import { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState<ProjectAPIResponse | null>(null);

  async function getData() {
    const { data } = await instance.get<ProjectAPIResponse>("/project");
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  if (data)
    return (
      <>
        <NextSeo
          title="Projects by Muhiddin - React and Frontend Developer Portfolio"
          description="Explore a collection of projects by Muhiddin, a seasoned React and Frontend Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
          canonical={`${siteMetadata.siteUrl}/projects`}
          openGraph={{
            url: `${siteMetadata.siteUrl}/projects`,
            title:
              "Discover Projects by Muhiddin - React and Frontend Developer",
            description:
              "Explore a showcase of projects crafted by Muhiddin, a React and Frontend Developer. Witness the fusion of creativity and technology in web development.",
            images: [
              {
                url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
                alt: "Muhiddin - Portfolio Image",
              },
            ],
            siteName: siteMetadata.siteName,
            type: "website",
          }}
          twitter={{
            cardType: "summary_large_image",
          }}
          additionalMetaTags={[
            {
              property: "keywords",
              content:
                "Projects, Portfolio, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
            },
          ]}
        />
        <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
              Loyihalarim
            </h1>
            <div className="my-2">
              <span className="text-sm text-muted-foreground">
                Bu yerda men baham ko‘rmoqchi bo‘lgan loyihalarim bor{" "}
              </span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
              {data.data.results.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
              <span className="text-xl font-bold md:text-2xl">
                Men hozirda o&apos;zimni startaplarimni yo&apos;lga
                qo&apos;ymoqdaman. Menga omadn tilang.
              </span>
              <p className="mt-10 text-base md:text-xl">
                so&apos;nggi loyihalarini ko&apos;rish uchun mening github-ga
                tashrif buyuring{" "}
                <a
                  href={`${siteMetadata.github}?tab=repositories`}
                  target="_blank"
                  className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  return null;
}
