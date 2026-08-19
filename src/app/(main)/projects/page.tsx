"use client";

import { useState } from 'react';
import Link from "next/link";
import { PlusCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { NewProjectDialog } from './_components/new-project-dialog';

export default function ProjectsPage() {
  const [showNewProjectDialog, setShowNewProjectDialog] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
        <Button onClick={() => setShowNewProjectDialog(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <NewProjectDialog open={showNewProjectDialog} onOpenChange={setShowNewProjectDialog} />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="flex">
            <Card className="w-full flex flex-col hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="truncate">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2 min-h-[40px]">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-semibold">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {project.team.map((user) => (
                    <Avatar
                      key={user.id}
                      className="h-8 w-8 border-2 border-card"
                    >
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Badge variant={project.progress === 100 ? 'default' : 'secondary'}>
                    {project.progress === 100 ? 'Completed' : 'In Progress'}
                </Badge>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
