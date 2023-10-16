import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projectsData = [
  {
    title: "Search GitHub Users",
    desc: "Powered by GitHub API, this project just to get a users and repos.",
    url: "/projects/search-github",
  },
  {
    title: "Simple ToDo",
    desc: "A simple todo list, powered by supabase.",
    url: "/projects/todo",
  },
];

export default function Projects() {
  return (
    <div className="container flex flex-col gap-5">
      {projectsData.map((project) => (
        <Card className="min-w-full" key={project.url}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={project.url}>Try now 🚀</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
