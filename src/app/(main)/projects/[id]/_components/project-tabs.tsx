"use client";

import { useState } from 'react';
import { Share, PlusCircle, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project, Task } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TaskList } from './task-list';
import { GenerateSummary } from "./generate-summary";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { InviteMemberDialog } from './invite-member-dialog';
import { NewTaskDialog } from './new-task-dialog';


interface ProjectTabsProps {
    project: Project;
}

export function ProjectTabs({ project }: ProjectTabsProps) {
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);

    const tasksByStatus = project.tasks.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
    }, {} as Record<Task['status'], number>);

    const chartData = [
        { name: 'To Do', value: tasksByStatus.todo || 0, fill: 'var(--color-todo)' },
        { name: 'In Progress', value: tasksByStatus['in-progress'] || 0, fill: 'var(--color-in-progress)' },
        { name: 'Done', value: tasksByStatus.done || 0, fill: 'var(--color-done)' },
        { name: 'Canceled', value: tasksByStatus.canceled || 0, fill: 'var(--color-canceled)' },
    ].filter(d => d.value > 0);
    
    const chartConfig: ChartConfig = {
        todo: { label: 'To Do', color: 'hsl(var(--muted-foreground))' },
        'in-progress': { label: 'In Progress', color: 'hsl(var(--primary))' },
        done: { label: 'Done', color: 'hsl(var(--accent))' },
        canceled: { label: 'Canceled', color: 'hsl(var(--destructive))' },
    };

    return (
        <>
            <Tabs defaultValue="overview">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="tasks">Tasks</TabsTrigger>
                        <TabsTrigger value="summary">AI Summary</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <Button size="sm" variant="outline" className="h-8 gap-1">
                            <Share className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Share
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value="overview">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="lg:col-span-4">
                            <CardHeader>
                                <CardTitle>Project Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div>
                                    <p className="text-sm font-medium mb-2">Description</p>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                                <Separator />
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <p className="text-sm font-medium">Team Members</p>
                                        <Button size="sm" variant="outline" onClick={() => setShowInviteDialog(true)}>
                                            <UserPlus className="mr-2 h-4 w-4" />
                                            Invite
                                        </Button>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {project.team.map(user => (
                                            <TooltipProvider key={user.id}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <Avatar>
                                                            <AvatarImage src={user.avatar} />
                                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{user.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="lg:col-span-3">
                            <CardHeader>
                                <CardTitle>Progress</CardTitle>
                                <CardDescription>
                                    {project.tasks.filter(t => t.status === 'done').length} of {project.tasks.length} tasks completed.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex items-center">
                                    <span className="text-sm text-muted-foreground">Overall Progress</span>
                                    <span className="ml-auto font-semibold">{project.progress}%</span>
                                </div>
                                <Progress value={project.progress} className="h-2" />
                                <ChartContainer
                                config={chartConfig}
                                className="mx-auto aspect-square h-[250px]"
                                >
                                <PieChart>
                                    <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={60}
                                    strokeWidth={5}
                                    >
                                    {chartData.map((entry) => (
                                        <Cell key={entry.name} fill={entry.fill} />
                                    ))}
                                    </Pie>
                                </PieChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="tasks">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Tasks</CardTitle>
                                <CardDescription>Manage all tasks associated with this project.</CardDescription>
                            </div>
                            <Button size="sm" onClick={() => setShowNewTaskDialog(true)}>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Task
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <TaskList initialTasks={project.tasks} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="summary">
                    <GenerateSummary tasks={project.tasks.map(t => ({id: t.id, title: t.title, status: t.status === 'done' ? 'completed' : 'incomplete'}))} />
                </TabsContent>
            </Tabs>
            <InviteMemberDialog show={showInviteDialog} setShow={setShowInviteDialog} />
            <NewTaskDialog show={showNewTaskDialog} setShow={setShowNewTaskDialog} />
        </>
    );
}
