import {
  Card,
  CardAction,
  CardDescription,
  CardHeading,
  CardImage,
  CardTitle,
} from "../molecules/Card/ProjectCard";
import Tag from "../atoms/Tag";

type ProjectProps = {
  title: string;
  description: string;
  image_url: string;
  tag: string[];
  github_link ?: string;
  demo_link ?: string;
}

type Props = {
  projects: ProjectProps[];
};

export default function ProjectList({projects}: Props) {
  return (
    <div id="projects">
      <h3 className="uppercase">Featured Projects</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 2xl:mt-[51px] 2xl:gap-x-16 2xl:gap-y-5">
        {projects.map((project, idx) => (
          <Card key={idx}>
            <CardImage image_url={project.image_url} />
            <CardHeading>
              <CardTitle>{project.title}</CardTitle>
              <CardAction demo_url={project.demo_link} github_url={project.github_link} />
            </CardHeading>
            <CardDescription>{project.description}</CardDescription>
            <div className="flex gap-1">
              {project.tag.map((tag, i) => (
                <span key={i} className="flex items-center gap-1">
                  <Tag className="text-sm 2xl:text-base">
                    <a href="#">{tag}</a>
                  </Tag>
                  {i < (project.tag.length - 1) && <span>-</span>}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
