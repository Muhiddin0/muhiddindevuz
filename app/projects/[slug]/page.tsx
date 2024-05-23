import Gallery from "./gallery";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  let project = {
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
      {
        id: 1,
        image:
          "http://195.161.68.240:1000/media/projects/Screenshot_20_6GiW1Zi.png",
      },
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
  };
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={0} />
      <Gallery title={project.title} images={project.images} />
    </div>
  );
}
