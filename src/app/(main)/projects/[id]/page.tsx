import { notFound } from "next/navigation";
import Link from 'next/link';
import {
  ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ProjectTabs } from "./_components/project-tabs";

const getProject = (id: string) => {
  return projects.find((p) => p.id === id);
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" asChild>
          <Link href="/projects">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {project.name}
        </h1>
        <Badge variant={project.progress === 100 ? 'default' : 'secondary'} className="ml-auto sm:ml-0">
          {project.progress === 100 ? 'Completed' : 'In Progress'}
        </Badge>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Project</Button>
        </div>
      </div>
      <ProjectTabs project={project} />
    </div>
  );
}
