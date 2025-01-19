import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { GithubIcon } from "@/components/icons";
import { ProjectAPIResponse } from "@/types/projects";
import Image from "next/image";

export default function ProjectCard({
  project,
}: {
  project: ProjectAPIResponse["data"]["results"][number];
}) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Image
        className="h-auto w-full object-cover"
        width={1000}
        height={1000}
        src={project.poster}
        alt={project.name}
      />
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">{project.name}</span>
        </div>
        <div className="mt-3">
          <p className="line-clamp-3 text-xs md:text-sm">
            {project.description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={project.source_code}
            target="_blank"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </a>
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
